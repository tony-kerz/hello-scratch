# hello-scratch

this repository is intended to illustrate a basic example which uses [hello-js](https://adodson.com/hello.js/)
to authenticate against an oauth provider.

it is currently setup to authenticate against facebook and google,
however google isn't currently working, but it illustrates the idea of supporting multiple auth options.

this repo also incidentally illustrates the following elements:

1. [webpack](http://webpack.github.io/) for build
1. [react](https://facebook.github.io/react/) for view
1. [react-router](https://github.com/rackt/react-router) for routing
1. [babel](http://babeljs.io/) for es-next syntax
1. [semantic-ui](http://semantic-ui.com/) for css styling

future elements to be added may include:

1. [redux](http://redux.js.org/) for data flow

## directions

1. git clone https://github.com/tony-kerz/hello-scratch
1. cd hello-scratch
1. npm install
1. npm run dev
1. visit http://localhost:8080 in browser
1. click the `login` button in the upper right
1. click the `facebook` icon
1. sign into facebook
1. look in the javascript console for the comment with `api.then`,
if you expand the referenced object you should see some basic profile info returned by facebook

notes: this is definitely rough around the edges, but it illustrates the basic idea
