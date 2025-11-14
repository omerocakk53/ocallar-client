// src/admin/components/news/NewsForm.jsx

import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Input } from '@/admin/components/ui/input'
import { Button } from '@/admin/components/ui/button'
import FormikImageInput from '@/admin/components/FormikImageInput'
import { Label } from '@/admin/components/ui/label'

const NewsSchema = Yup.object().shape({
  title: Yup.string().required('Başlık zorunludur'),
  content: Yup.string().required('İçerik zorunludur'),
  image: Yup.mixed().required('Resim zorunludur'),
})

const NewsForm = ({ initialValues, onSubmit, submitText }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={NewsSchema}
      onSubmit={onSubmit}
    >
      {({ values, handleChange, errors, touched }) => (
        <Form className="grid gap-4 p-4">
          <div className="grid gap-2">
            <Label>Başlık</Label>
            <Input
              name="title"
              value={values.title}
              onChange={handleChange}
            />
            {touched.title && errors.title && (
              <p className="text-red-500 text-sm">{errors.title}</p>
            )}
          </div>
          <div className="grid gap-2">
            <Label>İçerik</Label>
            <textarea
              name="content"
              value={values.content}
              onChange={handleChange}
              className="border rounded p-2"
              rows={5}
            />
            {touched.content && errors.content && (
              <p className="text-red-500 text-sm">{errors.content}</p>
            )}
          </div>

          <FormikImageInput
            name="image"
            label="Haber Görseli"
          />

          <Button
            type="submit"
            className="w-full"
          >
            {submitText}
          </Button>
        </Form>
      )}
    </Formik>
  )
}

export default NewsForm
