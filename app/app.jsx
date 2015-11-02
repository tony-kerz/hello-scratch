import 'semantic-ui-css/semantic.css'
import './app.scss'
import React from 'react'
import ReactDom from 'react-dom'
import $ from 'jquery'
import TapEventPlugin from 'react-tap-event-plugin'
import Router from 'react-router'
import AppRoutes from './app-routes'

TapEventPlugin()

ReactDom.render(
  <Router history={Router.HashLocation}>{AppRoutes}</Router>,
  $('#content')[0]
)
