// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 这是项目的入口文件
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'babel-polyfill'
import store from './store'
import 'styles/reset.css'
// 解决移动端一像素边框的问题
// @/表示去到assets目录
import 'styles/border.css'
// 移动端300ms点击延迟问题 npm install fastclick --save
import 'styles/iconfont.css'
import 'styles/swiper.css'
Vue.config.productionTip = false
// 这句话不加会报错，报fastClick定义未使用的错
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
