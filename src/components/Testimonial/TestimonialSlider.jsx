import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
<<<<<<< HEAD
import { Autoplay, Pagination, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import TestimonialItem from './TestimonialItem'

class TestimonialSlider extends Component {
  constructor(props) {
    super(props)
    this.state = { activeIndex: 0 }
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
      <div className="space-y-12">
        {/* Aktif Yorum Alanı - Büyük ve Vurgulu */}
        <div className="relative bg-bg/5 border border-bg/10 p-10 lg:p-16 text-center shadow-2xl backdrop-blur-md">
          <i className="fas fa-quote-left text-accent/20 text-6xl absolute top-6 left-10"></i>
          <div className="relative z-10">
            <p className="text-bg text-xl lg:text-3xl font-medium leading-relaxed italic tracking-wide transition-all duration-500">
              {testimonials[activeIndex].text}
            </p>
          </div>
          <div className="h-1 w-24 bg-accent mx-auto mt-8"></div>
        </div>

        {/* Swiper Slider - Küçük Kartlar */}
        <Swiper
          modules={[Autoplay, Pagination]}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          centeredSlides={true}
          slidesPerView={1}
          spaceBetween={30}
          onSlideChange={this.handleSlideChange}
          onSwiper={(swiper) => (this.swiperRef = swiper)}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={item.id}>
              <div
                className="cursor-pointer py-4"
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
      </div>
    )
  }
=======
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
>>>>>>> ac52c62c6028f29248758adc4a6c83eb85ff3d47
}

export default TestimonialSlider
