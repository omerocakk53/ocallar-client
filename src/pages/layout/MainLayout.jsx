import { Outlet } from 'react-router-dom'
import HeaderLayout from './HeaderLayout'
import Footer from '@/components/Footer'
import { useEffect } from 'react'
const MainLayout = () => {
  useEffect(() => {
    import('../../style/index.css')
  })
  return (
    <>
      <HeaderLayout />
      <Outlet />
      <Footer />
    </>
  )
}

export default MainLayout
