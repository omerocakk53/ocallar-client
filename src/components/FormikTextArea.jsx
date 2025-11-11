import { useField } from 'formik'

const FormikTextarea = ({ label, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <div>
      <label htmlFor={props.name}>{label}</label>
      <textarea
        {...field}
        {...props}
      ></textarea>
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </div>
  )
}

export default FormikTextarea
