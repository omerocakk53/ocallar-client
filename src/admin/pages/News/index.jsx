import { useState } from 'react'
import { useNews } from '@/admin/hooks/useNews'
import NewsForm from '@/admin/components/news/NewsForm'
import NewsListItem from '@/admin/components/news/NewsListItem'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/admin/components/ui/dialog'
import { Button } from '@/admin/components/ui/button'
import LazyLoading from '@/components/LazyLoading'

const NewsPage = () => {
  const { news, loading, addNews, editNews, removeNews } = useNews()

  const [open, setOpen] = useState(false)
  const [editItem, setEditItem] = useState(null)

  const handleAdd = () => {
    setEditItem(null)
    setOpen(true)
  }

  const handleEdit = (item) => {
    setEditItem(item)
    setOpen(true)
  }

  const handleSubmit = async (values) => {
    if (editItem) {
      await editNews(editItem._id, values)
    } else {
      await addNews(values)
    }
    setOpen(false)
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Haber Yönetimi</h1>
        <Button onClick={handleAdd}>Yeni Haber Ekle</Button>
      </div>

      {loading ? (
        <LazyLoading />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item) => (
            <NewsListItem
              key={item._id}
              item={item}
              onEdit={handleEdit}
              onDelete={removeNews}
            />
          ))}
        </div>
      )}
      <Dialog
        open={open}
        onOpenChange={setOpen}
      >
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>{editItem ? 'Haberi Düzenle' : 'Yeni Haber Ekle'}</DialogTitle>
          </DialogHeader>
          <NewsForm
            initialValues={{
              title: editItem?.title || '',
              content: editItem?.content || '',
              image: editItem?.image || 'Yok',
            }}
            onSubmit={handleSubmit}
            submitText={editItem ? 'Güncelle' : 'Ekle'}
          />
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default NewsPage
