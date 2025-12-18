import React from 'react'

const ServiceItem = ({ item, index }) => {
  return (
    <div className="group flex items-center justify-center bg-white border border-primary/5 h-32 p-6 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
      <figure className="relative w-full h-full flex items-center justify-center">
        <img
          src={item.image}
          alt="Tedarikçi Logosu"
          className="max-w-full max-h-full object-contain filter grayscale opacity-40 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110"
        />
      </figure>

      {/* Altın Çizgi Detayı */}
      <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent transition-all duration-500 group-hover:w-full" />
    </div>
  )
}

export default ServiceItem
