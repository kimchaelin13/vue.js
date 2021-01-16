import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/index'
// import LoginPage from '@/views/LoginPage'
// import SignupPage from '@/views/SignupPage'
// import PageNotFound from '@/views/PageNotFound'


Vue.use(VueRouter)

const router =  new VueRouter({
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
      meta: { auth: true },
    },
    {
      path: '/add',
      component: () => import('@/views/PostAddPage.vue'),
      meta: { auth: true },
    },
    {
      path: '/post/:id',
      component: () => import('@/views/PostEditPage.vue'),
      meta: { auth: true },
    },
    {
      path: '*',
      component: () => import('@/views/PageNotFound.vue'),
    },
  ]
});

router.beforeEach((to,from,next) => {
  //인증이 필요한 페이지면서, 만약 사용자가 로그인을 하지 않았을떄!
  if (to.meta.auth && !store.getters.isLogin ) {
    console.log('인증해라')
    next('/login');
    return; //리턴을 해야 아래 넥스트가 실행안됨
  } 
  next()
})

export default router;
