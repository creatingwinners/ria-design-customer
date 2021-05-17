import { createRouter, createWebHistory } from 'vue-router'
import Login from '/src/components/Login.vue'
import Register from '/src/components/Register.vue'
import Forgot from '/src/components/Forgot.vue'
import Dashboard from '/src/components/Dashboard.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/forgot',
    name: 'Forgot',
    component: Forgot,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  }
]

const router = new createRouter({
  history: createWebHistory(),
  routes
})

export default router
