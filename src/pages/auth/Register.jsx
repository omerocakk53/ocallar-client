import { AuthService } from '@/services'
import toast from 'react-hot-toast'

const Register = () => {
  const handleClick = () => {
    toast.promise(
      AuthService.register({
        name: 'fasil',
        email: 'mail@address.com',
        password: 'my_password_1s_5trong',
      }),
      {
        loading: 'Loading...',
        error(err) {
          console.log(err)
          return 'Error!'
        },
        success(data) {
          console.log(data)
          return 'success'
        },
      },
    )
  }

  return (
    <div>
      <button onClick={handleClick}>Register</button>
    </div>
  )
}
export default Register
