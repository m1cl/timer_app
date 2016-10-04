var webpack = require('webpack');

entry: [
  'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
  'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
  './public/index' // Your appʼs entry point
]


