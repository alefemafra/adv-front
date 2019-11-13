import Vue from 'vue'
import App from './App.vue'

import router from './plugins/router'
import store from './plugins/vuex'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
