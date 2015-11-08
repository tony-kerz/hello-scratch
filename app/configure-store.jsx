import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {reduxReactRouter} from 'redux-router'
import {createHistory} from 'history'
import createLogger from 'redux-logger'
import rootReducer from './reducers'
import routes from './routes'

export default function configureStore() {
  return compose(
    applyMiddleware(thunk),
    reduxReactRouter({
      routes,
      createHistory
    }),
    applyMiddleware(createLogger())
  )(createStore)(rootReducer)
}
