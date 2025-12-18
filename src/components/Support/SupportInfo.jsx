import React from 'react'
import footerData from '../Footer/footer-data'
import { Mail, Map } from 'lucide-react'

const SupportInfo = ({ image, logo, links }) => {
  const { info } = footerData
  return (
    <div className="h-full flex flex-col">
      {/* Görsel Alanı - Grayscale BMW stili */}
      <figure className="relative h-64 lg:h-1/2 overflow-hidden">
        <img
          src={image}
          alt="Info"
          className="w-full h-full object-cover grayscale opacity-40 transition-all duration-700 hover:grayscale-0 hover:opacity-100 scale-110 hover:scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />
      </figure>

      {/* Bilgi Alanı */}
      <div className="p-10 lg:p-16 space-y-10 flex-grow flex flex-col justify-center">
        <div className="flex items-center gap-6">
          <div className="h-16 w-16 flex items-center justify-center bg-accent/10 border border-accent/20 rounded-full">
            <i className="fas fa-phone text-accent text-xl"></i>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent/60 block">
              Bize Ulaşın
            </span>
            <h2 className="text-bg text-2xl lg:text-3xl font-extrabold tracking-tight">
              <a
                href={`tel:${info.phone}`}
                className="hover:text-accent transition-colors"
              >
                {info.phone}
              </a>
            </h2>
          </div>
        </div>

        <div className="space-y-6">
          <div className="text-accent text-[11px] font-black uppercase tracking-[0.3em] border-b border-accent/20 pb-4">
            KURUMSAL BİLGİLER
          </div>
          <div className="space-y-4">
            <div className="flex gap-4 group">
              <Mail className="w-6 h-6 text-accent" />
              <a
                href={`mailto:${info.email}`}
                className="text-bg/80 text-sm font-medium hover:text-accent transition-colors italic"
              >
                {info.email}
              </a>
            </div>
            <div className="flex gap-4">
              <Map className="w-6 h-6 text-accent" />
              <span className="text-bg/80 text-sm font-medium leading-relaxed">{info.address}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SupportInfo
