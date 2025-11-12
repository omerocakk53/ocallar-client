import { useState } from 'react'

const useHumanResourcesForm = () => {
  const [formValues, setFormValues] = useState({
    nameSurname: '',
    email: '',
    phone: '',
    description: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  return {
    formValues,
    handleChange,
    setFormValues,
  }
}

export default useHumanResourcesForm
