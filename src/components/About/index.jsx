import React, { useState } from 'react'
import AboutVideo from './AboutVideo'
import AboutContent from './AboutContent'
import aboutData from './about-data'
import './About.css' // CSS burada bağlı olmalı

const About = () => {
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
