import React from 'react'

const BannerSlide = ({ slide }) => {
  return (
    <div className="relative flex h-full items-center overflow-hidden">
      {/* Arka Plan Görseli - Zoom Efekti İçin Parallax Kullanıyoruz */}
      <div
        className="absolute inset-0 z-0"
        data-swiper-parallax="20%"
      >
        <div
          className="h-full w-full bg-cover bg-center bg-no-repeat transition-transform duration-[10000ms] ease-linear scale-110 group-[.swiper-slide-active]:scale-100"
          style={{ backgroundImage: `url(${slide.imageUrl})` }}
        />
        {/* Karartma Overlay - BMW Tarzı Gradyan */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2b2b2b] via-[#2b2b2b]/60 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-8 lg:px-16">
        <div className="max-w-2xl">
          {/* Alt Başlık - Antik Altın Renk */}
          <div
            data-swiper-parallax="-300"
            className="mb-4 inline-block border-l-2 border-[#d4af37] pl-4 text-xs font-black uppercase tracking-[0.4em] text-[#d4af37]"
          >
            {slide.subtitle}
          </div>

          {/* Ana Başlık - Modern ve Büyük Tipografi */}
          <h1
            data-swiper-parallax="-500"
            className="mb-8 text-5xl font-extrabold leading-[1.1] tracking-tight text-[#f4f4f2] md:text-7xl lg:text-8xl"
            dangerouslySetInnerHTML={{ __html: slide.title }}
          />

          {/* Buton Alanı */}
          <div
            data-swiper-parallax="-700"
            className="flex flex-wrap gap-5"
          >
            {slide.buttons.map((btn, i) => (
              <a
                key={i}
                href={btn.href}
                className="group relative overflow-hidden bg-[#d4af37] px-10 py-5 text-[11px] font-black uppercase tracking-[0.2em] text-[#2b2b2b] transition-all duration-300 hover:bg-[#f4f4f2]"
              >
                <span className="relative z-10">{btn.text}</span>
                <div className="absolute inset-0 -translate-x-full bg-[#f4f4f2] transition-transform duration-300 group-hover:translate-x-0" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BannerSlide
