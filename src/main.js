import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as blockstack from 'blockstack'

Vue.config.productionTip = false

Vue.prototype.$blockstack = blockstack

window.blockstack = require('blockstack')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
