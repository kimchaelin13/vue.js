<template>
  <div class="memo-app">
    <memo-form></memo-form>
    <memo></memo>
  </div>  
</template>

<script>
import Memo from './Memo.vue';
import MemoForm from './MemoForm.vue'


export default {
  components: { Memo,MemoForm },
  name:'MemoApp',
  data() {
    return {
      memos:[],
    }
  },
  created() {
    this.memos = localStorage.memos ? JSON.parse(localStorage.memos) : [];
  }
}
</script>

<style>

</style>