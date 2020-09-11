import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    //按需加载，否则打包所有js一起，请求时间长
    //异步加载组件
    component: () => import('@/pages/home/Home')
  },{
    path: '/city',
    name: 'City',
    component: () => import('@/pages/city/City')
  },{
    path: '/detail/:id',
    name: 'Detail',
    component: () => import('@/pages/detail/Detail')
  }],
  //解决不同页面滚动互相影响的问题
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
