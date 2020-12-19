/* eslint-disable no-undef */
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(process.cwd(), '/src/index.js'),

  devtool: 'source-map',
  
  mode: 'development',

  output: {

    filename: './js/[name].js',

    path: path.join(process.cwd(), './dist'),
  
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(process.cwd(), './src/public/index.html')
    })
  ],
  devServer: {
    contentBase: path.join(process.cwd(), './dist'),
  }
}
