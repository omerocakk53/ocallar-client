import { useEffect, useState } from 'react'
import { Button } from '@/admin/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/admin/components/ui/dialog'
import { Input } from '@/admin/components/ui/input'
import { Label } from '@/admin/components/ui/label'
import { Loader2 } from 'lucide-react'
import { IconSelector } from '@/admin/components/ui/icon-selector'

export function SocialFormDialog({ open, onOpenChange, onSubmit, initialData, isSubmitting }) {
  const [formData, setFormData] = useState({
    socialName: '',
    socialLink: '',
    socialIcon: '',
  })

  useEffect(() => {
    if (open) {
      if (initialData) {
        setFormData({
          socialName: initialData.socialName || '',
          socialLink: initialData.socialLink || '',
          socialIcon: initialData.socialIcon || '',
        })
      } else {
        setFormData({ socialName: '', socialLink: '', socialIcon: '' })
      }
    }
  }, [open, initialData])

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{initialData ? 'Düzenle' : 'Yeni Ekle'}</DialogTitle>
          <DialogDescription>bilgilerini giriniz.</DialogDescription>
        </DialogHeader>
        <form
          onSubmit={handleSubmit}
          className="grid gap-4 py-4"
        >
          <div className="grid gap-2">
            <Label htmlFor="socialName">Platform Adı</Label>
            <Input
              id="socialName"
              placeholder="Örn: Instagram"
              value={formData.socialName}
              onChange={(e) => setFormData({ ...formData, socialName: e.target.value })}
              required
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="socialLink">Link</Label>
            <Input
              id="socialLink"
              placeholder="https://instagram.com/..."
              value={formData.socialLink}
              onChange={(e) => setFormData({ ...formData, socialLink: e.target.value })}
              required
            />
          </div>

          {/* İkon Seçici Bileşeni */}
          <div className="grid gap-2">
            <Label>İkon</Label>
            <IconSelector
              value={formData.socialIcon}
              onChange={(value) => setFormData({ ...formData, socialIcon: value })}
            />
            <p className="text-[11px] text-muted-foreground">Listeden uygun bir ikon seçiniz.</p>
          </div>

          <DialogFooter>
            <Button
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {initialData ? 'Güncelle' : 'Kaydet'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
