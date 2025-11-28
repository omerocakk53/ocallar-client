import React from 'react'
import { Link } from 'react-router-dom' // React Router kullandığını varsayıyorum

const NewsItem = ({ item }) => {
  // Tarih verisi varsa formatla, yoksa bugünü göster (Demo amaçlı)
  const formattedDate = item.createdAt
    ? new Date(item.createdAt).toLocaleDateString('tr-TR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : 'Güncel Haber'

  return (
    <div className="col-lg-4 col-md-6 col-sm-12 news-block mb-4">
      <div className="news-card">
        <div className="news-image-box">
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
          />
          <div className="date-badge">{formattedDate}</div>
          <Link
            to={`/news-detail/${item._id}`}
            className="news-overlay"
          >
            <i className="fas fa-link"></i>
          </Link>
        </div>
        <div className="news-content">
          <h3 className="news-title">{item.title}</h3>
          <p className="news-desc">{item.description}</p>
          <Link
            to={`/news-detail/${item._id}`}
            className="read-more-btn"
          >
            <span>Haberi Oku</span>
            <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NewsItem
