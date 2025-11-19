import { Users } from 'lucide-react'
import { CircleFadingPlus } from 'lucide-react'
import { Contact } from 'lucide-react'
import { Link } from 'lucide-react'
import { SquareUserRound } from 'lucide-react'
import { Sliders } from 'lucide-react'
import { Settings2Icon } from 'lucide-react'
import { List } from 'lucide-react'
import { Newspaper } from 'lucide-react'

const adminNavigation = [
  {
    name: 'Haberler',
    icon: Newspaper,
    children: [{ name: 'Haber Listesi', to: 'news', icon: List }],
  },
  {
    name: 'İnsan Kaynakları',
    icon: SquareUserRound,
    children: [{ name: 'İnsan Kaynakları Listesi', to: 'human-resources', icon: List }],
  },
  {
    name: 'İletişim',
    icon: Contact,
    children: [{ name: 'İletişim Listesi', to: 'contact-list', icon: List }],
  },
  {
    name: 'Site Yönetimi',
    icon: Settings2Icon,
    children: [
      { name: 'İletişim Bilgileri', to: 'contact', icon: Contact },
      { name: 'Link Yönetimi', to: 'social', icon: Link },
      { name: 'Slider İçerik Yönetimi', to: 'content/slider', icon: Sliders },
      { name: 'Navbar İçerik Yönetimi', to: 'content/navbar', icon: Sliders },
      { name: 'Footer İçerik Yönetimi', to: 'content/footer', icon: Sliders },
    ],
  },
  {
    name: 'Kullanıcılar',
    icon: Users,
    children: [{ name: 'Kullanıcı Listesi', to: 'users', icon: List }],
  },
]

export const useMainNavigation = () => {
  return adminNavigation
}
