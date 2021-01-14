import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from '@/views/LoginPage'
import SignupPage from '@/views/SignupPage'


Vue.use(VueRouter)

export default new VueRouter({
  mode:'history',
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      component: LoginPage,
    },
    {
      path: '/signup',
      component: SignupPage,
    },
  ]
});