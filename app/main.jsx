import React, {Component} from 'react'
import Menu from './menu'
import Session from './session'

class Main extends Component {
  render() {
    return(
      <div className='field'>
        <Menu session={Session}/>
        <div className="ui main container">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Main
