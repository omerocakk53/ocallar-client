import React from 'react'
import AboutContent from './AboutContent'
import aboutData from './about-data'

const About = () => {
  const { whoWeAre, whatWeDo, whatWeSell } = aboutData

  return (
    <section className="relative overflow-hidden bg-bg py-24 lg:py-32">
      {/* Dekoratif Arka Plan Yazısı */}
      <div className="absolute -left-10 top-20 select-none opacity-[0.03] pointer-events-none">
        <h2 className="text-[15rem] font-black leading-none text-primary uppercase">
          Neler Yapıyoruz ?
        </h2>
      </div>

      <div className="container relative z-10 mx-auto px-8">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-12 lg:gap-24">
          {/* Sol Kolon: Biz Kimiz? (Görsel ve Metin) */}
          <div className="lg:col-span-5 space-y-10">
            <div className="relative group">
              <div className="absolute -bottom-6 -left-6 h-full w-full border-2 border-accent/20 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
              <figure className="relative overflow-hidden shadow-2xl bg-primary aspect-[4/5]">
                <img
                  src={whoWeAre.image}
                  alt="Öcallar Otomotiv Biz Kimiz"
                  className="h-full w-full object-cover opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent"></div>
                <div className="absolute bottom-10 left-10 right-10">
                  <h3 className="text-bg text-3xl font-extrabold tracking-tight mb-4 uppercase">
                    {whoWeAre.title}
                  </h3>
                  <p className="text-white text-sm leading-relaxed italic">{whoWeAre.text}</p>
                </div>
              </figure>
            </div>
          </div>

          {/* Sağ Kolon: Neler Yapıyoruz & Ne Satıyoruz? */}
          <div className="lg:col-span-7">
            <AboutContent
              subtitle={whatWeDo.subtitle}
              title={whatWeDo.title}
              text={whatWeDo.text}
              features={whatWeSell.features}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
