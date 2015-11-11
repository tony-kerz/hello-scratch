import {combineReducers} from 'redux'
import {routerStateReducer} from 'redux-router'
routing: routeReducer
import {routeReducer} from 'redux-simple-router'
import * as sessionReducers from './session/reducers'
//import {loginReducer} from './session/reducers'

const reducers = {
  ...sessionReducers,
  //loginReducer,
  routing: routeReducer
}
console.log('reducers=%o', reducers)
export default combineReducers(reducers)
