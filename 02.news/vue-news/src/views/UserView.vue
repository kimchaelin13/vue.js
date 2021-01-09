<template>
  <div>
    <user-profile :info="userInfo">
      <div slot="username">{{ userInfo.id }}</div>
      <span slot="time">{{ 'Joined ' + userInfo.created }}, </span>
      <span slot="karma">{{ userInfo.karma }}</span>
    </user-profile>
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile'

export default {
  components: {
    UserProfile
  },
  computed: {
    userInfo() {
      return this.$store.state.user;
    }
  },
  created() {
    const userName = this.$route.params.id;
    // axios.get(`https://api.hnpwa.com/v0/user/${userName}.json`)
    this.$store.dispatch('FETCH_USER',userName)
  }
}
</script>

<style scoped>
.user-container {
  padding: 0.5rem;
  display: flex;
  align-items:center;
}

.fa-user {
  font-size: 2.5rem;
}

.user-description {
  padding-left: 8px;

}

.time {
  font-size: 0.7rem;
}
</style>