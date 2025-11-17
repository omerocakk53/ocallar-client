import axiosInstance from '@/api/axiosInstance'

const ENDPOINT = 'web-management/social'

export const create = (data) => axiosInstance.post(ENDPOINT, data)
export const update = (id, data) => axiosInstance.patch(`${ENDPOINT}/${id}`, data)
export const remove = (id) => axiosInstance.delete(`${ENDPOINT}/${id}`)
export const get = () => axiosInstance.get(ENDPOINT)

export default {
  create,
  update,
  remove,
  get,
}
