import React from 'react'
<<<<<<< HEAD
=======
import { Link } from 'react-router-dom' // React Router kullandığını varsayıyorum
>>>>>>> ac52c62c6028f29248758adc4a6c83eb85ff3d47

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
<<<<<<< HEAD
    <div className="group h-full">
      <div className="bg-white border border-primary/5 h-full transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
        {/* Görsel Alanı */}
        <figure className="relative overflow-hidden aspect-[16/10]">
          <a
            href={'news-detail/' + item._id}
            className="block w-full h-full"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Görsel Üzeri Overlay */}
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </a>

          {/* Tarih veya Kategori Badge (Opsiyonel) */}
          <div className="absolute top-4 left-4 bg-accent text-primary px-3 py-1 text-[10px] font-black uppercase tracking-widest">
            Haber
          </div>
        </figure>

        {/* İçerik Alanı */}
        <div className="p-8 space-y-4">
          <h3 className="text-xl font-bold tracking-tight text-primary leading-tight min-h-[56px] line-clamp-2 uppercase">
            <a
              href={'news-detail/' + item._id}
              className="hover:text-accent transition-colors"
            >
              {item.title}
            </a>
          </h3>

          <p className="text-text-light text-sm leading-relaxed line-clamp-3">{item.description}</p>

          <div className="pt-4 flex items-center">
            <a
              href={'news-detail/' + item._id}
              className="group/link flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.2em] text-primary hover:text-accent transition-colors"
            >
              <span>HABERİ OKU</span>
              <i className="fas fa-arrow-right transition-transform group-hover/link:translate-x-2"></i>
            </a>
          </div>
=======
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
>>>>>>> ac52c62c6028f29248758adc4a6c83eb85ff3d47
        </div>

        {/* BMW Tarzı Alt Süsleme Çizgisi */}
        <div className="h-[3px] w-0 bg-accent transition-all duration-500 group-hover:w-full"></div>
      </div>
    </div>
  )
}

export default NewsItem
