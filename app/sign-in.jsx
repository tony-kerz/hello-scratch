import React, {Component} from 'react'
import debug from 'debug'
let dbg = debug('app:sign-in')
import Session from './session'

class SignIn extends Component {
  render () {
    return (
      <div>
        <button onClick={this.handleClick.bind(this, 'facebook')} className="ui facebook button">
          <i className="facebook icon"></i>
          Facebook
        </button>
        <button onClick={this.handleClick.bind(this, 'google')} className="ui google plus button">
          <i className="google plus icon"></i>
          Google Plus
        </button>
      </div>
    )
  }

  handleClick = (providerName, e) => {
    e.preventDefault()
    this.props.route.session.login(providerName)
  }
}

export default SignIn
