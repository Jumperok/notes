const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
      path: path.resolve(__dirname, 'public'),
      filename: 'bundle.js'
  },
  module: {
      rules: [
          {
              test: /\.jsx?$/,
              loader: 'babel-loader',
              exclude: /node_modules/
          },
          {
              test: /\.css$/,
              use: [ 'style-loader', 'css-loader' ]
          }
      ]
  },
  devServer: {
      contentBase: path.resolve(__dirname, 'public')
  }
};
