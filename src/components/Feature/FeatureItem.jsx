import React from 'react'

const FeatureItem = ({ item, index }) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
      <div
        className="feature-block-one wow fadeInUp"
        data-wow-delay={`${index * 300}ms`}
        data-wow-duration="1500ms"
      >
        <div className="inner-box">
          <figure className="image-box">
            <img
              src={item.image}
              alt={item.title}
            />
          </figure>
          <div className="lower-content">
            <div className="inner">
              <h3>{item.title}</h3>
              <a href={item.link}>
                <span>İncele</span>
                <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeatureItem
