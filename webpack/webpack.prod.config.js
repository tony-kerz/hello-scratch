var commonConfig = require('./webpack.common.config')
var _ = require('lodash')

module.exports = _.extend(
  commonConfig,
  {
    devtool: 'source-map'
  }
)
