import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { Link } from 'react-router-dom'
import serviceData from './service-data'

// Swiper stilleri
import 'swiper/css'
// Kendi CSS dosyamız
import './Service.css'

const Service = () => {
  return (
    <section className="service-section">
      <div className="auto-container">
        {' '}
        <div className="service-header">
          <div className="service-title">
            <h5>Öcallar Petrol</h5>
            <h2>Tedarikçilerimiz</h2>
          </div>
          <div className="service-desc">
            <p>
              Öcallar Petrol ailesinin bir parçası olan tüm çözüm ortaklarımızı inceleyebilirsiniz.
            </p>
          </div>
        </div>
        <div className="service-wrapper">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={2}
            loop={true}
            speed={2500} // Biraz daha yavaş ve yumuşak akış
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              576: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1200: { slidesPerView: 5 },
            }}
            className="service-slider"
          >
            {serviceData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="service-card">
                  <img
                    src={item.image}
                    alt={`Tedarikçi Logo ${index}`}
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* Alt Buton */}
        <div className="more-btn-box">
          <Link
            to="/#"
            className="custom-btn"
          >
            <i className="fas fa-arrow-right"></i>
            <span>Tüm Tedarikçilerimizi Gör</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Service
