import React from 'react'
import TestimonialSlider from './TestimonialSlider'
import { testimonialsData } from './testimonial-data'
import './Testimonial.css' // CSS dosyasını bağla

const Testimonial = () => {
  return (
    <div className="testimonial-section">
      <div className="auto-container testimonial-content-wrapper">
        <div className="sec-title centred mb-12">
          <h5>Öcallar Petrol</h5>
          <h2 className="mb-4">İş Ortaklarımız Ne Diyor?</h2>
          <p style={{ maxWidth: '700px', margin: '0 auto' }}>
            Yıllardır birlikte yürüdüğümüz değerli iş ortaklarımızın ve müşterilerimizin deneyimleri
            bizim en büyük referansımızdır.
          </p>
        </div>
        <TestimonialSlider testimonials={testimonialsData} />
      </div>
    </div>
  )
}

export default Testimonial
