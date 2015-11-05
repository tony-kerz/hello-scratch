import debug from 'debug'
let dbg = debug('app:session')
import Hello from 'hellojs/dist/hello'
import 'hellojs/src/modules/google'
import 'hellojs/src/modules/facebook'

Hello.init({
  google: '56256887053-9ss673d224gvale3s46ou2e027h9dh67.apps.googleusercontent.com',
  facebook: '124302701263738'
})

class Session {
  constructor() {
    dbg('ctor: this=%o', this)
    this.provider = null
    this.me = null
  }

  isLoggedIn() {
    return this.me
  }

  logout() {
    dbg('logout: this=%o', this)
    if (this.isLoggedIn()) {
      dbg('logout: provider=%o', this.provider)
      this.provider
      .logout({force:true})
      .then((x) => {
        console.log('logout-then: %o', x)
      })
    }
    else {
      console.error('logout: not currently logged in')
    }
  }

  login(providerName) {
    dbg('login: this=%o', this)
    if (this.isLoggedIn()) {
      console.error('login: already logged in')
    }
    else {
      dbg('login: provider-name=%o', providerName)
      this.provider = Hello(providerName)
      this.provider.login({force: false})
      .then((x) => {
        dbg('login.then: x=%o', x)
        this.provider.api('me')
        .then((y) => {
          dbg('api.then: y=%o', y)
          this.me = y
        })
      })
    }
  }
}

export default new Session()
