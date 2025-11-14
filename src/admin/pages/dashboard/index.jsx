import { Helmet } from 'react-helmet'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/admin/components/ui/card'
import { Separator } from '@/admin/components/ui/separator'
import { Button } from '@/admin/components/ui/button'
import { Badge } from '@/admin/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/admin/components/ui/avatar'
import { ArrowRight, Settings, LineChart } from 'lucide-react'

const Dashboard = () => {
  return (
    <>
      <Helmet>
        <title>{'Yönetim Paneli | Öcallar'}</title>
        <meta
          name="description"
          content="Öcallar yönetim paneli"
        />
        <meta
          property="og:title"
          content="Yönetim Paneli"
        />
        <meta
          property="og:description"
          content="Öcallar yönetim paneli - Web site yönetimi"
        />
      </Helmet>

      <div className="flex flex-col gap-8 p-6">
        <Card className="border rounded-2xl shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-2xl font-bold">Hoş geldin, Admin</CardTitle>
              <CardDescription>
                Yönetim paneline eriştin. Aşağıdan hızlı aksiyonlara devam edebilirsin.
              </CardDescription>
            </div>
            <Avatar className="h-12 w-12">
              <AvatarImage
                src="/avatar.png"
                alt="User"
              />
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4 mt-2">
              <Badge
                variant="secondary"
                className="px-3 py-1 text-sm"
              >
                Admin Hesabı
              </Badge>
              <Badge
                variant="outline"
                className="px-3 py-1 text-sm"
              >
                Son giriş: 12 dakika önce
              </Badge>
            </div>
          </CardContent>
        </Card>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="rounded-2xl hover:shadow-md transition">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Site Ayarları</CardTitle>
              <Settings className="h-6 w-6 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">Genel site ayarlarını düzenle.</p>
              <Button
                variant="outline"
                className="w-full"
              >
                Ayarlara Git <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
          <Card className="rounded-2xl hover:shadow-md transition">
            <CardHeader>
              <CardTitle>Hızlı Aksiyonlar</CardTitle>
              <CardDescription>Sık kullandığın işlemlere hızlıca eriş.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-3">
                <Button className="justify-start">Yeni Haber Oluştur</Button>
              </div>
            </CardContent>
          </Card>
        </div>
        <Separator />
      </div>
    </>
  )
}

export default Dashboard
