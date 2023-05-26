import { useState } from "react"

import FormInput from "../form-input/form-input.component"
import Button from'../button/button.componet'

import './sign-in.styles.scss'

const defaultFormFields = {
  email: '',
  password: ''
}

const SignIn = () => { 
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields

  const resetFormFields = () => { 
    setFormFields(defaultFormFields)
  }
  const handleSubmit = async event => { 
    event.preventDefault()

    try {

    } catch (error) {
      alert('There was an error Signing in', error)
    }
    resetFormFields()
  }

  const handleChange = event => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }

  return (
    <div className="sign-in-container">
      <h2>Sign In to Next-Gen Gaming</h2>
      <form onsubmint={handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />
        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />
        <Button type='submit' buttonType='secondary'>Sign In</Button>
      </form>
    </div>
  )
}

export default SignIn