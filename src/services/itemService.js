import axiosInstance from '@/api/axiosInstance'

const ENDPOINT = 'items'

export const create = (data) => axiosInstance.post(ENDPOINT, data)
export const update = (id, data) => axiosInstance.patch(`${ENDPOINT}/${id}`, data)
