import FormikInput from '@/components/FormikInput'
import FormikTextarea from '@/components/FormikTextArea'
import { ItemService } from '@/services'
import { Form, FormikProvider, useFormik } from 'formik'
import { useEffect } from 'react'
import toast from 'react-hot-toast'
import { Link, useParams } from 'react-router-dom'
import useSWR from 'swr'
import * as Yup from 'yup'

const validationSchema = Yup.object({
  title: Yup.string().required(),
  description: Yup.string().required(),
})

const ItemDetail = () => {
  const { id } = useParams()
  const { data, isLoading, error } = useSWR(`items/${id}`)

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
    },
    validationSchema,
    onSubmit(values, { setSubmitting }) {
      setSubmitting(true)
      toast
        .promise(ItemService.update(id, values), {
          loading: 'Loading...',
          error(err) {
            console.log(err)
            return 'Error!'
          },
          success(data) {
            console.log(data)

            return 'success'
          },
        })
        .finally(() => {
          setSubmitting(false)
        })
    },
  })

  useEffect(() => {
    if (data) {
      formik.setValues({
        title: data.title || '',
        description: data.description || '',
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error loading item data.</div>
  }

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
export default ItemDetail
