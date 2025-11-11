import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'

import LoadingSpinner from '@/components/LoadingSpinner'

import Home from '@/pages/Home'

const AuthLayout = lazy(() => import('@/pages/auth/AuthLayout'))
const Login = lazy(() => import('@/pages/auth/Login'))
const Register = lazy(() => import('@/pages/auth/Register'))

const DashboardLayout = lazy(() => import('@/pages/dashboard/Layout'))
const Dashboard = lazy(() => import('@/pages/dashboard/Dashboard'))

const Items = lazy(() => import('@/pages/dashboard/item'))
const ItemsCreate = lazy(() => import('@/pages/dashboard/item/ItemCreate'))
const ItemsDetail = lazy(() => import('@/pages/dashboard/item/ItemDetail'))

const AppRouter = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="auth"
          element={<AuthLayout />}
        >
          <Route
            path="login"
            element={<Login />}
          />
          <Route
            path="register"
            element={<Register />}
          />
        </Route>

        <Route
          path="dashboard"
          element={<DashboardLayout />}
        >
          <Route
            index
            element={<Dashboard />}
          />

          <Route path="items">
            <Route
              index
              element={<Items />}
            />
            <Route
              path="create"
              element={<ItemsCreate />}
            />
            <Route
              path=":id"
              element={<ItemsDetail />}
            />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  )
}
export default AppRouter
