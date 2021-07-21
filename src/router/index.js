import Vue from 'vue'
import VueRouter from 'vue-router'

//在vue cli中创建的项目中 @ 表示 src 目录 的路径 别名
//好处：它不受当前文件路径影响
import Login from '@/views/login/login.vue'
//引入登录后主界面
import Main from '@/views/main/'
//引入主界面的home内容
import Home from '@/views/home/'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path:'/main',
    name:'main',
    component:Main
  },
  {
    path:'/home',
    name:'home',
    component:Home
  }

]

const router = new VueRouter({
  routes
})

export default router
