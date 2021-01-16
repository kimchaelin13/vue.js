<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="username">id:</label>
          <input id="username" type="text" v-model="username" />
          <p class="validation-text">
            <!-- 인풋창에 뭘 치고(유저네임 데이터가 있는데, valid하지 않으면 false반환임
            그걸 반대로 하면 t니까, 즉 둘다 t일때! 보여줘  -->
            <span class="warning" v-if="!isUsernameValid && username">
              Please enter an email address
            </span>
          </p>
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
        <button 
        :disabled="!isUsernameValid || !password" 
        type="submit"
        class="btn"
        >
          로그인
        </button>
        <p class="log">{{ logMessage }}</p>
      </form>
    </div>
  </div>
</template>

<script>
import { validateEmail } from '@/utils/validation';
// import { saveAuthToCookie, saveUserToCookie } from '@/utils/cookies'

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
        //넘어가서 비동기처리 하고 다음코드진행해야하기 때문에 await붙여줌
        await this.$store.dispatch('LOGIN',userData)
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

<style>
.btn {
  color: white;
}
</style>
