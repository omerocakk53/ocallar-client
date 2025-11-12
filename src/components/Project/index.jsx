import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import projectData from './project-data'
const Project = () => {
  return (
    <section className="project-section">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={false}
        navigation={false}
        spaceBetween={0}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1400: {
            slidesPerView: 3,
          },
        }}
        className="project-carousel theme-carousel"
      >
        {projectData.map((project) => (
          <SwiperSlide key={project.id}>
            <div className="project-block-one">
              <div
                className="inner-box"
                style={{ position: 'relative' }}
              >
                <figure className="image-box">
                  <img
                    src={project.imgSrc}
                    alt={project.title}
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
