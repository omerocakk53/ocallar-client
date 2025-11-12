import React from 'react'

const ServiceItem = ({ item, index }) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 service-block">
      <div
        className="service-block-one wow fadeInUp"
        data-wow-delay={item.delay || `${index * 300}ms`}
        data-wow-duration="1500ms"
      >
        <div className="inner-box">
          <h4>
            <a href={item.link}>{item.title}</a>
          </h4>
          <div className="inner">
            <div className="icon-box">
              <i className={item.icon}></i>
            </div>
            <p>{item.description}</p>
            <a href={item.link}>
              <i className="fas fa-arrow-right"></i>
              <span>İncele</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceItem
