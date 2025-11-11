import { AuthService } from '@/services'
import toast from 'react-hot-toast'

const Header = () => {
  const handleClick = () => {
    toast.promise(AuthService.logout(), {
      loading: 'Loading...',
      error(err) {
        console.log(err)
        return 'Error!'
      },
      success(data) {
        console.log(data)
        return 'success'
      },
    })
  }

  return (
    <div>
      Header <button onClick={handleClick}>logout</button>
    </div>
  )
}
export default Header
