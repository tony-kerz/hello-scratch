import debug from 'debug'
let dbg = debug('app:session:actions')
import {createAction} from 'redux-actions'
import hello from 'hellojs/dist/hello'
import 'hellojs/src/modules/facebook'
import * as actions from './constants'

hello.init({
  google: '56256887053-9ss673d224gvale3s46ou2e027h9dh67.apps.googleusercontent.com',
  facebook: '124302701263738'
})

// handle already-logged-in here?
export const login = createAction(
  actions.LOGIN,
  async (session, providerName) => {
    dbg('login: session=%o, provider-name=%o', session, providerName)
    const loginResult = await hello.login(
      providerName,
      {force: false},
      () => { dbg('login: callback') }
    )
    dbg('login: login-result=%o', loginResult)
    const apiResult = await hello(providerName).api('me')
    dbg('login: api-result=%o', apiResult)
    return apiResult
  }
)

// handle not-logged-in here?
export const logout = createAction(
  actions.LOGOUT,
  async (session) => {
    dbg('logout: session=%o', session)
    const logoutResult = await hello.logout(
      session.providerName,
      {force: false},
      () => { dbg('logout: callback') }
    )
    dbg('logout: logout-result=%o', logoutResult)
    return logoutResult
  }
)
