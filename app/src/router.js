import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.VUE_APP_MODE === 'production' ? '/' : '/vue-cli-deploy/',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
  ]
})
