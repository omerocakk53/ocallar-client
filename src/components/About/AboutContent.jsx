import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Link } from 'react-router-dom'

// --- BU SATIRLAR ÇOK ÖNEMLİ ---
import 'swiper/css'
import 'swiper/css/pagination'
// ------------------------------

const AboutContent = ({ subtitle, title, text, features }) => {
  return (
    <div className="content-box pl-lg-5">
      <div className="sec-title left">
        <h5>{subtitle}</h5>
        <h2 className="mb-4">{title}</h2>
      </div>

      <div className="text mb-8">
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#666', marginBottom: '30px' }}>
          {text}
        </p>
      </div>

      <div className="vertical-swiper-container">
        <Swiper
          direction={'vertical'}
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          speed={800}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            // Noktaların görünmesi için bu elementin classını CSS'te yakalayacağız
            el: '.custom-swiper-pagination',
            type: 'bullets',
          }}
        >
          {features.map((item, index) => (
            <SwiperSlide key={index}>
              <Link
                to={item.link || '#'}
                style={{ textDecoration: 'none', display: 'block', height: '100%' }}
              >
                <div className="feature-slide-item">
                  <div className="feature-icon">
                    <i className={item.icon}></i>
                  </div>
                  <div className="feature-text">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                  <div style={{ color: '#ccc', marginRight: '20px' }}>
                    <i className="fas fa-chevron-right"></i>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
          <div className="custom-swiper-pagination"></div>
        </Swiper>
      </div>
    </div>
  )
}

export default AboutContent
