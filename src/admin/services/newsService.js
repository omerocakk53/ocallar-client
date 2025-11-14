import axiosInstance from '@/api/axiosInstance'

const ENDPOINT = 'news'

export const create = (data) => axiosInstance.post(ENDPOINT, data)
export const update = (id, data) => axiosInstance.patch(`${ENDPOINT}/${id}`, data)
export const remove = (id) => axiosInstance.delete(`${ENDPOINT}/${id}`)
export const get = () => axiosInstance.get(ENDPOINT)
export const getOne = (id) => axiosInstance.get(`${ENDPOINT}/${id}`)

export default {
  create,
  update,
  remove,
  get,
  getOne,
}
