import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay, Parallax, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import slideData from './banner-data'
import BannerSlide from './BannerSlide'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'

const Banner = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#2b2b2b]">
      <Swiper
        speed={1200}
        parallax={true}
        modules={[Navigation, Autoplay, Parallax, Pagination]}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} !w-12 !h-[2px] !rounded-none !bg-[#d4af37] !transition-all"></span>`
          },
        }}
        navigation={{
          prevEl: '.banner-prev',
          nextEl: '.banner-next',
        }}
        loop={true}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        className="h-full w-full"
      >
        {slideData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <BannerSlide slide={slide} />
          </SwiperSlide>
        ))}

        {/* BMW Tarzı Minimal Navigasyon */}
        <div className="absolute bottom-10 right-10 z-20 flex gap-4">
          <button className="banner-prev group flex h-12 w-12 items-center justify-center border border-[#d4af37]/30 text-[#d4af37] transition-all hover:bg-[#d4af37] hover:text-[#2b2b2b]">
            <FaAngleLeft />
          </button>
          <button className="banner-next group flex h-12 w-12 items-center justify-center border border-[#d4af37]/30 text-[#d4af37] transition-all hover:bg-[#d4af37] hover:text-[#2b2b2b]">
            <FaAngleRight />
          </button>
        </div>
      </Swiper>
    </section>
  )
}

export default Banner
