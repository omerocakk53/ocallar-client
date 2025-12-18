import React from 'react'
import TestimonialSlider from './TestimonialSlider'
import { testimonialsData } from './testimonial-data'
import './Testimonial.css' // CSS dosyasını bağla

const Testimonial = () => {
  return (
<<<<<<< HEAD
    <section
      className="relative py-24 lg:py-32 bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: 'url(/uploads/images/background/testimonial-bg.jpg)',
      }}
    >
      {/* BMW Tarzı Koyu Overlay */}
      <div className="absolute inset-0 bg-primary/90 backdrop-blur-sm"></div>

      <div className="container relative z-10 mx-auto px-8">
        <div className="flex flex-wrap items-end mb-16 gap-8">
          <div className="w-full lg:w-1/2">
            <div className="border-l-4 border-accent pl-6 space-y-2">
              <h5 className="text-accent text-[11px] font-black uppercase tracking-[0.4em]">
                Öcallar Petrol
              </h5>
              <h2 className="text-bg text-4xl lg:text-6xl font-extrabold tracking-tighter uppercase">
                Müşteri <br /> <span className="text-accent/80">Deneyimleri</span>
              </h2>
            </div>
          </div>

          <div className="w-full lg:w-1/3">
            <p className="text-bg/60 text-sm font-medium leading-relaxed italic border-l border-bg/10 pl-6">
              "Müşterilerimizin memnuniyeti, 43 yıllık tecrübemizin en değerli karşılığıdır."
            </p>
          </div>
=======
    <div className="testimonial-section">
      <div className="auto-container testimonial-content-wrapper">
        <div className="sec-title centred mb-12">
          <h5>Öcallar Petrol</h5>
          <h2 className="mb-4">İş Ortaklarımız Ne Diyor?</h2>
          <p style={{ maxWidth: '700px', margin: '0 auto' }}>
            Yıllardır birlikte yürüdüğümüz değerli iş ortaklarımızın ve müşterilerimizin deneyimleri
            bizim en büyük referansımızdır.
          </p>
>>>>>>> ac52c62c6028f29248758adc4a6c83eb85ff3d47
        </div>
        <TestimonialSlider testimonials={testimonialsData} />
      </div>
    </div>
  )
}

export default Testimonial
