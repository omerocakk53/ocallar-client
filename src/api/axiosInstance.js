import axios from 'axios'
import { store } from '@/store'
import { loginSuccess, logout } from '@/store/authSlice'

const API_BASE_URL = 'http://localhost:3000/v1/'

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
})

// Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const state = store.getState()
    const token = state.auth.tokens?.access?.token

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config
    // 401 Unauthorized hatası ve token yenileme mantığı
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true
      try {
        const state = store.getState()
        const refreshToken = state.auth.tokens?.refresh?.token
        if (!refreshToken) {
          // Refresh token yoksa direkt logout yap ve hatayı fırlat
          store.dispatch(logout())
          return Promise.reject(error)
        }

        // Refresh token isteği
        const { data } = await axios.post(`${API_BASE_URL}auth/refresh-tokens`, { refreshToken })
        // Yukarıdaki satırda `axios.post` kullandım, `axiosInstance.post` değil, çünkü bu isteğin interceptor'lardan
        // (özellikle bu response interceptor'ından) tekrar geçmesini istemeyebiliriz.
        // Alternatif olarak, refresh token isteği için ayrı bir axios instance'ı oluşturulabilir.

        store.dispatch(loginSuccess({ user: data.user, tokens: data.tokens })) // Yeni token'ları ve kullanıcıyı kaydet

        // Orijinal isteğin header'ını yeni token ile güncelle
        if (data.tokens?.access?.token) {
          originalRequest.headers['Authorization'] = `Bearer ${data.tokens.access.token}`
        }
        return axiosInstance(originalRequest) // Orijinal isteği tekrarla
      } catch (refreshError) {
        store.dispatch(logout()) // Yenileme başarısız olursa çıkış yap
        // Kullanıcıyı login sayfasına yönlendirmek de iyi bir fikir olabilir.
        // window.location.href = '/login';
        return Promise.reject(refreshError)
      }
    }
    return Promise.reject(error)
  },
)

export default axiosInstance
