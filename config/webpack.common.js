const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, '../lib/index.js'),

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },

  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'three.bundle.js'
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'assets/index.html'
    })
  ]
}