import { Users } from 'lucide-react'
import { CircleFadingPlus } from 'lucide-react'
import { Contact } from 'lucide-react'
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
    children: [{ name: 'İletişim Listesi', to: 'contact', icon: List }],
  },
  {
    name: 'Site yönetimi',
    icon: Settings2Icon,
    children: [
      { name: 'Sosyal Medya yönetimi', to: 'social', icon: Sliders },
      { name: 'Slider İçerik yönetimi', to: 'content/slider', icon: Sliders },
      { name: 'Navbar İçerik yönetimi', to: 'content/navbar', icon: Sliders },
      { name: 'Footer İçerik yönetimi', to: 'content/footer', icon: Sliders },
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
