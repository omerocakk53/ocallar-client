import React from 'react'
import { ctaData, hmrData } from './cta-data'

const CTA = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="flex flex-wrap">
        {/* Sol Blok: İletişim (İkincil Renk / Altın Tonu) */}
        <div className="w-full lg:w-1/2 relative group overflow-hidden bg-[#d4af37] p-12 lg:p-24 flex flex-col justify-center min-h-[400px]">
          {/* Arka Plan Hayalet İkon */}
          <i
            className={`${ctaData.iconClass} absolute -right-10 -bottom-10 text-[250px] text-white opacity-10 transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-12 pointer-events-none`}
          ></i>

          <div className="relative z-10 space-y-8">
            <span className="text-white text-[11px] font-black uppercase tracking-[0.4em] block opacity-80">
              BİZE ULAŞIN
            </span>
            <h2 className="text-white text-3xl lg:text-5xl font-extrabold tracking-tighter leading-tight uppercase">
              {ctaData.title}
            </h2>
            <div className="pt-4">
              <a
                href={ctaData.buttonLink}
                className="inline-flex items-center gap-4 px-10 py-5 bg-primary text-white text-[11px] font-black uppercase tracking-[0.3em] transition-all duration-300 hover:bg-bg hover:text-primary shadow-xl"
              >
                {ctaData.buttonText}
                <i className="fas fa-arrow-right transition-transform group-hover:translate-x-2"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Sağ Blok: İnsan Kaynakları (Birincil Renk / Koyu Gri) */}
        <div className="w-full lg:w-1/2 relative group overflow-hidden bg-primary p-12 lg:p-24 flex flex-col justify-center min-h-[400px]">
          {/* Arka Plan Hayalet İkon */}
          <i
            className={`${hmrData.iconClass} absolute -right-10 -bottom-10 text-[250px] text-accent opacity-5 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-12 pointer-events-none`}
          ></i>

          <div className="relative z-10 space-y-8">
            <span className="text-accent text-[11px] font-black uppercase tracking-[0.4em] block">
              KARİYER FIRSATLARI
            </span>
            <h2 className="text-bg text-3xl lg:text-5xl font-extrabold tracking-tighter leading-tight uppercase">
              {hmrData.title}
            </h2>
            <div className="pt-4">
              <a
                href={hmrData.buttonLink}
                className="inline-flex items-center gap-4 px-10 py-5 bg-accent text-primary text-[11px] font-black uppercase tracking-[0.3em] transition-all duration-300 hover:bg-bg shadow-xl"
              >
                {hmrData.buttonText}
                <i className="fas fa-arrow-right transition-transform group-hover:translate-x-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
