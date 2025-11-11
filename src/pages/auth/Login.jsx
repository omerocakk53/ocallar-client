import { AuthService } from '@/services'
import toast from 'react-hot-toast'
import { useLocation, useNavigate } from 'react-router-dom'

const Login = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const from = location.state?.from || { pathname: '/dashboard', search: '' }

  const handleClick = () => {
    toast.promise(
      AuthService.login({ email: 'mail@address.com', password: 'my_password_1s_5trong' }),
      {
        loading: 'Loading...',
        error(err) {
          console.log(err)
          return 'Error!'
        },
        success(data) {
          navigate(from.pathname + from.search, { replace: true })
          console.log(data)
          return 'success'
        },
      },
    )
  }

  return (
    <div>
      <button onClick={handleClick}>Login</button>
    </div>
  )
}
export default Login
