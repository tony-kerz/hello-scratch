import debug from 'debug'
let dbg = debug('app:session:reducers')
import * as actions from './constants'
//import {handleAction} from 'redux-actions'
import {handleActions} from 'redux-actions'

// export const loginReducer = handleAction(
//   actions.LOGIN,
//   (state={}, action) => {
//     dbg('reduce-login: state=%o, action=%o', state, action)
//     return {
//       ...state,
//       session: {
//         active: true
//       }
//     }
//   }
// )

// should be able to use plain-old handleAction
// https://github.com/acdlite/redux-actions/issues/23
export const loginReducer = handleActions(
  {
    [actions.LOGIN]: (state, action) => {
      dbg('reduce-login: state=%o, action=%o', state, action)
      return {
        ...state,
        session: {
          active: true
        }
      }
    }
  },
  {} // initial-state
)

// export const logoutReducer = handleAction(
//   actions.LOGOUT,
//   (state={}, action) => {
//     dbg('reduce-login: state=%o, action=%o', state, action)
//     return {
//       ...state,
//       session: {
//         active: false
//       }
//     }
//   }
// )
