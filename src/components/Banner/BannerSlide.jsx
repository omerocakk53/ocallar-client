import React from 'react'
import SlideContent from './SlideContent'

const BannerSlide = ({ slide }) => {
  return (
    <div className="slide-item">
      <div
        className="image-layer"
        style={{ backgroundImage: `url(${slide.imageUrl})` }}
      />
      <div
        className="auto-container"
        style={{ position: 'relative', zIndex: 10 }}
      >
        <SlideContent slide={slide} />
      </div>
    </div>
  )
}

export default BannerSlide
