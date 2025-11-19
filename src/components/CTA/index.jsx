import React from 'react'
import { ctaData, hmrData } from './cta-data'

const CTA = () => {
  return (
    <section
      className="cta-section"
      style={{ padding: '0 0 0 0' }}
    >
      <div
        className="cta-wrapper"
        style={{
          overflow: 'hidden',
          boxShadow: '0 15px 30px rgba(0,0,0,0.1)',
        }}
      >
        <div
          className="row clearfix g-0"
          style={{ margin: 0 }}
        >
          {' '}
          <div
            className="col-lg-6 col-md-12 col-sm-12"
            style={{ padding: 0 }}
          >
            <div
              className="inner-box"
              style={{
                background: 'var(--color-accent)',
                padding: '60px 50px',
                position: 'relative',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                zIndex: 1,
              }}
            >
              <i
                className={ctaData.iconClass}
                style={{
                  position: 'absolute',
                  right: '20px',
                  bottom: '-20px',
                  fontSize: '150px',
                  color: '#fff',
                  opacity: '0.05',
                  zIndex: -1,
                }}
              ></i>

              <div
                className="content-box"
                style={{ position: 'relative', zIndex: 2 }}
              >
                <h2
                  style={{
                    fontSize: '28px',
                    color: '#fff',
                    marginBottom: '25px',
                    fontWeight: '700',
                    lineHeight: '1.4',
                  }}
                >
                  {ctaData.title}
                </h2>
                <div className="btn-box">
                  <a
                    href={ctaData.buttonLink}
                    className="banner-btn-two"
                  >
                    {ctaData.buttonText} <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-6 col-md-12 col-sm-12"
            style={{ padding: 0 }}
          >
            <div
              className="inner-box"
              style={{
                background: '#D4AF37',
                padding: '60px 50px',
                position: 'relative',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                zIndex: 1,
              }}
            >
              <i
                className={hmrData.iconClass}
                style={{
                  position: 'absolute',
                  right: '20px',
                  bottom: '-20px',
                  fontSize: '150px',
                  color: '#fff',
                  opacity: '0.15',
                  zIndex: -1,
                }}
              ></i>

              <div
                className="content-box"
                style={{ position: 'relative', zIndex: 2 }}
              >
                <h2
                  style={{
                    fontSize: '28px',
                    color: '#fff',
                    marginBottom: '25px',
                    fontWeight: '700',
                    lineHeight: '1.4',
                  }}
                >
                  {hmrData.title}
                </h2>
                <div className="btn-box">
                  <a
                    href={hmrData.buttonLink}
                    className="banner-btn-two"
                  >
                    {hmrData.buttonText} <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
