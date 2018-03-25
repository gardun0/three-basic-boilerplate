const merge = require('webpack-merge')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const common = require('./webpack.common')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = merge(common, {

  mode: 'production',

  plugins: [
    new CleanWebpackPlugin(['../dist']),
    new UglifyJSPlugin()
  ]
})