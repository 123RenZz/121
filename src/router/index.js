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

//引入文章列表页面
import Article from '@/views/article/index.vue'
import Publish from '@/views/publish/index.vue'
//设置页面
import Settings from '@/views/settings/index.vue'
import Fans from '@/views/fans/index.vue'
import Image from '@/views/image/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/main',
    name: 'main',
    component: Main
  },
  {
    path: '/',
    //name:'layout',
    component: Layout,
    children: [
      {
        path: '',   //默认path为空 会作为默认的子路由
        name: 'home',
        component: Home
      },
      {
        path: '/article',
        name: 'article',
        component: Article
      },
      {
        path: '/settings',
        name: 'settings',
        component: Settings
      },
      {
        path: '/publish',
        name: 'publish',
        component: Publish
      },
      {
        path: '/fans',
        name: 'fans',
        component: Fans
      },
      {
        path: '/image',
        name: 'image',
        component: Image
      },
      {
        path: '/comment',
        name: 'comment',
        component: Comment
      }
    
    ]
  },
  {
    path: '/appAside',
    name: 'appAside',
    component: AppAside
  }

]

const router = new VueRouter({
  routes
})

//路由导航守卫，所有页面导航都会经过这里
//to 要去的路由页面信息
//from 来自哪里的路由信息
//next ：放行方法
router.beforeEach((to, from, next) => {
  const user = JSON.parse(window.localStorage.getItem('user'))
  //校验非登录页面的登录状态
  if (to.path !== '/login') {
    if (!user) {
      next()
    } else {
      next('/login')
    }
  } else {
    //登录页面过后正常放行
    next()
  }
})

export default router
