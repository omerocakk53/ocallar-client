import { useAuth } from '@/hooks/useAuth'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
  const { user } = useAuth()
  const location = useLocation()

  if (user) {
    return children
  }

  return (
    <Navigate
      replace
      to="/auth/login"
      state={{ from: location }}
    />
  )
}
export default PrivateRoute
