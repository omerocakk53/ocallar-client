import FormikInput from '@/components/FormikInput'
import FormikTextarea from '@/components/FormikTextArea'
import { ItemService } from '@/services'
import { Form, FormikProvider, useFormik } from 'formik'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'

const validationSchema = Yup.object({
  title: Yup.string().required(),
  description: Yup.string().required(),
})

const ItemCreate = () => {
  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
    },
    validationSchema,
    onSubmit(values, { setSubmitting, resetForm }) {
      setSubmitting(true)
      toast
        .promise(ItemService.create(values), {
          loading: 'Loading...',
          error(err) {
            console.log(err)
            return 'Error!'
          },
          success(data) {
            console.log(data)
            resetForm()

            return 'success'
          },
        })
        .finally(() => {
          setSubmitting(false)
        })
    },
  })

  return (
    <div>
      <Link to="/dashboard/items">Item List</Link>
      <FormikProvider value={formik}>
        <Form>
          <FormikInput
            label="Title"
            name="title"
            type="text"
          />
          <FormikTextarea
            label="Description"
            name="description"
            type="text"
          />
          <button
            type="submit"
            disabled={formik.isSubmitting}
          >
            submit
          </button>
        </Form>
      </FormikProvider>
    </div>
  )
}
export default ItemCreate
