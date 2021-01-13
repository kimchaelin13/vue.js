import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from '@/views/LoginPage'
import SignupPage from '@/views/SignupPage'
import PageNotFound from '@/views/PageNotFound'


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
      component: () => import('@/views/LoginPage.vue'),
    },
    {
      path: '/signup',
      component: () => import('@/views/SignupPage.vue'),
    },
    {
      path: '/main',
      component: () => import('@/views/MainPage.vue'),
    },
    {
      path: '*',
      component: () => import('@/views/PageNotFound.vue'),
    },
    // {
    //   path:'/',
    //   redirect:'/login'
    // },
    // {
    //   path:'/login',
    //   component:LoginPage
    // },
    // {
    //   path:'/signup',
    //   component:SignupPage
    // },
    // {
    //   path: '/main',
    //   component: () => import('@/views/MainPage.vue'),
    // },
    // {
    //   path:'*',
    //   component:PageNotFound
    // }
  ]
});