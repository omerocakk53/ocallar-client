import React from 'react'
import NewsItem from './NewsItem'
import { useNews } from '@/admin/hooks/useNews'
import './News.css' // CSS dosyasını import etmeyi unutma!

const News = () => {
  const { news } = useNews()

  // Eğer haber yoksa bölümü boşuna gösterme veya "Yükleniyor" göster
  if (!news) return null

  return (
    <section className="news-section">
      <div className="auto-container">
        {/* Başlık */}
        <div className="sec-title centred">
          <h5>Öcallar Petrol</h5>
          <h2>Güncel Haberler & Duyurular</h2>
        </div>

        {/* Grid Alanı */}
        <div className="row clearfix">
          {news.length > 0 ? (
            news.map((item) => (
              <NewsItem
                key={item._id}
                item={item}
              />
            ))
          ) : (
            // Haber yoksa kullanıcıya bilgi ver
            <div className="col-12 text-center py-5">
              <p className="text-muted">Şu anda güncel bir haber bulunmamaktadır.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default News
