import { useField } from 'formik'
import { Input } from '@/admin/components/ui/input'
import { Label } from '@/admin/components/ui/label'
import { cn } from '../lib/utils'

const FormikInput = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  const hasError = meta.touched && meta.error

  return (
    <div className="grid gap-2">
      <Label htmlFor={props.id || props.name}>{label}</Label>
      <Input
        {...field}
        {...props}
        id={props.id || props.name}
        aria-invalid={hasError}
        className={cn(hasError ? 'border-red-500' : '')}
      />
      {hasError ? <p className="text-sm text-red-500">{meta.error}</p> : null}
    </div>
  )
}

export default FormikInput
