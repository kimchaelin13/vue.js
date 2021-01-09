<template>
  <div class="header">
    <router-link to="/news">News</router-link> |
    <router-link to="/jobs">Jobs</router-link> |
    <router-link to="/ask">Ask</router-link>
  </div>  
</template>

<script>
export default {

}
</script>

<style scoped>
.header {
  display: flex;
  padding: 8px;
  background-color: #42b883;
  color: white;
}

.header .router-link-exact-active {
  color: #35495e;
}

.header a {
  /* 활성화된 링크를 제외하고 컬러는 화이트 */
  color: white;
}

</style>