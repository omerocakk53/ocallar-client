import { useField } from 'formik'

const FormikInput = ({ label, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <div>
      <label htmlFor={props.name}>{label}</label>
      <input
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </div>
  )
}

export default FormikInput
