import React from 'react'

const SupportInfo = ({ image, title, address, email, phone, mapsLink }) => {
  return (
    <div className="info-card">
      <img
        src={image}
        alt={title}
        className="info-image"
      />

      <div className="info-content">
        <h3 style={{ fontSize: '22px', marginBottom: '25px', color: '#fff' }}>
          İletişim Bilgileri
        </h3>

        <div className="info-item">
          <i className="fas fa-map-marker-alt"></i>
          <div>
            <h4>Adres</h4>
            <p>{address}</p>
            <a
              href={mapsLink}
              target="_blank"
              rel="noreferrer"
              style={{ fontSize: '13px', textDecoration: 'underline' }}
            >
              Haritada Göster
            </a>
          </div>
        </div>

        <div className="info-item">
          <i className="fas fa-envelope"></i>
          <div>
            <h4>E-Posta</h4>
            <a href={`mailto:${email}`}>{email}</a>
          </div>
        </div>

        <div className="info-item">
          <i className="fas fa-phone"></i>
          <div>
            <h4>Telefon</h4>
            <a href={`tel:${phone}`}>{phone}</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SupportInfo
