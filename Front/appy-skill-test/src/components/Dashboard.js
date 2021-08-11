import React from 'react'
import { useHistory } from 'react-router-dom'
import Auth from './Auth'

const Dashboard = () => {
  const history = useHistory()

  const handleLogout = () => {
    Auth.logout()
    history.push('/login')
  }

  return (
    <div>
      <h1>Welcome my friend in your dashboard!!! 😁🥳</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Dashboard
