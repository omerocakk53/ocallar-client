import LoadingSpinner from '@/components/LoadingSpinner'
import { Link } from 'react-router-dom'
import useSWR from 'swr'

const Items = () => {
  const { data, isLoading, error } = useSWR('items')
  if (isLoading) {
    return <LoadingSpinner />
  }

  if (error) {
    return <div>try again</div>
  }

  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <Link to={item.id}>
              {item.title} ({item.description})
            </Link>
          </li>
        ))}
      </ul>
      <Link to="create">create</Link>(if u r god)
    </div>
  )
}
export default Items
