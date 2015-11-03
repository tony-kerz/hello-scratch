import React, {Component} from 'react'
//import Hello from 'hellojs/dist/hello.all'
import debug from 'debug'
let dbg = debug('app:home')
import Hello from 'hellojs/dist/hello'
import 'hellojs/src/modules/google'

class Home extends Component {

  render() {
    return(
      <div>
        <div className="ui text container">
          <h1 className="ui inverted header">
            Imagine-a-Company
          </h1>
          <h2>Do whatever you want when you want to.<p />
          <div onClick={this.handleClick} className="ui huge primary button">Get Started <i className="right arrow icon" /></div>
        </h2></div>
      </div>
    )
  }

  handleClick = (e) => {
    //e.preventDefault()
    dbg('handle-click')
    let provider = Hello('google')
    dbg('provider=%o', provider)
    provider.login({force: false})
    .then((x) => {
      dbg('login.then: x=%o', x)
      provider.api('me')
      .then((y) => {
        dbg('api.then: y=%o', y)
      })
    })
  }
}

export default Home
