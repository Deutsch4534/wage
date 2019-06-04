import Vue from 'vue'
import store from './store'
import Router from 'vue-router'

import Home from '@/views/Home.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      meta: { auth: true },
      // route level code-splitting w/ hash generation each time its lazy loaded
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.auth)) {
    if (!store.state.loggedIn && !localStorage.getItem("loggedIn")) {
      next({ path: '/' })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router