import React from 'react'
import { useParams, Link } from 'react-router-dom'
import './index.css'
const newsData = [
  {
    id: 1,
    img: '/uploads//images/news/news-1.jpg',
    title: 'Haber 1',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum expedita esse ipsum rerum alias dolorem dolore excepturi dolores itaque tempora temporibus odio incidunt deserunt perferendis tempore, nobis nesciunt quod! Dolorum.',
  },
  {
    id: 2,
    img: '/uploads//images/news/news-1.jpg',
    title: 'Haber 2',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum expedita esse ipsum rerum alias dolorem dolore excepturi dolores itaque tempora temporibus odio incidunt deserunt perferendis tempore, nobis nesciunt quod! Dolorum.',
  },
  {
    id: 3,
    img: '/uploads//images/news/news-1.jpg',
    title: 'Haber 3',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum expedita esse ipsum rerum alias dolorem dolore excepturi dolores itaque tempora temporibus odio incidunt deserunt perferendis tempore, nobis nesciunt quod! Dolorum.',
  },
]

const NewsDetail = () => {
  const { id } = useParams()
  const news = newsData.find((item) => item.id === parseInt(id))
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
          src={news.img}
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
