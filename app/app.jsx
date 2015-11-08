import 'semantic-ui-css/semantic.css'
import './app.scss'
import React from 'react'
import ReactDom from 'react-dom'
import TapEventPlugin from 'react-tap-event-plugin'
import configureStore from './configure-store'
import { Provider } from 'react-redux'
import { ReduxRouter } from 'redux-router'

const store = configureStore()

var setNameActionCreator = function (name) {
    return {
        type: 'SET_NAME',
        name: name
    }
}

store.dispatch(setNameActionCreator('bob'))

TapEventPlugin()

ReactDom.render(
  <Provider store={store}>
    <ReduxRouter/>
  </Provider>,
  document.getElementById('content')
)
