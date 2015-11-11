import 'babel-core/polyfill'
import 'semantic-ui-css/semantic.css'
import './app.scss'
import React from 'react'
import ReactDom from 'react-dom'
//import TapEventPlugin from 'react-tap-event-plugin'
import configureStore from './configure-store'
import {Provider} from 'react-redux'
import {Router} from 'react-router'
import {syncReduxAndRouter} from 'redux-simple-router'
import {createHistory} from 'history'
import routes from './routes'

const history = createHistory()
const store = configureStore()

//TapEventPlugin()

syncReduxAndRouter(history, store)

ReactDom.render(
  <Provider store={store}>
    <Router routes={routes} history={history}/>
  </Provider>,
  document.getElementById('content')
)
