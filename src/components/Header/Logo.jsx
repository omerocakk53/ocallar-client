import React from 'react'

const Logo = ({ src, href, alt = '' }) => (
  <div className="logo-box pull-left">
    <figure className="logo">
      <a href={href}>
        <img
          src={src}
          alt={alt}
        />
      </a>
    </figure>
  </div>
)

export default Logo
