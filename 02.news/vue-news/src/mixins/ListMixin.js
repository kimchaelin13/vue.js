import bus from '../utils/bus'

export default {
  mounted() {
    //인스턴스가 화면에 붙어졌을때,완료된 시점에 불러지는 라이프사이클 함수
    bus.$emit('end:spinner')
  }
  //재사용할 컴포넌트 옵션, 로직
  // created() {
  //   bus.$emit('start:spinner')
  //   this.$store.dispatch('FETCH_LIST',this.$route.name)
  //     .then(() => {
  //       console.log(5)
  //       console.log('fetched');
  //       bus.$emit('end:spinner')
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  // }
}