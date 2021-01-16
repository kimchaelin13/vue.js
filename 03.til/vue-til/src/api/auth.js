// 로그인 회원가입 회원 탈퇴
import { instance } from './index'

//api를 만들기 위해 필요한건 인스턴스
//api문서 참고
// 회원가입 API
function registerUser(userData) {
  return instance.post('signup', userData);
}

// 로그인 API
function loginUser(userData) {
  return instance.post('login', userData);
}

export {
  registerUser,
  loginUser,
}