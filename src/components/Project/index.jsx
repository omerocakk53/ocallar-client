import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import projectData from './project-data'

const Project = () => {
  return (
    <section className="bg-bg py-24 overflow-hidden">
      {' '}
      {/* root bg rengi */}
      <div className="container mx-auto px-8">
        <div className="mb-16">
          <div className="flex flex-wrap items-end -mx-4">
            {/* Başlık Alanı */}
            <div className="w-full lg:w-1/2 px-4 mb-6 lg:mb-0">
              <div className="border-l-4 border-accent pl-6 uppercase">
                {' '}
                {/* root accent rengi */}
                <h5 className="text-accent text-[11px] font-black tracking-[0.3em] mb-2">
                  Öcallar Petrol
                </h5>
                <h2 className="text-primary text-4xl lg:text-5xl font-extrabold tracking-tighter">
                  Markalarımız
                </h2>
              </div>
            </div>
            {/* Metin Alanı */}
            <div className="w-full lg:w-1/2 px-4 lg:text-right">
              <div className="text">
                <p className="text-primary/70 text-sm font-medium leading-relaxed max-w-lg lg:ml-auto">
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
        spaceBetween={30}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
          1400: { slidesPerView: 5 },
        }}
        className="px-4 lg:px-8"
      >
        {projectData.map((project) => (
          <SwiperSlide key={project.id}>
            <div className="group transition-all duration-500">
              <div className="relative bg-white border border-primary/5 transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                {/* Logo Alanı */}
                <figure className="h-[230px] flex items-center justify-center p-8 overflow-hidden">
                  <img
                    src={project.imgSrc}
                    alt={project.title}
                    className="max-w-full max-h-full object-contain filter grayscale opacity-60 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110"
                  />
                </figure>

                {/* Alt İçerik Alanı */}
                <div className="p-8 border-t border-primary/5 text-center relative z-10 bg-white">
                  <p className="text-accent text-[10px] font-black uppercase tracking-[0.2em] mb-2 opacity-60 group-hover:opacity-100 transition-opacity">
                    {project.subtitle}
                  </p>
                  <h2 className="text-primary text-lg font-bold tracking-tight uppercase">
                    <a
                      href={project.link}
                      className="hover:text-accent transition-colors"
                    >
                      {project.title}
                    </a>
                  </h2>
                </div>

                {/* BMW Tarzı Altın Çizgi Efekti */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-accent transition-all duration-500 group-hover:w-full" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Project
