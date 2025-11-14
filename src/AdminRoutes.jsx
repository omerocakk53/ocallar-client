import { lazy } from 'react'
import { Route } from 'react-router-dom'

const AdminLayout = lazy(() => import('@/admin/components/layout/AdminLayout'))
const Dashboard = lazy(() => import('@/admin/pages/dashboard/index'))
const News = lazy(() => import('@/admin/pages/News/index'))

const useAdminRoutes = () => {
  return (
    <>
      <Route
        path="admin"
        element={<AdminLayout />}
      >
        <Route
          index
          element={<Dashboard />}
        />
        <Route
          path="news"
          element={<News />}
        />
        <Route
          path="human-resources"
          element={<>human-resources</>}
        />
        <Route
          path="contact"
          element={<>contact</>}
        />
        <Route
          path="social"
          element={<>social</>}
        />
        <Route
          path="content/slider"
          element={<>content/slider</>}
        />
        <Route
          path="content/navbar"
          element={<>content/navbar</>}
        />
        <Route
          path="content/footer"
          element={<>content/footer</>}
        />
        <Route
          path="users"
          element={<>users</>}
        />
      </Route>
    </>
  )
}

export default useAdminRoutes
