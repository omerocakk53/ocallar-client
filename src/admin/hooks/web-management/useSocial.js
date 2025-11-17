import { useEffect, useState, useCallback } from 'react'
import { get, create, update, remove } from '@/admin/services/web-management/socialService'

export const useSocial = () => {
  const [social, setSocial] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const extractData = (res) => res?.data || res?.social || (Array.isArray(res) ? res : [])

  const fetchSocial = useCallback(async () => {
    setLoading(true)
    try {
      const result = await get()
      setSocial(extractData(result))
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchSocial()
  }, [fetchSocial])

  const addSocial = async (formData) => {
    const result = await create(formData)
    const newItem = result.data || result.social || result
    if (newItem) {
      setSocial((prev) => [...prev, newItem])
    }
    return newItem
  }

  const editSocial = async (id, formData) => {
    const result = await update(id, formData)
    const updatedItem = result.data || result.social || result
    if (updatedItem) {
      setSocial((prev) => prev.map((item) => (item._id === id ? updatedItem : item)))
    }
    return updatedItem
  }
  const removeSocial = async (id) => {
    await remove(id)
    setSocial((prev) => prev.filter((item) => item._id !== id))
  }

  return {
    social,
    loading,
    error,
    addSocial,
    editSocial,
    removeSocial,
    fetchSocial,
  }
}
