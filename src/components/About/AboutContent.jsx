import React from 'react'
import AboutFeatureItem from './AboutFeatureItem'

const AboutContent = ({ subtitle, title, text, features }) => {
  return (
    <div className="flex flex-col space-y-12">
      {/* Neler Yapıyoruz Bölümü */}
      <div className="space-y-6">
        <div className="space-y-4">
          <span className="inline-block border-l-4 border-accent pl-4 text-xs font-black uppercase tracking-[0.4em] text-accent">
            {subtitle}
          </span>
          <h2 className="text-4xl font-extrabold leading-[1.1] tracking-tighter text-primary md:text-5xl lg:text-6xl uppercase">
            {title}
          </h2>
        </div>
        <div className="max-w-2xl">
          <p className="text-base leading-relaxed text-primary/70 font-medium">{text}</p>
        </div>
      </div>

      {/* Ne Satıyoruz? (Kategoriler) Bölümü */}
      <div className="space-y-8 pt-8 border-t border-primary/5">
        <h4 className="text-accent text-[11px] font-black uppercase tracking-[0.3em]">
          Ne Satıyoruz?
        </h4>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {features.map((feature, index) => (
            <AboutFeatureItem
              key={index}
              {...feature}
            />
          ))}
        </div>
      </div>

      {/* Keşfet Butonu */}
      <div className="pt-6">
        <a
          href="/kurumsal"
          className="group flex items-center gap-4 text-xs font-black uppercase tracking-widest text-primary hover:text-accent transition-colors"
        >
          <span className="h-[2px] w-12 bg-accent transition-all duration-300 group-hover:w-20"></span>
          KURUMSAL HİKAYEMİZİ OKUYUN
        </a>
      </div>
    </div>
  )
}

export default AboutContent
