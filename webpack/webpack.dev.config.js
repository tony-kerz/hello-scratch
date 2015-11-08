var commonConfig = require('./webpack.common.config')
var _ = require('lodash')
var HtmlWebpackPlugin = require('html-webpack-plugin')

config = _.extend(
  commonConfig,
  {
    //devtool: 'eval', // fastest, least-helpful
    //devtool: 'cheap-module-eval-source-map', // medium-fast, medium-helpful
    //devtool: 'source-map', // slowest, most-helpful
    debug: true,
    plugins: [
      new HtmlWebpackPlugin(
        {
          template: 'index.dev.html',
          inject: 'body'
          //reload: 'http://localhost:8080/webpack-dev-server.js'
          //https://github.com/ampedandwired/html-webpack-plugin/pull/58
        }
      )
    ],
    devServer: {
      proxy: {
        '/api/*': 'http://localhost:3000'
      }
    }
  }
)

module.exports = config
