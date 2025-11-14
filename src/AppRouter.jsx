import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'

import Footer from '@/components/Footer'
import HeaderLayout from '@/pages/layout/HeaderLayout'
import HumanResources from '@/components/HumanResources'
import NewsDetail from '@/components/NewsDetail'
import News from '@/admin/pages/News/index'
import MainLayout from '@/pages/layout/MainLayout'
import useAdminRoutes from '@/AdminRoutes'
import LazyLoading from '@/components/LazyLoading'

const Home = lazy(() => import('@/pages/Home'))
const AuthLayout = lazy(() => import('@/pages/auth/AuthLayout'))
const Login = lazy(() => import('@/pages/auth/Login'))
const Register = lazy(() => import('@/pages/auth/Register'))

const AppRouter = () => {
  const adminRoutes = useAdminRoutes()
  return (
    <Suspense fallback={<LazyLoading />}>
      <Routes>
        {adminRoutes}
        <Route
          path="/"
          element={
            <>
              <MainLayout />
            </>
          }
        >
          <Route
            index
            element={<Home />}
          />
          <Route
            path="human-resources"
            element={
              <>
                <HumanResources />
              </>
            }
          />
          <Route
            path="news-detail/:id"
            element={
              <>
                <NewsDetail />
              </>
            }
          />
        </Route>

        <Route
          path="auth"
          element={<AuthLayout />}
        >
          <Route
            path="login"
            element={<Login />}
          />
          {/* <Route
            path="register"
            element={<Register />}
          /> */}
        </Route>
      </Routes>
    </Suspense>
  )
}
export default AppRouter
