import React from 'react'
import ContactInfo from './ContactInfo'
import SocialLink from '../SocialLink'
import NavItem from './NavItem'
const contactData = {
  title: 'İletişim Bilgileri',
  items: [
    { text: 'Adres: Örnek Mah. Örnek Sk. No:12, İstanbul' },
    { text: '+90 555 555 55 55', href: 'tel:+905555555555' },
    { text: 'info@example.com', href: 'mailto:info@example.com' },
  ],
}
const mobileSocialLinks = [
  { href: 'index.html', iconClass: 'fab fa-twitter' },
  { href: 'index.html', iconClass: 'fab fa-facebook-square' },
  { href: 'index.html', iconClass: 'fab fa-pinterest-p' },
  { href: 'index.html', iconClass: 'fab fa-instagram' },
  { href: 'index.html', iconClass: 'fab fa-youtube' },
]
const navItems = [
  {
    href: 'index.html',
    label: 'Ana Sayfa',
  },
  {
    href: '#',
    label: 'Ürünlerimiz',
  },
  {
    href: 'index.html',
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
    href: 'index.html',
    label: 'Kurumsal',
    subItems: [
      { href: '#', label: 'İnsan Kaynakları' },
      { href: '#', label: 'Medya' },
      { href: '#', label: 'İletişim' },
    ],
  },
]

const MobileMenu = ({ onClose }) => {
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
          <a href="index.html">
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
        <ContactInfo
          title={contactData.title}
          items={contactData.items}
        />
        <div className="social-links">
          <ul className="clearfix">
            {mobileSocialLinks.map((link, index) => (
              <SocialLink
                key={index}
                href={link.href}
                iconClass={link.iconClass}
              />
            ))}
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default MobileMenu
