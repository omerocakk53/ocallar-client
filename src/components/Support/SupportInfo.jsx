import React from 'react'

const SupportInfo = ({ image, logo, phone, email, links }) => {
  return (
    <div className="info-inner">
      <figure className="image-box">
        <img
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
          <a href={`tel:${phone.replace(/\s/g, '')}`}>{phone}</a>
        </h2>
        <div className="email">
          <a href={`mailto:${email}`}>{email}</a>
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
