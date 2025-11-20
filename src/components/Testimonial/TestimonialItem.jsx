import React from 'react'

const TestimonialItem = ({ testimonial, isOpen }) => {
  return (
    <div className="client-thumbs-carousel owl-carousel owl-theme owl-nav-none owl-dots-none owl-loaded owl-drag">
      <div className={`owl-item ${isOpen ? 'active' : ''}`}>
        <div className="thumb-item">
          <figure className="thumb-box">
            <img
              src={testimonial.image}
              alt={testimonial.author}
            />
          </figure>
          <div className="info-box">
            <h5>{testimonial.author}</h5>
            <span className="designation">{testimonial.designation}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialItem
