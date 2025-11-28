import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import TestimonialItem from './TestimonialItem'

// CSS Importları
import 'swiper/css'
import 'swiper/css/pagination'

const TestimonialSlider = ({ testimonials }) => {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      loop={true}
      spaceBetween={30} // Kartlar arası boşluk
      slidesPerView={1}
      speed={1000}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
        dynamicBullets: true, // Çok nokta varsa küçültür
      }}
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3, // Geniş ekranda 3 kart
        },
      }}
      className="pb-12" // Pagination için alttan boşluk
    >
      {testimonials.map((item) => (
        <SwiperSlide key={item.id}>
          <TestimonialItem item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default TestimonialSlider
