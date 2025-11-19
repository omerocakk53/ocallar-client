import React from 'react'

const ServiceItem = ({ item, index }) => {
  return (
    // col-lg-2 yaparak yan yana 6 tane logo sığmasını sağladık (Daha şık durur)
    <div className="col-lg-2 col-md-4 col-6 service-block">
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
    </div>
  )
}

export default ServiceItem
