import React from 'react'
import ServiceItem from './ServiceItem'
import serviceData from './service-data'

const Service = () => {
  return (
    <section className="service-section">
      <div className="auto-container">
        <div className="title-box">
          <div className="row clearfix">
            <div className="col-lg-6 col-md-12 col-sm-12 title-column">
              <div className="sec-title right">
                <h5>Öcallar Petrol</h5>
                <h2>Alanlarımız</h2>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 text-column">
              <div className="text">
                <p>
                  Alanlar ile ilgili açıklama Alanlar ile ilgili açıklama Alanlar ile ilgili
                  açıklama Alanlar ile ilgili açıklama
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="inner-content">
          <div className="row clearfix">
            {serviceData.map((item, index) => (
              <ServiceItem
                key={index}
                item={item}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Service
