import { useState } from 'react'

//CUSTOM HOOK QUE SE ENCARGA DE MANEJAR LOS FORMULARIOS
export const useForm = (initialState = {}) => {
  const [value, setValue] = useState(initialState)
  const reset = () => {
    setValue(initialState)
  }
  const handleInputChange = ({ target }) => {
    setValue({
      ...value,
      [target.name]: target.value
    })
  }

  return [value, handleInputChange, reset]
}
