import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Auth from './Auth'
import Dashboard from './Dashboard'
import Home from './Home'
import Login from './Login'
import Register from './Register'

const Router = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />
      <PrivateRoute exact path='/dashboard' component={Dashboard} />
    </Switch>
  )
}

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        Auth.getAuth() ? <Component {...props} /> : <Redirect to='/' />
      }
    />
  )
}

export default Router
