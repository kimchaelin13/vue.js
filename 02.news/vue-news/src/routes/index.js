import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import JobsView from '../views/JobsView.vue';
import AskView from '../views/AskView.vue';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
import bus from '../utils/bus'
import store from '../store/index.js';
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
      // beforeEnter는 특정 url로 접근할때 인증정보가 있는지 없는지 확인할때 가장 흔하게 쓰이고
      // 우리는 여기서 데이터를 호출하기 위해서 비포엔터를 씀
      // from은 현재위치의 라우팅정보 to는 이동할위치
      beforeEnter: (to,from,next) => {
        bus.$emit('start:spinner')
        store.dispatch('FETCH_LIST',to.name)
          .then(() => {
            console.log(5)
            console.log('fetched');
            bus.$emit('end:spinner')
            next()
          })
          .catch((error) => {
            console.log(error);
          })
        // console.log('to',to)
        // console.log('from',from)
        // console.log(next)
        // next()
        
      }
      // component:createListView('NewsView')
    },
    {
      //url : url에 대한 정보
      path:'/ask',
      //component : url 주소로 갔을때 표시될 컴포넌트
      name:'ask',
      component:AskView,
      beforeEnter: (to,from,next) => {
        bus.$emit('start:spinner')
        store.dispatch('FETCH_LIST',to.name)
          .then(() => {
            console.log(5)
            console.log('fetched');
            // bus.$emit('end:spinner') -> 마운티드로
            next()
          })
          .catch((error) => {
            console.log(error);
          })
        // console.log('to',to)
        // console.log('from',from)
        // console.log(next)
        // next()
        
      }
      // component:createListView('AskView')
    },
    {
      path:'/jobs',
      name:'jobs',
      component: JobsView,
      beforeEnter: (to,from,next) => {
        bus.$emit('start:spinner')
        store.dispatch('FETCH_LIST',to.name)
          .then(() => next())
          .catch((error) => {
            console.log(error);
          })
        // console.log('to',to)
        // console.log('from',from)
        // console.log(next)
        // next()
        
      }
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

