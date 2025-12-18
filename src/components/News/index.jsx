import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import NewsItem from './NewsItem'
import { useNews } from '@/admin/hooks/useNews'

// Swiper stillerini eklediğinden emin ol
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const News = () => {
  const { news } = useNews()

  return (
    <section className="py-24 lg:py-32 bg-bg">
      {' '}
      {/* root bg rengi */}
      <div className="container mx-auto px-8">
        {/* Başlık Alanı - BMW Tarzı Minimalist */}
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <span className="text-accent text-[11px] font-black uppercase tracking-[0.4em] block">
            GÜNCEL GELİŞMELER
          </span>
          <h2 className="text-primary text-4xl lg:text-5xl font-extrabold tracking-tighter uppercase">
            Öcallar'dan <span className="text-accent">Haberler</span>
          </h2>
          <div className="h-[2px] w-20 bg-accent mx-auto mt-4"></div>
        </div>

        {/* Swiper Slider Yapısı */}
        <div className="relative group">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={news.length > 3}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-16"
          >
            {news.map((item) => (
              <SwiperSlide key={item._id}>
                <NewsItem item={item} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* BMW Tarzı Yan Navigasyon Okları - Sadece Masaüstünde ve Hoverda Görünür */}
          <div className="hidden lg:block">
            {/* Swiper default oklarını CSS ile de özelleştirebilirsin */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default News
