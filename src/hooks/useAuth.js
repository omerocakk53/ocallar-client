import { useSelector, useDispatch } from 'react-redux'
import {
  loginSuccess as loginAction,
  logout as logoutAction,
  selectUser,
  selectTokens,
  selectIsAuthenticated,
} from '@/store/authSlice'

export const useAuth = () => {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)
  const tokens = useSelector(selectTokens)
  const isAuthenticated = useSelector(selectIsAuthenticated)

  const login = (userData) => {
    dispatch(loginAction(userData))
  }

  const logout = () => {
    dispatch(logoutAction())
  }

  return {
    user,
    tokens,
    isAuthenticated,
    login,
    logout,
  }
}
