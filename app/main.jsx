import React, {Component} from 'react'
import Menu from './menu'

class Main extends Component {
  render() {
    return(
      <div className='field'>
        <Menu/>
        <div className="ui main container">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Main
