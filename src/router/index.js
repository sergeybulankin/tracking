import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/LoginComponent'
import Dashboard from '../components/DashboardComponent'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    name: "Dashboard",
    component: Dashboard
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
