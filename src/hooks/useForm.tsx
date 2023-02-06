import { ChangeEvent, useState } from 'react';

const useForm = <T extends Object> ( initState: T ) => {
  const [formulario, setFormulario] = useState(initState);

  const handleChange = ( { target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;

    setFormulario({
      ...formulario,
      [ name ]: value
    })
  }

  return {
    formulario,
    handleChange,
    ...formulario,
  }
}

export default useForm;