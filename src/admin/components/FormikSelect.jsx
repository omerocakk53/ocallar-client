import { useField } from 'formik'
import { Label } from '@/admin/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/admin/components/ui/select'
import { cn } from '../lib/utils'

const FormikSelect = ({ label, options, ...props }) => {
  const [field, meta, helpers] = useField(props)
  const hasError = meta.touched && meta.error

  return (
    <div className="grid gap-2">
      <Label htmlFor={props.id || props.name}>{label}</Label>
      <Select
        onValueChange={(value) => helpers.setValue(value)}
        value={field.value}
        {...props}
      >
        <SelectTrigger
          id={props.id || props.name}
          aria-invalid={hasError}
          className={[cn(hasError ? 'border-red-500' : '', props.className)]}
        >
          <SelectValue placeholder={label} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem
              key={option.value}
              value={option.value}
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {hasError ? <p className="text-sm text-red-500">{meta.error}</p> : null}
    </div>
  )
}

export default FormikSelect
