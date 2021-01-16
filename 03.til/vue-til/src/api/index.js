import axios from 'axios';
import { setInterceptors } from './common/interceptors'

//기본 인스턴스값
function createInstance() {
  return axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  })
}


//create api사용 -> create한 결과를 인스턴스로 만들어서 ~ 
//newVue처럼 

//axios.create로 생성할때 주입한 속성들은 인스턴스로 데이터요청을 할때마다
//무조건 속성이 정의된 상태로 정의된다

//인스턴스 interceptor이용해서 setup

// 액시오스 초기화 함수
function createInstanceWithAuth(url) {
  const instance = axios.create({
    baseURL: `${process.env.VUE_APP_API_URL}${url}`,
    // headers: {
    //   Authorization: store.state.token,
    // }
  });
  // 인터셉터까지 설정된 인스턴스 리턴
  return setInterceptors(instance)
}

export const instance = createInstance()
//기본 url이 항상 posts가 된 변수
export const posts = createInstanceWithAuth('posts');





