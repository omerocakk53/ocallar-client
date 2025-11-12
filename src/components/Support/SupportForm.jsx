import React from 'react'

const SupportForm = ({ fields, submitButton }) => {
  return (
    <form
      action="#"
      method="post"
      className="submit-form"
    >
      {fields.map((field, index) =>
        field.type === 'textarea' ? (
          <div
            className="form-group"
            key={index}
          >
            <textarea
              name={field.name}
              placeholder={field.placeholder}
            ></textarea>
          </div>
        ) : (
          <div
            className="form-group"
            key={index}
          >
            <input
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              required={field.required || false}
            />
          </div>
        ),
      )}
      <div className="form-group message-btn">
        <button
          type="submit"
          className={submitButton.className}
        >
          {submitButton.text}
        </button>
      </div>
    </form>
  )
}

export default SupportForm
