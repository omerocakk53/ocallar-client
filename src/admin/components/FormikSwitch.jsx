import { useField } from 'formik'
import { Switch } from '@/admin/components/ui/switch'
import { Label } from '@/admin/components/ui/label'

const FormikSwitch = ({ label, ...props }) => {
  const [field, _, helpers] = useField(props)
  const { setValue } = helpers

  return (
    <div className="flex items-center space-x-2">
      <Switch
        id={props.id || props.name}
        checked={field.value}
        onCheckedChange={setValue}
      />
      <Label htmlFor={props.id || props.name}>{label}</Label>
    </div>
  )
}

export default FormikSwitch
