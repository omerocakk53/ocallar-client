import NewsItem from './NewsItem'
import { useNews } from '@/admin/hooks/useNews'
const News = () => {
  const { news } = useNews()
  return (
    <section className="news-section bg-color-1">
      <div className="auto-container">
        <div className="sec-title centred">
          <h5>Öcallar Petrol</h5>
          <h2>Haberler</h2>
        </div>

        <div className="row clearfix">
          {news.map((item) => (
            <NewsItem
              key={item._id}
              item={item}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default News
