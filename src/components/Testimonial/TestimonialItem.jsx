import React from 'react'

const TestimonialItem = ({ item }) => {
  return (
    <div className="testimonial-card">
      {/* Arka plan dekoratif tırnak işareti */}
      <i className="fas fa-quote-right quote-icon"></i>

      <p className="testimonial-text">"{item.text}"</p>

      <div className="author-box">
        <img
          src={item.image}
          alt={item.author}
          className="author-img"
          // Resim yoksa placeholder koymak için:
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/60'
          }}
        />
        <div className="author-info">
          <h5>{item.author}</h5>
          <span>{item.designation}</span>
        </div>
      </div>
    </div>
  )
}

export default TestimonialItem
