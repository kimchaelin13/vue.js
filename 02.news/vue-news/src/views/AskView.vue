<template>
  <div>
    <list-item></list-item>
  </div>
</template>


<script>
import ListItem from '../components/ListItem.vue'
// import bus from '../utils/bus'
import ListMixin from '../mixins/ListMixin'

export default {
  components: {
    ListItem
  },
  // mounted() {
  //   //인스턴스가 화면에 붙어졌을때,완료된 시점에 불러지는 라이프사이클 함수
  //   bus.$emit('end:spinner')
  // }
  mixins:[ListMixin],
}
</script>

