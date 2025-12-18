import React from 'react'

const ContactInfo = ({ info }) => (
  <div className="mt-auto px-8 py-10 bg-[#2b2b2b] text-[#f4f4f2]">
    <h5 className="mb-6 text-[10px] font-black uppercase tracking-[0.3em] text-[#d4af37]">
      İletişim Bilgileri
    </h5>
    <ul className="space-y-5 text-[11px] font-medium tracking-wide">
      <li className="flex gap-4">
        <i className="fas fa-map-marker-alt text-[#d4af37] pt-1"></i>
        <span className="leading-relaxed opacity-80">{info.address}</span>
      </li>
      <li className="flex gap-4 italic hover:text-[#d4af37] transition-colors">
        <i className="fas fa-envelope text-[#d4af37] pt-1"></i>
        <a href={`mailto:${info.email}`}>{info.email}</a>
      </li>
      <li className="flex gap-4 font-bold hover:text-[#d4af37] transition-colors">
        <i className="fas fa-phone text-[#d4af37] pt-1"></i>
        <a href={`tel:${info.phone}`}>{info.phone}</a>
      </li>
    </ul>
  </div>
)

export default ContactInfo
