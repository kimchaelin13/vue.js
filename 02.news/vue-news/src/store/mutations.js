
export default {
  //action에서 response data가 인자로 넘어와서 그걸 news라는 이름으로 받음
  SET_NEWS(state,news) {
    state.news = news;
  },
  SET_JOBS(state,jobs) {
    state.jobs = jobs;
  },
  SET_ASKS(state,asks) {
    state.ask = asks;
  },
  SET_USER(state,user) {
    state.user = user;
  },
  SET_ITEM(state,item) {
    state.item = item;
  },
  SET_LIST(state,list) {
    state.list = list
  }
}