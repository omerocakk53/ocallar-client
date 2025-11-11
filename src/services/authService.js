import axiosInstance from '@/api/axiosInstance'
import { store } from '@/store'
import { loginSuccess, logout as llogout } from '@/store/authSlice'

const AUTH_ENDPOINT = 'auth'

export const login = async (data) => {
  const result = await axiosInstance.post(`${AUTH_ENDPOINT}/login`, data)
  store.dispatch(loginSuccess(result.data))
  return result
}

export const register = (data) => axiosInstance.post(`${AUTH_ENDPOINT}/register`, data)
export const logout = async () => {
  try {
    const { tokens } = store.getState().auth
    await axiosInstance.post(`${AUTH_ENDPOINT}/logout`, {
      refreshToken: tokens.refresh.token,
    })
    store.dispatch(llogout())
  } catch (error) {
    if (error.status === 404) {
      store.dispatch(llogout())
      return
    }
    throw error
  }
}
