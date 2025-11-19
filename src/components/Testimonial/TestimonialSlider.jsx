import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Thumbs } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/thumbs'

import TestimonialItem from './TestimonialItem'

const TestimonialSlider = ({ testimonials }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="testimonial-inner">
      <Swiper
        modules={[Autoplay, Thumbs]}
        loop={true}
        rewind={false}
        loopAdditionalSlides={testimonials.length}
        loopedSlides={testimonials.length}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        onSlideChange={(swiper) => {
          const index = swiper.realIndex
          setActiveIndex(index)
          if (thumbsSwiper) {
            thumbsSwiper.slideTo(index)
          }
        }}
        className="client-testimonial-carousel"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={item.id}>
            <div className={`testimonial-block ${index === activeIndex ? 'active' : ''}`}>
              <div className="text">
                <p>{item.text}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        modules={[Thumbs]}
        onSwiper={setThumbsSwiper}
        loop={true}
        rewind={false}
        loopAdditionalSlides={testimonials.length}
        loopedSlides={testimonials.length}
        slidesPerView={5}
        centeredSlides={true}
        slideToClickedSlide={true}
        watchSlidesProgress={true}
        className="client-thumb-outer"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={item.id}>
            <div className="client-thumbs-carousel owl-carousel owl-theme owl-nav-none owl-dots-none owl-loaded owl-drag">
              <TestimonialItem
                isOpen={index == activeIndex}
                testimonial={item}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default TestimonialSlider
