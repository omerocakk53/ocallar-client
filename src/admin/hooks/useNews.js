import { useEffect, useState, useCallback } from 'react'
import { single } from '@/services/uploadService'
import { get, create, update, remove } from '../services/newsService'

const normalize = (item) => {
  if (!item) return null

  return {
    _id: item._id || item.id,
    title: item.title || '',
    content: item.content || '',
    image: item.image || '',
    createdAt: item.createdAt || null,
  }
}

export const useNews = () => {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchNews = useCallback(async () => {
    setLoading(true)
    setError(null)
    const result = await get()
    const list = Array.isArray(result)
      ? result
      : Array.isArray(result.data)
        ? result.data
        : Array.isArray(result.news)
          ? result.news
          : []

    setNews(list.map((item) => normalize(item)))
    setLoading(false)
  }, [])

  useEffect(() => {
    fetchNews()
  }, [fetchNews])

  const addNews = async (formData) => {
    let imagePath = formData.image
    if (formData.image instanceof File) {
      imagePath = await single(formData.image)
    }
    const payload = {
      title: formData.title,
      content: formData.content,
      image: imagePath.data.file,
    }
    const result = await create(payload)
    const newItem = normalize(result.data || result.news || result || null)
    if (!newItem) return
    setNews((prev) => [...prev, newItem])
    return newItem
  }

  const editNews = async (id, formData) => {
    let imagePath = formData.image
    if (formData.image instanceof File) {
      imagePath = await single(formData.image)
    }
    const payload = {
      title: formData.title,
      content: formData.content,
      image: imagePath.data.file,
    }
    const result = await update(id, payload)
    const updatedItem = normalize(result.data || result.news || result || null)
    if (!updatedItem) return
    setNews((prev) => prev.map((item) => (item._id === id ? updatedItem : item)))
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
