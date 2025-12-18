import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import HeaderGo from '@/components/HeaderGo'
import { useInView } from 'react-intersection-observer'
import Banner from '@/components/Banner'
import MobileMenu from '@/components/MobileMenu'

const HeaderLayout = () => {
  const { ref, inView } = useInView({ threshold: 0.1 })
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <div className="relative">
      <Header
        ref={ref}
        inView={inView}
        onMobileNavClick={() => setIsOpen(true)}
      />

      <main>
        <Banner />
      </main>

      <HeaderGo
        inView={inView}
        onMobileNavClick={() => setIsOpen(true)}
      />

      <MobileMenu
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </div>
  )
}

export default HeaderLayout
