import React from 'react'

const SupportForm = ({ fields, submitButton, kvkkText, kvkkLink }) => {
  return (
    <form
      action="#"
      method="post"
      className="submit-form"
    >
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
      </div>
    </form>
  )
}

export default SupportForm
