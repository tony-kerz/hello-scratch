import React, {Component} from 'react'
import debug from 'debug'
let dbg = debug('app:sign-in')
//import Session from './session'
import {connect} from 'react-redux'
import {login} from './session/actions'

@connect(
  (state) => {
    dbg('connect: state=%o', state)
    return {
      session: state.session
    }
  },
  {
    login
  }
)
class SignIn extends Component {
  render () {
    dbg('props=%o', this.props)
    const {login, session} = this.props
    return (
      <div>
        <button onClick={() => {login(session, 'facebook')}} className="ui facebook button">
          <i className="facebook icon"></i>
          Facebook
        </button>
        <button onClick={() => {login(session, 'google')}} className="ui google plus button">
          <i className="google plus icon"></i>
          Google Plus
        </button>
      </div>
    )
  }
}

export default SignIn
