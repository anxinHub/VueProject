//node全局path
const path =  require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './src/main.js',
  output: {
    // path: './dist',
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
    //url前加路径,使用htmlplugin后index.html生成在dis下，可以删除此配置
    // publicPath: 'dist/'
  },
  module: {
    rules: [
      {
        //正则 \.转移 $结尾
        test: /\.css$/,
        //多个loader时，从右向左
        use: ['style-loader', 'css-loader']
      }, {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8196,
              name: 'img/[name].[hash:8].[ext]'
            },
          }]
      }, {//es6 to es5
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            //presets: ['@babel/preset-env']
            presets: ['es2015']
          }
        }
      }, {
        test: /\.vue$/,
        use: {
          loader:'vue-loader'
        }
      }
    ]
  },
  resolve: {
    //import里的简写
    extensions:['.js','.css','.vue'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins:[
    new HtmlWebpackPlugin({
      //会找寻当前文件所在目录下的文件作为模板，在dist下生成index
      template: 'index.html'
    }),
  ],
}
//配置该文件，webpack打包使用该配置指定入出口
//npm run serve
//limit:8196//kb*1000,base64,小于limit时编译为base64，大于时connot find module ‘file-loader’。
