import { Outlet } from 'react-router-dom'
import HeaderLayout from './HeaderLayout'
import Footer from '@/components/Footer'
const MainLayout = () => {
  return (
    <>
      <HeaderLayout />
      <Outlet />
      <Footer />
    </>
  )
}

export default MainLayout
