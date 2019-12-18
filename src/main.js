//commonjs
// const { printAAA } = require('./js/sumfunction.js')
// printAAA;

//ES6的模块化的规范
// import {  name }from "./js/esSixFuntction";
// console.log(name);

//依赖css
//require('./css/common.css')

//导入router。如果导入的是文件夹，则会自动加载该文件夹下的index.js
import router from './router'

//使用vue
import Vue from 'vue'
//导入自己的.vue文件，替换下边自定义对象
import axCompApp from './vue/firstuseVue'
import App from './App'
import VueRouter from 'vue-router'

/* // 自定义定义对象axComApp，包含vue的配置template,data,methods
const axCompApp = {
  template:`
  <div>
  <h1>{{name}}</h1>
  <button @click="increment">按钮</button>
  <h2>{{message}}</h2>
  </div>`,
  methods:{
    increment:function(){
      console.log("按钮被执行")
    }
  },
  data(){
    return{
      message:'将vue的配置template,data,methods新建到一个对象里，并在真正的vue对象里通过component引入',
      name:'Hello components template'
    }
  }
}
*/

// 使用template替换main.html里id为el定义的<div>根
/* 直接在template里写入html , data,methods也在new里定义
const divApp = new Vue({
  el: '#app',
  data: {
    message: "Hello Vue npm",
    name:'Hello template'
  },
  methods:{
    increment:function(){
      console.log("按钮被执行");
    }
  },
  template:`
  <div>
  <h1>{{name}}</h1>
  <button @click="increment">按钮</button>
  </div>`
})
// */

/* components引入包含template、data、methods的对象
new Vue({
  el: '#app',
  template:'<App/>',
  components:{
    App
  },
  
})
*/ 

/* 使用render代替template和components 
new Vue({
 el:'#app',
 render: h => h(App)
})
// */

// /* 使用vue路由
new Vue({
  el:'#app',
  render: h => h(App),
  router: router
})
// */