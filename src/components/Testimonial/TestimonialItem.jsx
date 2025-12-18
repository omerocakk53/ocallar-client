import React from 'react'

const TestimonialItem = ({ testimonial, isOpen }) => {
  return (
    <div
      className={`transition-all duration-500 transform ${isOpen ? 'scale-110' : 'scale-90 opacity-40 grayscale'}`}
    >
      <div
        className={`flex items-center gap-6 p-6 transition-all duration-500 border-b-2 ${isOpen ? 'border-accent bg-bg/5' : 'border-transparent'}`}
      >
        {/* Profil Fotoğrafı */}
        <figure
          className={`relative h-16 w-16 overflow-hidden rounded-full border-2 transition-all duration-500 ${isOpen ? 'border-accent' : 'border-bg/20'}`}
        >
          <img
            src={testimonial.image}
            alt={testimonial.author}
            className="h-full w-full object-cover"
          />
        </figure>

        {/* İsim ve Ünvan */}
        <div className="flex flex-col">
          <h5
            className={`text-sm font-black uppercase tracking-widest transition-colors ${isOpen ? 'text-accent' : 'text-bg'}`}
          >
            {testimonial.author}
          </h5>
          <span className="text-[10px] font-bold text-bg/40 uppercase tracking-[0.2em] mt-1">
            {testimonial.designation}
          </span>
        </div>

        {/* Aktiflik İkonu */}
        {isOpen && (
          <div className="ml-auto">
            <i className="fas fa-check-circle text-accent text-xs"></i>
          </div>
        )}
      </div>
    </div>
  )
}

export default TestimonialItem
