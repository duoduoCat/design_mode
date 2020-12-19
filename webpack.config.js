/* eslint-disable no-undef */
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(process.cwd(), '/src/index.js'),

  devtool: 'source-map',
  
  mode: 'development',
  devServer: {
    contentBase: path.join(process.cwd(), './dist'),
  },

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
  module: {
    rules: [
      {
        test: /\.js$/,
        include: /src/,
        use: [
          {
            loader: 'babel-loader',
            options: {
            // 预设：设置babel怎么做兼容性处理
              presets: [
                [
                  '@babel/preset-env',
                  {
                    //按需加载
                    useBuiltIns: 'usage',
                    corejs: {
                        //指定core-js版本
                      version: 3,
                    },
                    // 指定兼容到那个浏览器版本
                    targets: {
                      chrome: '50',
                      ie: '8',
                      firefox: '60',
                      edge: '17',
                      safari: '10',
                    },
                  },
                ],
              ],
            },
          },
        ],
      },
    ],
  },
}
