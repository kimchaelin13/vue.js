import {
  fetchNewsList,
  fetchAskList,
  fetchJobList, 
  fetchUserInfo,
  fetchCommentItem,
  fetchList
} from '../api/index'

export default {
  //promise
  // FETCH_NEWS(context) {
  //   return fetchNewsList()
  //     .then(response => {
  //       context.commit('SET_NEWS',response.data)
  //       return response
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  // },
  //async
  async FETCH_NEWS(context) {
    const response = await fetchNewsList()
    context.commit('SET_NEWS',response.data)
    //결과값을 리턴해줘야지 페치뉴스를 실행하고 나서 그다음 로직을 처리할 수 있다
    return response
  },
  // await
  async FETCH_JOBS({ commit }) {
    try {
      const response = await fetchJobList();
      commit('SET_JOBS', response.data)
      return response
    } catch(error) {
      console.log(error)
    }
  },
  // FETCH_JOBS(context) {
  //   return fetchJobList()
  //     .then(reponse => {
  //       context.commit('SET_JOBS',reponse.data)
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  // },
  FETCH_ASK(context) {
    return fetchAskList()
      .then(reponse => {
        context.commit('SET_ASKS',reponse.data)
      })
      .catch(error => {
        console.log(error)
      })
  },
  FETCH_USER({ commit }, name) {
    return fetchUserInfo(name)
      .then(({ data }) => {
        commit('SET_USER',data)
      })
      .catch(error => {
        console.log(error)
      })
  },
  FETCH_ITEM({ commit }, id) {
    return fetchCommentItem(id)
      .then(({ data }) => {
        commit('SET_ITEM',data);
      })
      .catch(error => {
        console.log(error)
      })
  },
  FETCH_LIST({ commit }, pageName) {
    // spiner동작하기 위해 여기서 return을해서
    // 믹신의 created에서 체이닝
     return fetchList(pageName)
      .then(response => {
        console.log(4)
        commit('SET_LIST',response.data);
        return response
      })
      .catch(error => console.log(error))
  }
}