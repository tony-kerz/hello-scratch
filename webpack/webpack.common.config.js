module.exports = {
  entry: {
    app: [
      'webpack/hot/dev-server',
      './app/app.jsx'
    ]
  },
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.coffee']
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      },
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        //query: {presets: ['es2015', 'stage-0', 'react']}
        query: {stage: 0}
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.eot$/,
        loader: "file-loader"
      },
      {
        test: /\.woff2?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.ttf$/,
        loader: "url-loader?limit=10000&mimetype=application/octet-stream"
      },
      {
        test: /\.svg$/,
        loader: "url-loader?limit=10000&mimetype=image/svg+xml"
      },
      {
        test: /\.png$/,
        loader: 'url-loader?mimetype=image/png'
      },
      {
        test: /\.jpg$/,
        loader: 'url-loader?mimetype=image/jpg'
      },
      {
        test: require.resolve('semantic-ui-visibility/visibility'),
        loader: 'imports?jQuery=jquery'
      },
      {
        test: require.resolve('hellojs/src/modules/google'),
        loader: 'imports?hello=hellojs/dist/hello'
      }
    ]
  }
}
