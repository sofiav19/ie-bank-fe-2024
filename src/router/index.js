import Vue from 'vue'
import VueRouter from 'vue-router'
import Skull from '../components/Skull.vue'
import AppAccounts from '../components/AppAccounts.vue'
import Homepage from '../components/Homepage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/skull',
    name: 'Skull',
    component: Skull
  },
  {
    path: '/accounts',
    name: 'AppAccounts',
    component: AppAccounts
  },
  // add the homepage
  {
    path: '/',
    name: 'HomePage',
    component: Homepage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
