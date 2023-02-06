import useForm from '../hooks/useForm';

interface FormData {
  email: string;
  name: string;
  age: number;
}

const Form = () => {
  const { email, name, age, formulario, handleChange } = useForm<FormData>({
    email: 'edgar@test.com',
    name: 'Edgar Mtz',
    age: 28
  });

  return(
    <>
      <h2>Customs Hooks</h2>
      <form autoComplete="off">
        <div className="mb-3">
          <label className="form-label"> Email: </label>
          <input type='email' className='form-control' name='email' value={email} onChange={handleChange} />
          <input type='text' className='form-control' name='nombre' value={name}  onChange={handleChange} />
          <input type='number' className='form-control' name='age' value={age}  onChange={handleChange} />

          <pre>{ JSON.stringify(formulario) }</pre>
        </div>
      </form>
    </>
  )
}

export default Form;