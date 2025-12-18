import React from 'react'

const AboutVideo = ({ image }) => {
  return (
    <div className="relative group">
      {/* Dekoratif Arka Çerçeve (Antik Altın) */}
      <div className="absolute -bottom-6 -left-6 h-full w-full border-2 border-accent/20 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>

      <figure className="relative overflow-hidden shadow-2xl">
        <img
          src={image}
          alt="About section"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Modern Play Butonu */}
        <div className="absolute inset-0 flex items-center justify-center">
          <a className="group/btn relative flex h-20 w-20 items-center justify-center rounded-full bg-primary/80 backdrop-blur-sm transition-all duration-300 hover:bg-accent">
            <i className="fas fa-play text-accent transition-colors group-hover/btn:text-primary"></i>
            {/* Dalga Efekti */}
            <span className="absolute inset-0 animate-ping rounded-full bg-accent/30"></span>
          </a>
        </div>
      </figure>

      {/* Küçük Detay Yazısı */}
      <div className="absolute -right-8 bottom-12 hidden rotate-90 lg:block">
        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary/30">
          SINCE 1982
        </span>
      </div>
    </div>
  )
}

export default AboutVideo
