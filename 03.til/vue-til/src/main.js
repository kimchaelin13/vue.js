import Vue from 'vue'
import App from './App.vue'
import router from '@/routes/index';
import store from '@/store/index';
import { formatDate } from '@/utils/filters'

Vue.filter('formatDate', formatDate) //전역으로 설정
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
