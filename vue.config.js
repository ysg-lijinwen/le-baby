// var path = require('path')
// var webpack = require('webpack')
 
// const NODE_ENV = process.env.NODE_ENV

module.exports = {
    pages: {
      index: {
        entry: 'examples/main.js',
        template: 'public/index.html',
        filename: 'index.html'
      }
    },
    // 扩展 webpack 配置，使 packages 加入编译
    chainWebpack: config => {
      config.module
        .rule('js')
        .include
          .add('/packages')
          .end()
        .use('babel')
          .loader('babel-loader')
    },
    // devtool: 'source-map'   // 会生成对于调试的完整的.map文件，但同时也会减慢打包速度
  }