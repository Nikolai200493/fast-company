import React from 'react'
import { Route, Switch } from 'react-router-dom'
import NavBar from './components/ui/navBar'
import Users from './layouts/users'
import Login from './layouts/login'
import Main from './layouts/main'

const App = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/users/:userId?/:edit?" component={Users} />
        <Route path="/login:type?" component={Login} />
        <Route path="/main" component={Main} />
      </Switch>
    </div>
  )
}

export default App
