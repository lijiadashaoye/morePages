import Vue from 'vue'
import home from './home.vue'
// import router from './router'
// import store from './vuex'
import api from '../../api/apiSet'
Vue.prototype.$api = api;

Vue.config.productionTip = false

new Vue({
  // router,
  // store,
  render: h => h(home)
}).$mount('#app')