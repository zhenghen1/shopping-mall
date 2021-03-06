import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Index from './components/index.vue'
// 轮播图插件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';



Vue.use(VueRouter);
Vue.use(ElementUI);
// 定义路由规则
let routes=[
  {
    path:'/',
    redirect:'/index'
  },
  {
    path:'/index',
    component:Index,
  }
]
// 实例化路由对象
let router =new VueRouter({
  routes
})
// 挂在到vue 事例上面
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
