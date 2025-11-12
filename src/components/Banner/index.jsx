import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay, EffectFade } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import slideData from './banner-data'
import BannerSlide from './BannerSlide'
import BannerNav from './BannerNav'

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="banner-section">
      <Swiper
        className="banner-carousel"
        modules={[Navigation, Autoplay, EffectFade]}
        navigation={{
          prevEl: '.banner-owl-prev',
          nextEl: '.banner-owl-next',
        }}
        effect="fade"
        loop
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {slideData.map((slide, index) => (
          <SwiperSlide
            key={slide.id}
            className={`owl-item ${index === activeIndex ? 'active' : ''}`}
          >
            <BannerSlide slide={slide} />
          </SwiperSlide>
        ))}
      </Swiper>

      <BannerNav />
    </section>
  )
}

export default Banner
