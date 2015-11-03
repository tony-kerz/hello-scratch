import 'semantic-ui-css/semantic.css'
import './app.scss'
import React from 'react'
import ReactDom from 'react-dom'
import $ from 'jquery'
import TapEventPlugin from 'react-tap-event-plugin'
import Router from 'react-router'
import AppRoutes from './app-routes'
import Hello from 'hellojs/dist/hello'
import 'hellojs/src/modules/google'

TapEventPlugin()

ReactDom.render(
  <Router history={Router.HashLocation}>{AppRoutes}</Router>,
  $('#content')[0]
)

// Hello.on(
//   'auth.login',
//   (auth) => {
//     alert('hello.on (check console)')
//     console.log('auth=%o', auth)
//   }
// )

Hello.init(
  {
    google: '56256887053-9ss673d224gvale3s46ou2e027h9dh67.apps.googleusercontent.com'
  }
)
