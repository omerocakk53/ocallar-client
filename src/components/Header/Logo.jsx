import React from 'react'

const Logo = ({ src, href = '/', alt = 'Öcallar Otomotiv' }) => (
  <div className="flex-shrink-0">
    <a
      href={href}
      className="block transition-transform duration-300 hover:scale-105"
    >
      <img
        src={src}
        alt={alt}
        className="h-10 w-auto md:h-12 lg:h-14 object-contain"
      />
    </a>
  </div>
)

export default Logo
