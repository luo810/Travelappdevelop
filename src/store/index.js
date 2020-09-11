import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
Vue.use(Vuex)
// 下面内容是防止有些浏览器localStorage没打开直接抛出异常

export default new Vuex.Store({
    state,
    mutations
    // 暂时用不到
    // actions: {
    //     changeCity (ctx,city) {
    //         ctx.commit('changeCity',city)
    //     }
    // },
})