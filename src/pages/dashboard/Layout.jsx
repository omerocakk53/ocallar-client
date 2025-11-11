import { Outlet } from 'react-router-dom'
import PrivateRoute from '@/components/PrivateRoute'
import Header from './layout/components/Header'

const Layout = () => {
  return (
    <PrivateRoute>
      <Header />
      <Outlet />
    </PrivateRoute>
  )
}
export default Layout
