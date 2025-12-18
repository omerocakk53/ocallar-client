import React from 'react'
import { useSocial } from '@/admin/hooks/web-management/useSocial'
import footerData from './footer-data'
import { Map } from 'lucide-react'
import { Phone } from 'lucide-react'
import { Mail } from 'lucide-react'
import renderIcon from '@/utils/renderIcon'

const Footer = () => {
  const { logo, description, info, linkSections, copyright } = footerData
  const { social } = useSocial()

  return (
    <footer className="bg-primary text-bg pt-24 pb-12">
      <div className="container mx-auto px-8">
        {/* Üst Kısım: Widget Alanları */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
          {/* Bölüm 1: Logo ve Hakkımızda */}
          <div className="space-y-8">
            <figure className="max-w-[180px]">
              <a href="/">
                <img
                  src={logo}
                  alt="footer logo"
                  className="brightness-200 contrast-125"
                />
              </a>
            </figure>
            <p className="text-text-light text-sm leading-relaxed tracking-wide font-medium">
              {description}
            </p>
            {/* Sosyal Medya - Antik Altın Detaylı */}
            <ul className="flex gap-5">
              {social.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.socialLink}
                    className="flex h-10 w-10 items-center justify-center border border-bg/10 text-bg hover:border-accent hover:text-accent transition-all duration-300"
                  >
                    {renderIcon(item.socialIcon)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Bölüm 2 & 3: Dinamik Linkler */}
          {linkSections.map((section, index) => (
            <div
              key={index}
              className="space-y-8"
            >
              <h4 className="text-accent text-[11px] font-black uppercase tracking-[0.3em]">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={item.link}
                      className="text-sm text-text-light hover:text-bg transition-colors duration-300 font-bold"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Bölüm 4: İletişim Bilgileri */}
          <div className="space-y-8">
            <h4 className="text-accent text-[11px] font-black uppercase tracking-[0.3em]">
              Bize Ulaşın
            </h4>
            <ul className="space-y-5">
              <li className="flex gap-4 group">
                <Map className="w-6 h-6" />
                <span className="text-sm text-text-light leading-relaxed">{info.address}</span>
              </li>
              <li className="flex gap-4 group">
                <Phone className="w-6 h-6" />
                <a
                  href={`tel:${info.phone}`}
                  className="text-sm text-bg font-bold"
                >
                  {info.phone}
                </a>
              </li>
              <li className="flex gap-4 group">
                <Mail className="w-6 h-6" />
                <a
                  href={`mailto:${info.email}`}
                  className="text-sm text-bg font-bold italic"
                >
                  {info.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Alt Kısım: Copyright ve İnce Çizgi */}
        <div className="border-t border-bg/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-text-light">
            &copy; {copyright.year} {copyright.company} — TÜM HAKLARI SAKLIDIR.
          </p>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-text-light">
            <a
              href="#"
              className="hover:text-accent transition-colors"
            >
              KVKK
            </a>
            <a
              href="#"
              className="hover:text-accent transition-colors"
            >
              ÇEREZ POLİTİKASI
            </a>
            <a
              href="#"
              className="hover:text-accent transition-colors"
            >
              YASAL UYARI
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
