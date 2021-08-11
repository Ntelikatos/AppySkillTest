import React, { useState } from 'react'
import Auth from './Auth'
import { useHistory } from 'react-router-dom'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const history = useHistory()

  const handleOnChange = (e) => {
    if (e.target.name === 'name') {
      setName(e.target.value)
    }
    if (e.target.name === 'email') {
      setEmail(e.target.value)
    }
    if (e.target.name === 'password') {
      setPassword(e.target.value)
    }
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()

    Auth.register(name, email, password).then(() => {
      history.push('/dashboard')
    })
  }

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <label htmlFor='name'>Name: </label>
        <input type='text' name='name' value={name} onChange={handleOnChange} />
        <br />
        <label htmlFor='email'>Email: </label>
        <input
          type='email'
          name='email'
          value={email}
          onChange={handleOnChange}
        />
        <br />
        <label htmlFor='password'>Password: </label>
        <input
          type='password'
          name='password'
          value={password}
          onChange={handleOnChange}
        />
        <br />
        <button type='submit'>Register</button>
      </form>
    </div>
  )
}

export default Register
