<template>
  <!-- input작성하고 버튼 클릭하면 마지막에 폼태그에서 submit폼 메서드가 실행 -->
  <!-- submit.prevent하면 제출,새로고침 막음 -->
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">id: </label>
      <input id="username" type="text" v-model="username" />
    </div>
    <div>
      <label for="password">pw: </label>
      <input id="password" type="text" v-model="password" />
    </div>
    <div>
      <label for="nickname">nickname: </label>
      <input id="nickname" type="text" v-model="nickname" />
    </div>
    <button type="submit">회원 가입</button>
    <p>{{ logMessage }}</p>
  </form>
</template>

<script>
import { registerUser } from '@/api/index';

export default {
  data() {
    return {
      username:'',
      password:'',
      nickname:'',
    }
  },
  methods: {
    //asnyc, await https://joshua1988.github.io/web-development/javascript/js-async-await/
    async submitForm() {
      const userData = {
        username: this.username,
        password: this.password,
        nickname: this.nickname,
      };
      // response.data를 바로 꺼낼수있음 data로
      const { data } = await registerUser(userData);
      console.log(data.username);
      this.logMessage = `${data.username} 님이 가입되었습니다`;
      this.initForm();
    },
    initForm() {
      this.username = '';
      this.password = '';
      this.nickname = '';
    },
  },
}
</script>

<style>

</style>