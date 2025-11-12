const socialLinks = [
  { href: 'index.html', iconClass: 'fab fa-facebook-f' },
  { href: 'index.html', iconClass: 'fab fa-google-plus-g' },
  { href: 'index.html', iconClass: 'fab fa-twitter' },
  { href: 'index.html', iconClass: 'fab fa-linkedin-in' },
  { href: 'index.html', iconClass: 'fab fa-instagram' },
]

const navItems = [
  { href: 'index.html', label: 'Ana Sayfa' },
  { href: '#', label: 'Ürünlerimiz' },
  {
    href: 'index.html',
    label: 'Dağıtım Merkezleri',
    subItems: [
      { href: '#', label: 'Devrek Dağıtım Merkezi' },
      { href: '#', label: 'Düzce Dağıtım Merkezi' },
    ],
  },
  { href: '#', label: 'Tedarikçilerimiz' },
  {
    href: 'index.html',
    label: 'Kurumsal',
    subItems: [
      { href: '#', label: 'İnsan Kaynakları' },
      { href: '#', label: 'Medya' },
      { href: '#', label: 'İletişim' },
    ],
  },
]

export { socialLinks, navItems }
