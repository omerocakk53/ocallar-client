<<<<<<< HEAD
import React from 'react'
=======
import React, { useState } from 'react'
import AboutVideo from './AboutVideo'
>>>>>>> ac52c62c6028f29248758adc4a6c83eb85ff3d47
import AboutContent from './AboutContent'
import aboutData from './about-data'
import './About.css' // CSS burada bağlı olmalı

const About = () => {
<<<<<<< HEAD
  const { whoWeAre, whatWeDo, whatWeSell } = aboutData

  return (
    <section className="relative overflow-hidden bg-bg py-24 lg:py-32">
      {/* Dekoratif Arka Plan Yazısı */}
      <div className="absolute -left-10 top-20 select-none opacity-[0.03] pointer-events-none">
        <h2 className="text-[15rem] font-black leading-none text-primary uppercase">
          Neler Yapıyoruz ?
        </h2>
      </div>

      <div className="container relative z-10 mx-auto px-8">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-12 lg:gap-24">
          {/* Sol Kolon: Biz Kimiz? (Görsel ve Metin) */}
          <div className="lg:col-span-5 space-y-10">
            <div className="relative group">
              <div className="absolute -bottom-6 -left-6 h-full w-full border-2 border-accent/20 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
              <figure className="relative overflow-hidden shadow-2xl bg-primary aspect-[4/5]">
                <img
                  src={whoWeAre.image}
                  alt="Öcallar Otomotiv Biz Kimiz"
                  className="h-full w-full object-cover opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent"></div>
                <div className="absolute bottom-10 left-10 right-10">
                  <h3 className="text-bg text-3xl font-extrabold tracking-tight mb-4 uppercase">
                    {whoWeAre.title}
                  </h3>
                  <p className="text-white text-sm leading-relaxed italic">{whoWeAre.text}</p>
                </div>
              </figure>
            </div>
          </div>

          {/* Sağ Kolon: Neler Yapıyoruz & Ne Satıyoruz? */}
          <div className="lg:col-span-7">
            <AboutContent
              subtitle={whatWeDo.subtitle}
              title={whatWeDo.title}
              text={whatWeDo.text}
              features={whatWeSell.features}
            />
=======
  const { video, content } = aboutData
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <section className="about-section">
        <div className="auto-container">
          {/* DİKKAT: items-center yerine items-stretch kullanıldı */}
          <div className="row clearfix items-stretch">
            {/* SOL: Video Sütunu (Artık sağ taraf kadar uzayacak) */}
            <div className="col-lg-6 col-md-12 col-sm-12 video-column mb-5 lg:mb-0">
              <AboutVideo
                image={video.image}
                onOpenModal={() => setModalOpen(true)}
              />
            </div>

            {/* SAĞ: İçerik Sütunu */}
            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
              <AboutContent {...content} />
            </div>
>>>>>>> ac52c62c6028f29248758adc4a6c83eb85ff3d47
          </div>
        </div>
      </section>

      {/* Modal Kodu (Aynen Kalıyor) */}
      {modalOpen && (
        <div
          className="video-modal-overlay"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="video-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-modal-btn"
              onClick={() => setModalOpen(false)}
            >
              <i className="fas fa-times"></i>
            </button>
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1`}
              title="Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  )
}

export default About
