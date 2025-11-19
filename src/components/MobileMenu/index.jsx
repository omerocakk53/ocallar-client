import React from 'react'
import ContactInfo from './ContactInfo'
import SocialLink from '../SocialLink'
import NavItem from './NavItem'
import footerData from '../Footer/footer-data'
import { useSocial } from '@/admin/hooks/web-management/useSocial'

const mobileSocialLinks = [
  { href: '#', iconClass: 'fab fa-twitter' },
  { href: '#', iconClass: 'fab fa-facebook-square' },
  { href: '#', iconClass: 'fab fa-pinterest-p' },
  { href: '#', iconClass: 'fab fa-instagram' },
  { href: '#', iconClass: 'fab fa-youtube' },
]
const navItems = [
  {
    href: '#',
    label: 'Ana Sayfa',
  },
  {
    href: '#',
    label: 'Ürünlerimiz',
  },
  {
    href: '#',
    label: 'Dağıtım Merkezleri',
    subItems: [
      { href: '#', label: 'Devrek Dağıtım Merkezi' },
      { href: '#', label: 'Düzce Dağıtım Merkezi' },
    ],
  },
  {
    href: '#',
    label: 'Tedarikçilerimiz',
  },
  {
    href: '#',
    label: 'Kurumsal',
    subItems: [
      { href: '#', label: 'İnsan Kaynakları' },
      { href: '#', label: 'Medya' },
      { href: '#', label: 'İletişim' },
    ],
  },
]

const MobileMenu = ({ onClose }) => {
  const { social } = useSocial()
  const { info } = footerData
  return (
    <div className="mobile-menu">
      <div className="menu-backdrop"></div>
      <div
        onClick={onClose}
        className="close-btn"
      >
        <i className="fas fa-times"></i>
      </div>

      <nav className="menu-box">
        <div className="nav-logo">
          <a href="#">
            <img
              src="/uploads/images/logo.png"
              alt="Mobil Logo"
              title=""
            />
          </a>
        </div>
        <div className="menu-outer">
          <div className="collapse navbar-collapse show clearfix">
            <ul className="navigation clearfix">
              {navItems.map((item, index) => (
                <NavItem
                  key={index}
                  href={item.href}
                  label={item.label}
                  subItems={item.subItems}
                />
              ))}
            </ul>
          </div>
        </div>
        <ContactInfo info={info} />
        <div
          className="social-links"
          style={{ padding: '0' }}
        >
          <ul className="clearfix">
            {social.map((item, index) => (
              <SocialLink
                key={index}
                href={item.socialLink}
                icon={item.socialIcon}
              />
            ))}
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default MobileMenu
