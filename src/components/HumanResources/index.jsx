import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import useHumanResourcesForm from './useHumanResourcesForm'
import './index.css'

const HumanResources = () => {
  const { formValues, setFormValues } = useHumanResourcesForm()
  const validationSchema = Yup.object({
    nameSurname: Yup.string()
      .required('Adınızı ve Soyadınızı giriniz')
      .min(2, 'En az 2 karakter olmalı'),
    email: Yup.string().email('Geçerli bir email giriniz').required('Email gerekli'),
    phone: Yup.string()
      .required('Telefon gerekli')
      .matches(/^[0-9+]+$/, 'Sadece rakam ve + karakteri kullanılabilir'),
    description: Yup.string().required('Açıklama gerekli'),
  })
  return (
    <div className="human-resources-form-container">
      <h1 className="form-title">İnsan Kaynakları</h1>
      <Formik
        initialValues={formValues}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          setFormValues(values)
          alert('Form gönderildi!\n' + JSON.stringify(values, null, 2))
          resetForm()
        }}
      >
        {({ values, handleChange, handleBlur, errors, touched }) => (
          <Form className="human-resources-form">
            <div className="form-group">
              <label
                htmlFor="nameSurname"
                className="required"
              >
                Adınız ve Soyadınız
              </label>
              <div className="input-with-error">
                <Field
                  name="nameSurname"
                  id="nameSurname"
                  type="text"
                  placeholder="Adınız ve Soyadınız"
                  value={values.nameSurname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.nameSurname && touched.nameSurname ? 'input-error' : ''}
                />
                <ErrorMessage
                  name="nameSurname"
                  component="div"
                  className="error-message"
                />
              </div>
            </div>
            <div className="form-group">
              <label
                htmlFor="email"
                className="required"
              >
                E-Posta Adresiniz
              </label>
              <div className="input-with-error">
                <Field
                  name="email"
                  id="email"
                  type="email"
                  placeholder="E-Posta Adresiniz"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.email && touched.email ? 'input-error' : ''}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="error-message"
                />
              </div>
            </div>
            <div className="form-group">
              <label
                htmlFor="phone"
                className="required"
              >
                Telefon
              </label>
              <div className="input-with-error">
                <Field
                  name="phone"
                  id="phone"
                  type="text"
                  placeholder="Telefon"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.phone && touched.phone ? 'input-error' : ''}
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="error-message"
                />
              </div>
            </div>
            <div className="form-group">
              <label
                htmlFor="description"
                className="required"
              >
                Açıklamanız
              </label>
              <div className="input-with-error">
                <Field
                  name="description"
                  id="description"
                  as="textarea"
                  placeholder="Açıklamanız"
                  value={values.description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  rows="6"
                  className={errors.description && touched.description ? 'input-error' : ''}
                />
                <ErrorMessage
                  name="description"
                  component="div"
                  className="error-message"
                />
              </div>
            </div>
            <div className="form-actions">
              <button
                type="submit"
                className="submit-button"
              >
                Gönder
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default HumanResources
