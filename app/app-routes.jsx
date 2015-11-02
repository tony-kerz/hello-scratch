import React from 'react'
import {Route, IndexRoute} from 'react-router'
import Main from './main'
import Home from './home'
import Stuff from './stuff'
import SignIn from './sign-in'

let AppRoutes = (
  <Route path='/' component={Main}>
    <IndexRoute component={Home}/>
    <Route path='home' component={Home} />
    <Route path='stuff' component={Stuff} />
    <Route path='sign-in' component={SignIn} />
  </Route>
)

export default AppRoutes
