import React from 'react'
import SupportForm from './SupportForm'
import SupportInfo from './SupportInfo'
import './Support.css' // CSS'i import etmeyi unutma

const SupportSection = ({ header, supportSection }) => {
  const { titleBox, formFields, submitButton, info, kvkkText, kvkkLink } = supportSection

  return (
<<<<<<< HEAD
    <section className="relative bg-bg py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-8">
        <div className="relative z-10 bg-white shadow-2xl overflow-hidden">
          <div className="flex flex-wrap">
            {/* Form Kolonu */}
            <div className="w-full lg:w-7/12 p-8 lg:p-16">
              <div className="space-y-8">
                <div className="space-y-4">
                  <span className="text-accent text-[11px] font-black uppercase tracking-[0.4em] block border-l-4 border-accent pl-4">
                    {titleBox.subtitle}
                  </span>
                  <h2 className="text-primary text-4xl lg:text-5xl font-extrabold tracking-tighter uppercase leading-tight">
                    {titleBox.title}
                  </h2>
                  <p className="text-primary/60 text-sm font-medium leading-relaxed max-w-md italic">
                    {titleBox.text}
                  </p>
                </div>
                <SupportForm
                  fields={formFields}
                  submitButton={submitButton}
                />
              </div>
            </div>

            {/* Bilgi Kolonu */}
            <div className="w-full lg:w-5/12 bg-primary">
              <SupportInfo {...info} />
            </div>
=======
    <section className="support-section">
      <div className="auto-container">
        {/* Başlık Alanı (Eski WorldCyber yerine) */}
        <div className="sec-title">
          <h2>{header.title}</h2>
          <p>{header.text}</p>
        </div>

        <div className="support-container">
          {/* Sol Taraf: Form */}
          <div className="form-column">
            <h3 style={{ marginBottom: '20px', color: '#2b2b2b', fontWeight: '700' }}>
              Bize Yazın
            </h3>
            <SupportForm
              fields={formFields}
              submitButton={submitButton}
              kvkkText={kvkkText}
              kvkkLink={kvkkLink}
            />
          </div>

          {/* Sağ Taraf: Bilgi Kartı */}
          <div className="info-column">
            <SupportInfo {...info} />
>>>>>>> ac52c62c6028f29248758adc4a6c83eb85ff3d47
          </div>
        </div>
      </div>
    </section>
  )
}

export default SupportSection
