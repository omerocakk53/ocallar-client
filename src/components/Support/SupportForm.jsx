import React from 'react'

const SupportForm = ({ fields, submitButton, kvkkText, kvkkLink }) => {
  return (
    <form
      action="#"
      method="post"
      className="grid grid-cols-1 md:grid-cols-2 gap-8"
    >
<<<<<<< HEAD
      {fields.map((field, index) => (
        <div
          className={`form-group ${field.type === 'textarea' ? 'md:col-span-2' : ''}`}
          key={index}
        >
          {field.type === 'textarea' ? (
            <textarea
              name={field.name}
              placeholder={field.placeholder}
              className="w-full bg-transparent border-b-2 border-primary/10 py-4 text-sm font-bold text-primary placeholder:text-primary/30 outline-none transition-all focus:border-accent min-h-[120px] resize-none"
            ></textarea>
          ) : (
            <input
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              required={field.required || false}
              className="w-full bg-transparent border-b-2 border-primary/10 py-4 text-sm font-bold text-primary placeholder:text-primary/30 outline-none transition-all focus:border-accent"
            />
          )}
        </div>
      ))}
      <div className="md:col-span-2 pt-6">
        <button
          type="submit"
          className="group relative overflow-hidden bg-primary px-12 py-5 text-[11px] font-black uppercase tracking-[0.3em] text-white transition-all duration-300"
        >
          <span className="relative z-10 group-hover:text-primary transition-colors duration-300">
            {submitButton.text}
          </span>
          <div className="absolute inset-0 bg-accent translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
        </button>
=======
      <div className="form-grid">
        {fields.map((field, index) => (
          <div
            className={`form-group ${field.width === 'full' ? 'full-width' : ''}`}
            key={index}
          >
            {field.type === 'textarea' ? (
              <textarea
                name={field.name}
                placeholder={field.placeholder}
                required={field.required}
              ></textarea>
            ) : (
              <input
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                required={field.required}
              />
            )}
          </div>
        ))}

        {/* KVKK Onay Kutusu */}
        <div className="kvkk-group">
          <input
            type="checkbox"
            id="kvkk-check"
            required
          />
          <label htmlFor="kvkk-check">
            {kvkkText}{' '}
            {kvkkLink && (
              <a
                href={kvkkLink}
                target="_blank"
                rel="noreferrer"
              >
                Aydınlatma Metni
              </a>
            )}
          </label>
        </div>

        {/* Submit Butonu */}
        <div className="form-group full-width">
          <button
            type="submit"
            className="submit-btn"
          >
            {submitButton.text} <i className="fas fa-paper-plane ms-2"></i>
          </button>
        </div>
>>>>>>> ac52c62c6028f29248758adc4a6c83eb85ff3d47
      </div>
    </form>
  )
}

export default SupportForm
