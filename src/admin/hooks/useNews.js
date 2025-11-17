import { useEffect, useState, useCallback } from 'react'
import { single } from '@/services/uploadService'
import { get, create, update, remove } from '../services/newsService'

const extractData = (res) => res?.data || res?.news || (Array.isArray(res) ? res : [])

const preparePayload = async (formData) => {
  let finalImagePath = formData.image
  if (formData.image instanceof File) {
    try {
      const uploadResult = await single(formData.image)
      finalImagePath = uploadResult?.data?.file
    } catch {
      throw new Error('Resim yüklenemedi.')
    }
  }

  return {
    title: formData.title,
    content: formData.content,
    image: finalImagePath,
  }
}

export const useNews = () => {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchNews = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const result = await get()
      setNews(extractData(result))
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchNews()
  }, [fetchNews])

  const addNews = async (formData) => {
    const payload = await preparePayload(formData)
    const result = await create(payload)
    const newItem = result.data || result.news || result

    if (newItem) {
      setNews((prev) => [newItem, ...prev])
    }
    return newItem
  }

  const editNews = async (id, formData) => {
    const payload = await preparePayload(formData)
    const result = await update(id, payload)
    const updatedItem = result.data || result.news || result

    if (updatedItem) {
      setNews((prev) => prev.map((item) => (item._id === id ? updatedItem : item)))
    }
    return updatedItem
  }

  const removeNews = async (id) => {
    await remove(id)
    setNews((prev) => prev.filter((item) => item._id !== id))
  }

  return {
    news,
    loading,
    error,
    addNews,
    editNews,
    removeNews,
    fetchNews,
  }
}
