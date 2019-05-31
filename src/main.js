import Vue from 'vue'
import Notifications from 'vue-notification'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'



Vue.use(Notifications)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
