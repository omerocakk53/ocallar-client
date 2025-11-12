import { useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Controller } from 'swiper/modules'
import 'swiper/css'
import TestimonialItem from './TestimonialItem'

const TestimonialSlider = ({ testimonials }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const textSwiperRef = useRef(null)
  const thumbSwiperRef = useRef(null)

  return (
    <>
      <Swiper
        modules={[Controller]}
        onSwiper={(swiper) => (textSwiperRef.current = swiper)}
        controller={{ control: thumbSwiperRef.current }}
        loop={true}
        centeredSlides={true}
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="client-testimonial-carousel"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={testimonial.id}>
            <div className={`testimonial-block ${index === activeIndex ? 'active' : ''}`}>
              <div className="text">
                <p>{testimonial.text}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        modules={[Autoplay, Controller]}
        onSwiper={(swiper) => (thumbSwiperRef.current = swiper)}
        controller={{ control: textSwiperRef.current }}
        loop={true}
        centeredSlides={true}
        spaceBetween={5}
        slidesPerView={5}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={5}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="client-thumb-outer"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={testimonial.id}>
            <div
              onClick={() => {
                textSwiperRef.current.slideToLoop(index)
                thumbSwiperRef.current.slideToLoop(index)
              }}
            >
              <TestimonialItem
                isOpen={activeIndex === index}
                testimonial={testimonial}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default TestimonialSlider
