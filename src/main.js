/**
 * 项目的启动入口
 * 
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//加载 element 组件库的样式
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

//加载全局样式文件
import './styles/index.less'

//注册全局element组件库
Vue.use(ElementUI)

Vue.config.productionTip = false

//创建Vue根实例
//把router配置到根实例中
//通过render方法吧App根组件渲染到 #app 入口节点
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



