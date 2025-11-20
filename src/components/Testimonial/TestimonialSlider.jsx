import React, { Component } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'

import 'swiper/css'
import TestimonialItem from './TestimonialItem'

class TestimonialSlider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeIndex: 0,
    }
    this.swiperRef = null
  }
  handleSlideChange = (swiper) => {
    this.setState({ activeIndex: swiper.realIndex })
  }
  handleClickSlide = (index) => {
    this.setState({ activeIndex: index })
    if (this.swiperRef) {
      this.swiperRef.slideToLoop(index)
    }
  }
  render() {
    const { testimonials } = this.props
    const { activeIndex } = this.state

    return (
      <>
        <div className="testimonial-inner">
          <div className="client-testimonial-carousel">
            <div className="testimonial-block active">
              <div className="text">
                <p>{testimonials[activeIndex].text}</p>
              </div>
            </div>
          </div>
        </div>
        <Swiper
          modules={[Autoplay, Pagination]}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          centeredSlides={true}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
          }}
          spaceBetween={10}
          onSlideChange={this.handleSlideChange}
          onSwiper={(swiper) => (this.swiperRef = swiper)}
          className="testimonial-inner"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={item.id}>
              <div
                className="client-thumb-outer cursor-pointer"
                style={{ maxWidth: 'none' }}
                onClick={() => this.handleClickSlide(index)}
              >
                <TestimonialItem
                  testimonial={item}
                  isOpen={index === activeIndex}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    )
  }
}

export default TestimonialSlider
