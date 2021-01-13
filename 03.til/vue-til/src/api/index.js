import axios from 'axios';

// function registerUser() {
//   const url = "http://localhost:3000/signup";
//   return axios.post(url)
// }

// export { registerUser }

//create api사용 -> create한 결과를 인스턴스로 만들어서 ~ 
//newVue처럼 

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

//api를 만들기 위해 필요한건 인스턴스
//api문서 참고
function registerUser(userData) {
  return instance.post('signup', userData);
}

function loginUser(userData) {
  return instance.post('login', userData);
}

export { registerUser, loginUser };
