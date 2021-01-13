import Vue from 'vue'
import VueRouter from 'vue-router'
import NewsView from '../views/NewsView.vue';
import JobsView from '../views/JobsView.vue';
import AskView from '../views/AskView.vue';

import store from '../store/index.js';


Vue.use(VueRouter)

export default new VueRouter({
  mode:'history',
  routes: [
    {
      path:'/',
      redirect:'/news',
    }
  ]
})

