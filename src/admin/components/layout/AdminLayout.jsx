import PrivateRoute from '@/components/PrivateRoute'
import { Navigate, Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { useAuth } from '@/hooks/useAuth'
import '@/admin/style/tailwind.css'
const AdminLayout = () => {
  const { isAdmin } = useAuth()

  // if (!isAdmin) {
  //   return (
  //     <Navigate
  //       to="/"
  //       replace
  //     />
  //   )
  // }

  return (
    <PrivateRoute>
      <div className="flex min-h-screen bg-background text-foreground">
        <Navbar />
        <Sidebar />
        <main className="flex-1 pt-16 md:ml-64 p-4 overflow-auto">
          {' '}
          <Outlet />
        </main>
      </div>
    </PrivateRoute>
  )
}

export default AdminLayout
