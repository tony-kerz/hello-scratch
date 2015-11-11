import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import promiseMiddleware from 'redux-promise';
import createLogger from 'redux-logger'
import rootReducer from './reducers'

const finalCreateStore = compose(
  applyMiddleware(promiseMiddleware),
  applyMiddleware(
    createLogger({
      collapsed: true
    })
  )
)(createStore)

export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState)
  return store
}
