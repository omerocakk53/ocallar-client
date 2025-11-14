import axiosInstance from '@/api/axiosInstance'

const ENDPOINT = 'upload'

export const single = (file) => {
  const formData = new FormData()
  formData.append('file', file)

  return axiosInstance.post(ENDPOINT, formData)
}
