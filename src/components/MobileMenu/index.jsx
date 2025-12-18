import React from 'react'
import ContactInfo from './ContactInfo'
import NavItemMobile from './NavItem' // Mobil için basitleştirilmiş nav item
import { navItems } from '../Header/header-data'
import { useSocial } from '@/admin/hooks/web-management/useSocial'
import footerData from '../Footer/footer-data'
import { X } from 'lucide-react'

const MobileMenu = ({ isOpen, onClose }) => {
  const { social } = useSocial()
  const { info } = footerData

  return (
    <div
      className={`fixed inset-0 z-[250] transition-all duration-500 ${isOpen ? 'visible' : 'invisible'}`}
    >
      {/* Karartma (Backdrop) */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
      />

      {/* Yan Panel */}
      <nav
        className={`absolute right-0 top-0 flex h-full w-[320px] flex-col bg-[#f4f4f2] shadow-2xl transition-transform duration-500 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between p-8">
          <img
            src="/uploads/images/sidebar-logo.png"
            alt="Logo"
            className="h-10 w-auto object-contain"
          />
          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center bg-[#2b2b2b] text-[#d4af37]"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-8 py-4">
          <ul className="flex flex-col">
            {navItems.map((item, index) => (
              <NavItemMobile
                key={index}
                {...item}
              />
            ))}
          </ul>

          <div className="mt-10 flex gap-4">
            {social.map((item, index) => (
              <a
                key={index}
                href={item.socialLink}
                className="text-[#2b2b2b] hover:text-[#d4af37]"
              >
                <i className={item.socialIcon}></i>
              </a>
            ))}
          </div>
        </div>

        <ContactInfo info={info} />
      </nav>
    </div>
  )
}

export default MobileMenu
