import { useField } from 'formik'
import { Label } from '@/admin/components/ui/label'
import { useState, useEffect } from 'react'
import { FaX } from 'react-icons/fa6'
import Button from '@/components/Button' // Button component'inizi import edin

const FormikImageInput = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props)
  const { setValue, setTouched } = helpers
  const [preview, setPreview] = useState('')

  useEffect(() => {
    if (field.value instanceof File) {
      const objectUrl = URL.createObjectURL(field.value)
      setPreview(objectUrl)

      return () => URL.revokeObjectURL(objectUrl)
    } else if (typeof field.value === 'string' && field.value) {
      setPreview(field.value)
    } else {
      setPreview('')
    }
  }, [field.value])

  const hasError = meta.touched && meta.error

  const handleChange = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      if (file.type.startsWith('image/')) {
        setValue(file)
      } else {
        setValue(null)
      }
    }
  }

  const handleBlur = () => {
    setTouched(true)
  }

  const removeImage = () => {
    setValue(null)
  }

  return (
    <div className="grid gap-2">
      <Label htmlFor={props.id || props.name}>{label}</Label>

      <input
        id={props.id || props.name}
        name={props.name}
        type="file"
        accept="image/*"
        onChange={handleChange}
        onBlur={handleBlur}
        className="hidden"
        aria-invalid={hasError}
      />

      <div className="flex items-center gap-4">
        {preview ? (
          <div className="relative">
            <img
              src={preview}
              alt="Preview"
              className="h-20 w-20 object-cover rounded border"
            />
            <Button
              type="button"
              onClick={removeImage}
              variant="danger"
              size="sm"
              className="absolute -top-2 -right-2 rounded-full w-5 h-5 flex items-center justify-center text-xs p-0"
            >
              <FaX />
            </Button>
          </div>
        ) : (
          <div className="h-20 w-20 border border-dashed flex items-center justify-center rounded bg-muted/30">
            <span className="text-xs text-muted-foreground">Resim seç</span>
          </div>
        )}

        <Button
          type="button"
          onClick={() => document.getElementById(props.id || props.name)?.click()}
          variant="primary"
          size="sm"
        >
          {preview ? 'Değiştir' : 'Resim Seç'}
        </Button>
      </div>

      {hasError ? <p className="text-sm text-red-500">{meta.error}</p> : null}
    </div>
  )
}

export default FormikImageInput
