import React from 'react'
import { useParams, Link } from 'react-router-dom'
import './index.css'

import { useNews } from '@/admin/hooks/useNews'

const NewsDetail = () => {
  const { id } = useParams()
  const { news } = useNews(id)

  if (!news) {
    return (
      <div className="news-detail-container">
        <h1 className="news-title">Haber Bulunamadı</h1>
        <p>Aradığınız haber yayında değil veya kaldırılmış olabilir.</p>
        <Link
          to="/"
          className="back-link"
        >
          ← Ana Sayfaya Geri Dön
        </Link>
      </div>
    )
  }
  return (
    <div className="news-detail-container">
      <h1 className="news-title">{news.title}</h1>
      <div className="news-image-container">
        <img
          src={news.image}
          alt={news.title}
          className="news-image"
        />
      </div>
      <div className="news-content">
        <p>{news.content}</p>
      </div>
      <Link
        to="/"
        className="back-link"
      >
        ← Ana Sayfaya Geri Dön
      </Link>
    </div>
  )
}

export default NewsDetail
