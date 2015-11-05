import debug from 'debug'
let dbg = debug('app:menu')
import React, {Component} from 'react'
import ReactDom from 'react-dom'
import $ from 'jquery'
import 'semantic-ui-visibility/visibility'
import {Link} from 'react-router'

class Menu extends Component {
  render() {
    return(
      <div className='ui masthead large secondary menu'>
        <div className='ui container xyz'>
          <Link to='/home' className='item' activeClassName='active'>Home</Link>
          <Link to='/stuff' className='item' activeClassName='active'>Stuff</Link>
          { this.props.session.isLoggedIn() ? (
              <div className='right item'>
                <button onClick={this.logout} className='ui button'>
                  Logout
                </button>
              </div>
            ) : (
              <div className='right item'>
                <Link to='/sign-in' className='ui inverted button'>Log in</Link>
              </div>
            )
          }
        </div>
      </div>
    )
  }

  logout = () => {
    dbg('logout: session=%o', this.props.session)
    this.props.session.logout()
  }

  componentDidMount() {
    console.log('menu: cdm')
    $(ReactDom.findDOMNode(this)).visibility(
      {
        type: 'fixed',
        fixedAddClasses: 'inverted',
        //fixedRemoveClasses: 'secondary',
        // https://github.com/Semantic-Org/UI-Visibility/pull/1
        omitPlaceholderAttrs: 'data-reactid'
      }
    )
  }
}

export default Menu
