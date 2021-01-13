<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">id:</label>
      <input id="username" type="text" v-model="username" />
    </div>
    <div>
      <label for="password">pw:</label>
      <input id="password" type="text" v-model="password" />
    </div>
    <!-- disabled : html 속성
    disabled가 조건에 따라서 붙거나 안붙거나 해야된느데 그때 해야하는게 v-bind속성, 단축 :
    :disabled = 'true' 
    isUsernameValid (트루폴스로 나타남)
    유저네임이 valid하지 않을때 disabled가 표시됨
    패스워드가 없으면!
    or조건:둘중에하나라도 유효하지 않으면 disabled
    Email Validation 정규 표현식 코드 https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript-->
    <button :disabled="!isUsernameValid || !password" type="submit">
      로그인
    </button>
    <p>{{ logMessage }}</p>
  </form>
</template>

<script>
import { loginUser } from '@/api/index';
import { validateEmail } from '@/utils/validation';

export default {
  data() {
    return {
      // form values
      username: '',
      password: '',
      // log
      logMessage: '',
    };
  },
  //validate 일반적으로 -> 컴퓨티드 속성 이용한다
  //this.username이 한글자한글자 바뀔때마다 validataEmail함수가 실행된다
  //그리고 리턴으로 트루나 폴스를 반환한다
  computed: {
    isUsernameValid() {
      return validateEmail(this.username);
    },
  },
  methods: {
    async submitForm() {
      try {
        // 비즈니스 로직
        const userData = {
          username: this.username,
          password: this.password,
        };
        const { data } = await loginUser(userData);
        console.log(data.user.username);
        this.$store.commit('setUsername', data.user.username);
        this.logMessage = `${data.user.username} 님 환영합니다`;
        //푸쉬:router-link의 자바스크립트 버전임
        this.$router.push('/main');
        // this.initForm();
      } catch (error) {
        // 에러 핸들링할 코드
        console.log(error.response.data);
        this.logMessage = error.response.data;
        // this.initForm();
      } finally {
        this.initForm();
      }
    },
    initForm() {
      this.username = '';
      this.password = '';
    },
  },
};
</script>

<style></style>
