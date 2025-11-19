import React from 'react'
import ServiceItem from './ServiceItem'
import serviceData from './service-data'
import { Link } from 'react-router-dom'

const Service = () => {
  return (
    <section className="service-section">
      <div className="auto-container">
        <div className="title-box">
          <div className="row clearfix">
            <div className="col-lg-6 col-md-12 col-sm-12 title-column">
              <div className="sec-title right">
                <h5>Öcallar Petrol</h5>
                <h2>Tedarikçilerimiz</h2>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 text-column">
              <div className="text">
                <p>
                  Öcallar Petrol ailesinin bir parçası olan tüm çözüm ortaklarımızı
                  inceleyebilirsiniz.
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
            <div
              className="more-btn-box text-center"
              style={{ marginTop: '40px' }}
            >
              <Link
                to="/#"
                className="theme-btn style-two"
              >
                <i
                  className="fas fa-arrow-right"
                  style={{ marginRight: '10px' }}
                ></i>
                <span>Tüm Tedarikçilerimizi Gör</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Service
