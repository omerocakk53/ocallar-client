import React from 'react'
import TestimonialSlider from './TestimonialSlider'
import { testimonialsData } from './testimonial-data'

const Testimonial = () => {
  return (
    <section
      className="testimonial-section"
      style={{
        backgroundImage: 'url(/uploads/images/background/testimonial-bg.jpg)',
      }}
    >
      <div className="auto-container">
        <div className="title-box">
          <div className="row clearfix">
            <div className="col-lg-6 col-md-12 col-sm-12 title-column">
              <div className="sec-title right">
                <h5>Öcallar Petrol</h5>
                <h2>
                  Müşteri <br /> Yorumları
                </h2>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 col-sm-12 text-column">
              <div className="text">
                <p>Müşteri yorumlarımızı aşağıdaki bölümden inceleyebilirsiniz</p>
              </div>
            </div>
          </div>
        </div>

        <TestimonialSlider testimonials={testimonialsData} />
      </div>
    </section>
  )
}

export default Testimonial
