import React, { useState } from 'react'
import Auth from './Auth'
import { useHistory } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const history = useHistory()

  const handleOnChange = (e) => {
    if (e.target.name === 'email') {
      setEmail(e.target.value)
    }
    if (e.target.name === 'password') {
      setPassword(e.target.value)
    }
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()

    Auth.login(email, password).then(() => {
      history.push('/dashboard')
    })
  }

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
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
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login
