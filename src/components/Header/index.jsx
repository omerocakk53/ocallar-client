import React, { useState, useEffect, forwardRef } from 'react'
import Logo from './Logo'
import NavItem from './NavItem'
import { navItems } from './header-data'

const Header = forwardRef(({ onMobileNavClick }, ref) => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      ref={ref}
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ${
        isScrolled ? 'bg-[#f4f4f2]/95 backdrop-blur-md shadow-xl' : 'bg-[#f4f4f2]/60'
      }`}
    >
      <div className="container mx-auto px-8">
        <div className="flex items-center justify-between h-20 lg:h-28 transition-all duration-500">
          <Logo src="/uploads/images/sidebar-logo.png" />

          {/* Masaüstü Navigasyon */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-4">
              {navItems.map((item, index) => (
                <NavItem
                  key={index}
                  {...item}
                />
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="relative group overflow-hidden px-10 py-4 bg-[#2b2b2b] text-white text-[11px] font-black tracking-[0.25em] uppercase transition-all duration-300"
            >
              <span className="relative z-10">TEKLİF AL</span>
              <div className="absolute inset-0 bg-[#d4af37] translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
            </a>

            {/* Mobil Menü Butonu - onMobileNavClick'i tetikler */}
            <button
              onClick={onMobileNavClick}
              className="lg:hidden flex flex-col gap-1.5 p-2 text-[#2b2b2b]"
            >
              <span className="w-7 h-[2px] bg-current" />
              <span className="w-7 h-[2px] bg-current" />
              <span className="w-5 h-[2px] bg-current self-end" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
})

export default Header
