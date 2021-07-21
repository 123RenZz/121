import Vue from 'vue'
import VueRouter from 'vue-router'

//在vue cli中创建的项目中 @ 表示 src 目录 的路径 别名
//好处：它不受当前文件路径影响
import Login from '@/views/login/login.vue'
//引入登录后主界面
import Main from '@/views/main/main.vue'
//引入主界面的home内容
import Home from '@/views/home/index.vue'
import Layout from '@/views/layout/index.vue'
import AppAside from '@/views/layout/components/aside.vue'

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
    path:'/',
    //name:'layout',
    component:Layout,
    children:[
      {
        path:'',   //默认path为空 会作为默认的子路由
        name:'home',
        component:Home
      }
    ]
  },
  {
    path:'/appAside',
    name:'appAside',
    component:AppAside
  }
  

]

const router = new VueRouter({
  routes
})

export default router
