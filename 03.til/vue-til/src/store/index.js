import Vue from 'vue';
import Vuex from 'vuex';
import { getAuthFromCookie, getUserFromCookie, saveAuthToCookie, saveUserToCookie } from '@/utils/cookies'
import { loginUser } from '@/api/auth'

//초기화
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: getUserFromCookie() || '',
    //cookie가 있으면 쓰고 없으면 문자열
    token: getAuthFromCookie() || '',
  },
  //로그인이 됐는지안됐는지는 state에 있는 값으로 판별가능
   // 빈문자열이면 로그인안되있다
  getters: {
    isLogin(state) {
      // 빈문자열이면 username === ''
      return state.username !== '';
    },
  },
  //데이터를 바꾸는게 뮤테이션
  mutations: {
    setUsername(state, username) {
      state.username = username;
    },
    //로그아웃
    //유저네임을 비우면된다(여기서 로그인했다 안했다 기준이 username이 있는지없는지니까)
    clearUsername(state) {
      state.username = '';
    },
    setToken(state, token) {
      state.token = token
    },
    clearToken(state) {
      state.token ='';
    }
  },
  actions: {
    async LOGIN({ commit }, userData) {
      const { data } = await loginUser(userData);
      commit('setToken',data.token);
      commit('setUsername', data.user.username);
      saveAuthToCookie(data.token);
      saveUserToCookie(data.user.username);
      return data
    }
  }
});
