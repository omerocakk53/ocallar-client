import React from 'react'
import FeatureItem from './FeatureItem'
import featureData from './feature-data'

const Feature = () => {
  return (
    <section className="feature-section">
      <div className="auto-container">
        <div className="row clearfix">
          {featureData.map((item, index) => (
            <FeatureItem
              key={index}
              item={item}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Feature
