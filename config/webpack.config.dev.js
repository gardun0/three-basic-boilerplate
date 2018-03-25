const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  devtool: 'inline-source-map',

  mode: 'development',

  devServer: {
    contentBase: '/dist/',
    clientLogLevel: 'info',
    open: true
  }
})