import React from 'react'

const ServiceItem = ({ item, index }) => {
  return (
<<<<<<< HEAD
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
=======
    // col-lg-2 yaparak yan yana 6 tane logo sığmasını sağladık (Daha şık durur)
    <div className="col-lg- col-md-4 col-6 service-block">
      <div
        className="service-block-one wow fadeInUp"
        data-wow-delay={item.delay || `${index * 100}ms`}
        data-wow-duration="1500ms"
      >
        <div
          className="inner-box"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '15px',
            minHeight: '120px', // Logolar için sabit yükseklik
            background: '#fff',
            border: '1px solid #eee', // Opsiyonel: Hafif çerçeve
          }}
        >
          <figure
            className="image-box"
            style={{ margin: 0, width: '100%' }}
          >
            <img
              src={item.image}
              alt="Tedarikçi Logosu"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                filter: 'grayscale(100%)', // Opsiyonel: Siyah beyaz efekt (hoverda renkli yapabilirsin)
                transition: 'all 0.3s ease',
              }}
              // Hover efekti için inline stil örneği (CSS dosyasında yapmak daha sağlıklıdır):
              onMouseOver={(e) => (e.currentTarget.style.filter = 'grayscale(0%)')}
              onMouseOut={(e) => (e.currentTarget.style.filter = 'grayscale(100%)')}
            />
          </figure>
        </div>
      </div>
>>>>>>> ac52c62c6028f29248758adc4a6c83eb85ff3d47
    </div>
  )
}

export default ServiceItem
