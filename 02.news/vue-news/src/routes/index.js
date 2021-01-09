import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import JobsView from '../views/JobsView.vue';
import AskView from '../views/AskView.vue';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
// import createListView from '../views/CreateListView';

Vue.use(VueRouter);

//여기있는 router를 main.js로 옮겨주려면 export해주면 된다
 export default new VueRouter({
  //해시값 제거
  mode: 'history',
  routes: [
    {
      path:'/',
      redirect:'/news',
    },
    //path가 들어가자마자 리다이렉트로 뉴스로 가게 됨(뉴스페이지로)
    {
      path:'/news',
      name:'news',
      component:NewsView,
      // component:createListView('NewsView')
    },
    {
      //url : url에 대한 정보
      path:'/ask',
      //component : url 주소로 갔을때 표시될 컴포넌트
      name:'ask',
      component:AskView,
      // component:createListView('AskView')
    },
    {
      path:'/jobs',
      name:'jobs',
      component: JobsView,
      // component:createListView('JobsView')
    },
    {
      path:'/user/:id',
      component: UserView,
    },
    {
      path:'/item/:id',
      component: ItemView,
    }
  ]
});

