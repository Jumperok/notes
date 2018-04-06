const path = require('path');

let conf = {
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

module.exports = (env, options) => {
  let production = options.mode === 'production';

  conf.devtool = production ? false : 'eval-sourcemap';

  return conf;
}
