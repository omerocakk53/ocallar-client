import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
<<<<<<< HEAD
import { Autoplay, FreeMode } from 'swiper/modules'
import { Link } from 'react-router-dom'
import ServiceItem from './ServiceItem'
import serviceData from './service-data'

import 'swiper/css'
import 'swiper/css/free-mode'

const Service = () => {
  return (
    <section className="bg-bg py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-8">
        {/* Başlık Bölümü - Yapı Korundu */}
        <div className="flex flex-wrap items-end -mx-4 mb-20">
          <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
            <div className="border-l-4 border-accent pl-6">
              <h5 className="text-accent text-[11px] font-black uppercase tracking-[0.4em] mb-2">
                Öcallar Petrol
              </h5>
              <h2 className="text-primary text-4xl lg:text-5xl font-extrabold tracking-tighter uppercase">
                Tedarikçilerimiz
              </h2>
            </div>
=======
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
>>>>>>> ac52c62c6028f29248758adc4a6c83eb85ff3d47
          </div>
          <div className="w-full lg:w-1/2 px-4 lg:text-right">
            <p className="text-primary/70 text-sm font-medium leading-relaxed max-w-lg lg:ml-auto">
              Öcallar Petrol ailesinin bir parçası olan tüm çözüm ortaklarımızı kesintisiz bir
              akışla inceleyebilirsiniz.
            </p>
          </div>
        </div>
<<<<<<< HEAD

        {/* Logolar için Swiper Slider */}
        <div className="inner-content -mx-8 lg:-mx-16">
          <Swiper
            modules={[Autoplay, FreeMode]}
            loop={true}
            freeMode={true}
            speed={4000} // Akış hızı (Premium hissi için yavaş ve sürekli)
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            slidesPerView={2}
            spaceBetween={20}
            breakpoints={{
              640: { slidesPerView: 3, spaceBetween: 30 },
              1024: { slidesPerView: 5, spaceBetween: 40 },
              1400: { slidesPerView: 6, spaceBetween: 50 },
            }}
            className="logo-slider"
          >
            {serviceData.map((item, index) => (
              <SwiperSlide key={index}>
                <ServiceItem
                  item={item}
                  index={index}
                />
=======
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
>>>>>>> ac52c62c6028f29248758adc4a6c83eb85ff3d47
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
<<<<<<< HEAD

        {/* CTA Butonu */}
        <div className="mt-20 text-center">
          <Link
            to="/tedarikciler"
            className="group inline-flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.3em] text-primary"
          >
            <span className="h-[1px] w-12 bg-accent transition-all duration-500 group-hover:w-20"></span>
            Tüm Listeyi İncele
=======
        {/* Alt Buton */}
        <div className="more-btn-box">
          <Link
            to="/#"
            className="custom-btn"
          >
            <i className="fas fa-arrow-right"></i>
            <span>Tüm Tedarikçilerimizi Gör</span>
>>>>>>> ac52c62c6028f29248758adc4a6c83eb85ff3d47
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Service
