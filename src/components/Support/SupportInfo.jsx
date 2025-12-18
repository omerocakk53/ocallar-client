import React from 'react'
<<<<<<< HEAD
import footerData from '../Footer/footer-data'
import { Mail, Map } from 'lucide-react'
=======
>>>>>>> ac52c62c6028f29248758adc4a6c83eb85ff3d47

const SupportInfo = ({ image, title, address, email, phone, mapsLink }) => {
  return (
<<<<<<< HEAD
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
=======
    <div className="info-card">
      <img
        src={image}
        alt={title}
        className="info-image"
      />

      <div className="info-content">
        <h3 style={{ fontSize: '22px', marginBottom: '25px', color: '#fff' }}>
          İletişim Bilgileri
        </h3>

        <div className="info-item">
          <i className="fas fa-map-marker-alt"></i>
          <div>
            <h4>Adres</h4>
            <p>{address}</p>
            <a
              href={mapsLink}
              target="_blank"
              rel="noreferrer"
              style={{ fontSize: '13px', textDecoration: 'underline' }}
            >
              Haritada Göster
            </a>
          </div>
        </div>

        <div className="info-item">
          <i className="fas fa-envelope"></i>
          <div>
            <h4>E-Posta</h4>
            <a href={`mailto:${email}`}>{email}</a>
          </div>
        </div>

        <div className="info-item">
          <i className="fas fa-phone"></i>
          <div>
            <h4>Telefon</h4>
            <a href={`tel:${phone}`}>{phone}</a>
          </div>
        </div>
>>>>>>> ac52c62c6028f29248758adc4a6c83eb85ff3d47
      </div>
    </div>
  )
}

export default SupportInfo
