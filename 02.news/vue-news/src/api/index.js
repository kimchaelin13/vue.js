import axios from 'axios';

// 1. http request & response와 관련된 기본 설정
const config = {
  baseUrl:'https://api.hnpwa.com/v0/'
}


// 2.api 함수 정리
function fetchNewsList() {
  //호출 결과를 리턴해준다
  // return axios.get(config.baseUrl + 'news/1.json')
  return axios.get(`${config.baseUrl}news/1.json`);

}

function fetchAskList() {
  //호출 결과를 리턴해준다
  // return axios.get(config.baseUrl + 'news/1.json')
  return axios.get(`${config.baseUrl}ask/1.json`);

}

function fetchJobList() {
  //호출 결과를 리턴해준다
  // return axios.get(config.baseUrl + 'news/1.json')
  return axios.get(`${config.baseUrl}jobs/1.json`);

}

function fetchList(pageName) {
  return axios.get(`${config.baseUrl}${pageName}`)
}


//username이 넘어오니까
function fetchUserInfo(username) {
  //호출 결과를 리턴해준다
  // return axios.get(config.baseUrl + 'news/1.json')
  return axios.get(`${config.baseUrl}user/${username}.json`);

}

//id이 넘어오니까
function fetchCommentItem(id) {
  return axios.get(`${config.baseUrl}item/${id}.json`);

}


//3.꺼내주기
export {
  fetchNewsList,
  fetchAskList,
  fetchJobList,
  fetchUserInfo,
  fetchCommentItem,
  fetchList
}
