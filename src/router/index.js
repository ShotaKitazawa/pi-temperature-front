import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'
import Index from '@/components/Index'
import Signin from '@/components/Signin'
import Signout from '@/components/Signout'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '*',
      redirect: 'signin'
    },
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta: { requiresAuth: true }
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/signout',
      name: 'Signout',
      component: Signout
    }
  ]
})

// router.beforeEach()を追加
router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth && !currentUser) next('signin')
  else if (!requiresAuth && currentUser) next()
  else next()
})

export default router
