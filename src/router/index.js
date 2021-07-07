import Vue from 'vue'
import VueRouter from 'vue-router'

//在vue cli中创建的项目中 @ 表示 src 目录 的路径 别名
//好处：它不受当前文件路径影响
import Login from '@/views/login/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
