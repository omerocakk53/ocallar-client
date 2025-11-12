import React from 'react'
import AboutFeatureItem from './AboutFeatureItem'

const AboutContent = ({ subtitle, title, text, features }) => {
  return (
    <div id="content_block_one">
      <div className="content-box">
        <div className="sec-title left">
          <h5>{subtitle}</h5>
          <h2>{title}</h2>
        </div>

        <div className="text">
          <p>{text}</p>
        </div>

        <div className="inner-box">
          {features.map((feature, index) => (
            <AboutFeatureItem
              key={index}
              {...feature}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default AboutContent
