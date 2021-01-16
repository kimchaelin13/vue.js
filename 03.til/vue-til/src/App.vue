<template>
  <div class="app">
    <!-- url이 변경되고 페이지컴포넌트 보여주는 라우터뷰태그 -->
    <AppHeader></AppHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from '@/components/common/AppHeader'


export default {
  components:{
    AppHeader,
  }

}
</script>

<style>
@import './css/reset.css';
@import './css/common.css';
</style>