import { useState } from 'react'
import Header from '@/components/Header'
import MobileMenu from '@/components/MobileMenu'
import HeaderGo from '@/components/HeaderGo'
import { useInView } from 'react-intersection-observer'
import Banner from '@/components/Banner'

const HeaderLayout = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  })
  const [isOpen, setIsOpen] = useState(false)
  const openMobileMenu = () => setIsOpen(true)
  const closeMobileMenu = () => setIsOpen(false)
  return (
    <div className={`${isOpen ? 'mobile-menu-visible' : ''}`}>
      <Header
        ref={ref}
        inView={inView}
        onMobileNavClick={openMobileMenu}
      />
      <MobileMenu onClose={closeMobileMenu} />
      <Banner />
      <HeaderGo inView={inView} />
    </div>
  )
}

export default HeaderLayout
