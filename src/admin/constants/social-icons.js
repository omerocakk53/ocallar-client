import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Github,
  Mail,
  Phone,
  MapPin,
  Globe,
  Link as LinkIcon, // 'Link' ismi HTML tagi ile çakışmasın diye LinkIcon olarak alıyoruz
  Send,
  MessageCircle,
  Video,
  Music,
  ShoppingBag,
  Star,
  Hash,
  HelpCircle,
  Camera,
  Twitch,
} from 'lucide-react'

export const socialIconList = [
  { value: 'Facebook', label: 'Facebook', icon: Facebook },
  { value: 'Instagram', label: 'Instagram', icon: Instagram },
  { value: 'Twitter', label: 'Twitter (X)', icon: Twitter },
  { value: 'Linkedin', label: 'LinkedIn', icon: Linkedin },
  { value: 'Youtube', label: 'YouTube', icon: Youtube },
  { value: 'Github', label: 'GitHub', icon: Github },
  { value: 'Twitch', label: 'Twitch', icon: Twitch },
  { value: 'Mail', label: 'E-Posta', icon: Mail },
  { value: 'Phone', label: 'Telefon', icon: Phone },
  { value: 'MessageCircle', label: 'WhatsApp', icon: MessageCircle },
  { value: 'Send', label: 'Telegram', icon: Send },
  { value: 'Globe', label: 'Web Sitesi', icon: Globe },
  { value: 'MapPin', label: 'Konum', icon: MapPin },
  { value: 'Link', label: 'Bağlantı', icon: LinkIcon }, // Burada LinkIcon kullanıyoruz
  { value: 'Camera', label: 'Fotoğraf', icon: Camera },
  { value: 'Video', label: 'Video', icon: Video },
  { value: 'Music', label: 'Müzik', icon: Music },
  { value: 'ShoppingBag', label: 'Mağaza', icon: ShoppingBag },
  { value: 'Star', label: 'Yıldız', icon: Star },
  { value: 'Hash', label: 'Diğer', icon: Hash },
]

export const socialIconMap = socialIconList.reduce(
  (acc, item) => {
    acc[item.value] = item.icon
    return acc
  },
  {
    HelpCircle: HelpCircle,
  },
)
