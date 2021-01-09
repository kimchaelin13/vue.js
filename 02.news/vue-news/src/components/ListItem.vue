<template>
  <ul class="news-list">
    <li v-for="news in listItems" :key="news.id" class="post">
      <div class="points">
        {{ news.points || 0 }}
      </div>
      <div>
        <p class="news-title">
          <template v-if="news.domain">
            <a :href="news.url">{{ news.title }}</a><small class="link-text" v-if="news.domain">({{ news.domain }})</small>
          </template>
          <template v-else>
            <router-link :to="`/item/${news.id}`">{{ news.title }}</router-link><small><a class="link-text" :href="news.domain" v-if="news.domain">({{ news.domain }})</a></small>
          </template>
        </p>
        <small v-if="news.user" class="link-text">
          by
          <router-link :to="`/user/${news.user}`" class="link-text">{{ news.user }}</router-link>
        </small>
        <small v-if="news.time_ago" class="link-text">
          {{ news.time_ago }}
        </small>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  // created() {
  //   //this.$store.dispatch('FETCH_NEWS');
  //   // console.log(this.$route.path === '/news');
  //   const name = this.$route.name;
  //   if (name === 'news') {
  //     this.$store.dispatch('FETCH_NEWS');
  //   } else if (name === 'ask') {
  //     this.$store.dispatch('FETCH_ASK');
  //   } else if (name === 'jobs') {
  //     this.$store.dispatch('FETCH_JOBS');
  //   }
  // },
  computed : {
    listItems() {
      return this.$store.state.list
      // if (this.$route.path === '/news') {
      //   return this.$store.state.news;
      // } else if (this.$route.path === '/ask') {
      //   return this.$store.state.ask;
      // } else  {
      //   return this.$store.state.jobs;
      // }
    }
  }
}
</script>


<style scoped>
.news-list {
  margin: 0;
  padding: 0;
}

.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}

.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #41b883;
}

.news-title {
  margin: 0;
}

.link-text {
  color: #828282;
}
</style>