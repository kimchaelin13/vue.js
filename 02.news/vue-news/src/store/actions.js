import {
  // fetchNewsList,
  // fetchAskList,
  // fetchJobList, 
  // fetchUserInfo,
  fetchCommentItem,
  fetchList
} from '../api/index'

export default {
  // FETCH_NEWS(context) {
  //   fetchNewsList()
  //     .then(response => {
  //       context.commit('SET_NEWS',response.data)
  //       return response
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  // },
  // FETCH_JOBS(context) {
  //   fetchJobList()
  //     .then(reponse => {
  //       context.commit('SET_JOBS',reponse.data)
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  // },
  // FETCH_ASK(context) {
  //   fetchAskList()
  //     .then(reponse => {
  //       context.commit('SET_ASKS',reponse.data)
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  // },
  // FETCH_USER({ commit }, name) {
  //   fetchUserInfo(name)
  //     .then(({ data }) => {
  //       commit('SET_USER',data)
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  // },
  FETCH_ITEM({ commit }, id) {
    fetchCommentItem(id)
      .then(({ data }) => {
        commit('SET_ITEM',data);
      })
      .catch(error => {
        console.log(error)
      })
  },
  FETCH_LIST({ commit }, pageName) {
    fetchList(pageName)
      .then(({ data }) => commit('SET_LIST',data))
      .catch(error => console.log(error))
  }
}