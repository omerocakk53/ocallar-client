import axiosInstance from './axiosInstance'

/**
 * SWR için genel fetcher fonksiyonu.
 * Verilen URL'ye axiosInstance ile GET isteği yapar ve datayı döner.
 * @param {string} url - İstek atılacak API endpoint'i (base URL hariç).
 * @returns {Promise<any>} API'den dönen data.
 */
const fetcher = async (url) => {
  try {
    const response = await axiosInstance.get(url)
    return response.data
  } catch (error) {
    // Hataları SWR'a iletmek için fırlatıyoruz.
    // SWR, error nesnesini yakalayacak ve useSWR hook'unun error alanına atayacak.
    const err = new Error(error.response?.data?.message || error.message || 'Bir hata oluştu.')
    // API'den gelen status code'u da ekleyebiliriz, SWR bunu kullanabilir.
    err.status = error.response?.status
    // API'den gelen tüm response'u da ekleyebiliriz, hata detayları için.
    err.info = error.response?.data
    throw err
  }
}

export default fetcher
