import React from 'react'
import SupportForm from './SupportForm'
import SupportInfo from './SupportInfo'

const SupportSection = ({ titleBox, formFields, submitButton, info }) => {
  return (
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
          </div>
        </div>
      </div>
    </section>
  )
}

export default SupportSection
