import React from 'react'
import footerData from '../Footer/footer-data'

const SupportInfo = ({ image, logo, links }) => {
  const { info } = footerData
  return (
    <div className="info-inner">
      <figure className="image-box">
        <img
          style={{
            filter: 'grayscale(1)',
          }}
          src={image}
          alt="Info"
        />
      </figure>
      <div className="info-box">
        <figure className="info-logo">
          <img
            src={logo}
            alt="Logo"
          />
        </figure>
        <div className="icon-box">
          <i className="fas fa-phone"></i>
        </div>
        <h2>
          <a href={`tel:${info.phone}`}>{info.phone}</a>
        </h2>
        <div className="email">
          <a href={`mailto:${info.email}`}>{info.email}</a>
        </div>
        <ul className="list-item clearfix">
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.href}>{link.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SupportInfo
