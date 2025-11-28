import React from 'react'
import infoData from './info-data'
import { Link } from 'react-router-dom' // Eğer react-router kullanıyorsan
import './Info.css' // CSS dosyasını import et

const Info = () => {
  const { imageBox, text } = infoData

  return (
    <section className="info-section">
      <div className="auto-container">
        {' '}
        {/* Senin container yapın */}
        <div className="info-row">
          {/* SOL TARAF: GÖRSEL */}
          <div className="info-image-col">
            <div className="info-image-wrapper">
              <img
                src={imageBox.image}
                alt={imageBox.alt}
              />
            </div>
          </div>

          {/* SAĞ TARAF: METİN */}
          <div className="info-text-col">
            <span className="info-subtitle">{text.subTitle}</span>

            <h2 className="info-title">{text.title}</h2>

            <div className="info-desc">
              {/* Satır başlarını koruyarak yazdırmak için */}
              {text.content.split('\n').map((line, i) => (
                <p
                  key={i}
                  style={{ marginBottom: line.trim() ? '15px' : '0' }}
                >
                  {line}
                </p>
              ))}
            </div>

            <Link
              to={text.link}
              className="info-btn"
            >
              <span>{text.linkText}</span>
              <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info
