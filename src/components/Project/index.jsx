import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import projectData from './project-data'

const Project = () => {
  return (
    <section className="project-section">
      <div className="auto-container">
        <div className="title-box">
          <div className="row clearfix">
            <div className="col-lg-6 col-md-12 col-sm-12 title-column">
              <div className="sec-title right">
                <h5>Öcallar Petrol</h5>
                <h2>Markalarımız</h2>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 text-column">
              <div className="text">
                <p>
                  Öcallar Petrol ailesinin bir parçası olan tüm çözüm ortaklarımızı
                  inceleyebilirsiniz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={false}
        navigation={false}
        spaceBetween={30} // Kartlar arası boşluk
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4, // Masaüstünde yan yana 4 marka
          },
          1400: {
            slidesPerView: 5, // Geniş ekranda yan yana 5 marka
          },
        }}
        className="project-carousel theme-carousel"
      >
        {projectData.map((project) => (
          <SwiperSlide key={project.id}>
            <div className="project-block-one">
              <div
                className="inner-box"
                style={{ position: 'relative', background: '#fff' }} // Arka plan beyaz olsun
              >
                <figure
                  className="image-box"
                  style={{
                    height: '230px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <img
                    src={project.imgSrc}
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain', // Logoların kesilmesini engeller
                      padding: '20px', // Kenarlardan biraz boşluk
                    }}
                  />
                </figure>
                <div
                  className="lower-content"
                  style={{ zIndex: 2 }}
                >
                  <p>{project.subtitle}</p>
                  <h2>
                    <a href={project.link}>{project.title}</a>
                  </h2>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Project
