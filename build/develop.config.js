const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config.')

module.exports = webpackMerge(baseConfig,{
  //开发阶段
  devServer:{
    //为哪一个文件提供本地服务
    contentBase:'./dist',
    //页面实时刷新
    inline:true
  }
})