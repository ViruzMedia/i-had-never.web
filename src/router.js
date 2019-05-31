import Vue from 'vue'
import Router from 'vue-router'
import dashboard from "@/views/dashboard.vue"
import login from "@/views/login.vue"
import dev from "@/views/administration/dev.view.vue"


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: dashboard,
    },
    {
      path: '/account-system/login',
      name: 'login',
      component: login,
    },
    {
      path: '/administration/dashboard',
      name: 'admin-dashboard',
      component: dev,
    }
  ]
})
