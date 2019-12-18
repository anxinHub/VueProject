const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config.')

module.exports = webpackMerge(baseConfig, {
  plugins: [
    //丑化，压缩项目,开发阶段不需要，影响调试
    new UglifyjsWebpackPlugin()
  ],
})