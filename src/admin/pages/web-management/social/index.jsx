import { useState } from 'react'
import { useSocial } from '@/admin/hooks/web-management/useSocial' // Hook ismini düzelttik
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/admin/components/ui/card'
import { Button } from '@/admin/components/ui/button'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/admin/components/ui/alert-dialog'
import { Loader2, Plus } from 'lucide-react'
import { toast } from 'sonner'

import { SocialList } from '@/admin/components/web-management/social/SocialList'
import { SocialFormDialog } from '@/admin/components/web-management/social/SocialFormDialog'

export default function SocialManagementPage() {
  const { social, loading, addSocial, editSocial, removeSocial } = useSocial()
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleOpenAdd = () => {
    setSelectedItem(null)
    setIsDialogOpen(true)
  }

  const handleOpenEdit = (item) => {
    setSelectedItem(item)
    setIsDialogOpen(true)
  }

  const handleOpenDelete = (id) => {
    setSelectedItem({ _id: id })
    setIsDeleteDialogOpen(true)
  }

  const handleFormSubmit = async (formData) => {
    setIsSubmitting(true)
    try {
      if (selectedItem?._id) {
        await editSocial(selectedItem._id, formData)
        toast.success('Sosyal medya hesabı güncellendi.')
      } else {
        await addSocial(formData)
        toast.success('Yeni sosyal medya hesabı eklendi.')
      }
      setIsDialogOpen(false)
    } catch {
      toast.error('İşlem sırasında bir hata oluştu.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleConfirmDelete = async () => {
    if (!selectedItem?._id) return

    try {
      await removeSocial(selectedItem._id)
      toast.success('Kayıt başarıyla silindi.')
    } catch {
      toast.error('Silme işlemi başarısız.')
    } finally {
      setIsDeleteDialogOpen(false)
      setSelectedItem(null)
    }
  }

  return (
    <div className="p-6 space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-2xl font-bold">Link Yönetimi</CardTitle>
          <Button
            onClick={handleOpenAdd}
            className="gap-2"
          >
            <Plus className="w-4 h-4" /> Yeni Ekle
          </Button>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex justify-center items-center py-10">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          ) : (
            <SocialList
              data={social}
              onEdit={handleOpenEdit}
              onDelete={(id) => handleOpenDelete(id)}
            />
          )}
        </CardContent>
      </Card>
      <SocialFormDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        onSubmit={handleFormSubmit}
        initialData={selectedItem}
        isSubmitting={isSubmitting}
      />
      <AlertDialog
        open={isDeleteDialogOpen}
        onOpenChange={setIsDeleteDialogOpen}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Emin misiniz?</AlertDialogTitle>
            <AlertDialogDescription>
              Bu kaydı silmek istediğinize emin misiniz? Bu işlem geri alınamaz.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>İptal</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleConfirmDelete}
              className="bg-destructive hover:bg-destructive/90"
            >
              Sil
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
