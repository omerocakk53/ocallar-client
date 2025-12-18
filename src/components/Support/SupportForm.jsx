import React from 'react'

const SupportForm = ({ fields, submitButton }) => {
  return (
    <form
      action="#"
      method="post"
      className="grid grid-cols-1 md:grid-cols-2 gap-8"
    >
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
      </div>
    </form>
  )
}

export default SupportForm
