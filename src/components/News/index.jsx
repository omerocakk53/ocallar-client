import NewsItem from './NewsItem'
import newsData from './news-data'

const News = () => {
  return (
    <section className="news-section bg-color-1">
      <div className="auto-container">
        <div className="sec-title centred">
          <h5>Öcallar Petrol</h5>
          <h2>Haberler</h2>
        </div>

        <div className="row clearfix">
          {newsData.map((item) => (
            <NewsItem
              key={item.id}
              item={item}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default News
