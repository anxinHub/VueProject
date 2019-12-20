import Vue from 'vue'
import VueRouter from 'vue-router'

//vue.use(插件)，安装插件
Vue.use(VueRouter)

const routers = [
  {
    path:'/',
    redirect:''
  },
  {
    path:'',
    component:''
  }
]
//创建路由对象,mode默认为hash，url会有#
const router = new VueRouter({
  routers,
  mode:'history'
})

//将router对象传入vue实例
export default router