<template>
  <div id="app">
    <!--url이 만약 jobs? -->
    <!-- <jobs-view></jobs-view> -->
    <!-- 결론적으로 라우터뷰는 URL주소에 따라 앞에서 지정한 뷰가 뿌려진다 -->
   <tool-bar></tool-bar>
   <transition name="page">
     <router-view></router-view>
   </transition>
   <spinner :loading="loadingStatus"></spinner>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue'
import Spinner from './components/Spinner.vue'
import bus from './utils/bus'

export default {
  components: {
    ToolBar,
    Spinner
  },
  data() {
    return {
      loadingStatus:false,
    }
  },
  methods: {
    startSpinner() {
      this.loadingStatus = true
    },
    endSpinner() {
      this.loadingStatus = false
    }
  },
  created() {
    bus.$on('start:spinner',  this.startSpinner);
    bus.$on('end:spinner',this.endSpinner);
  },
  //이벤트 온으로 받았기 떄문에 오프를 꼭 해줘야 한다
  beforeDestroy() {
    bus.$off('start:spinner',this.startSpinner)
    bus.$off('end:spinner',this.endSpinner)

  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}

a {
  color: #34495e;
  text-decoration: none;
}

a:hover {
  color: #42b883;
  text-decoration: underline;
}
a.router-link-exact-active {
  /* 선택해서 들어간곳에는 언더라인으로 */
  text-decoration: underline;
}

/* Router Transition */
.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to
/* .page-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>

