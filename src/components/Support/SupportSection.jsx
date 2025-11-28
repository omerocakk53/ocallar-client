import React from 'react'
import SupportForm from './SupportForm'
import SupportInfo from './SupportInfo'
import './Support.css' // CSS'i import etmeyi unutma

const SupportSection = ({ header, supportSection }) => {
  const { titleBox, formFields, submitButton, info, kvkkText, kvkkLink } = supportSection

  return (
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
          </div>
        </div>
      </div>
    </section>
  )
}

export default SupportSection
