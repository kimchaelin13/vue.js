<template>
  <div class="inputBox shadow">
  <input type="text" v-model="newTodoItem" placeholder="Type What you have to do" v-on:keyup.enter="addTodo">
  <span class="addContainer" v-on:click="addTodo">
    <!-- <i class="far fa-grin-stars"></i> -->
    <i class="addBtn far fa-grin-stars"></i>
  </span>

  <modal v-if="showModal" @close="showModal=false">
    <h3 slot="header">경고</h3>
    <span slot="body" @click="showModal=false">
      할 일을 입력하세요
      <i class="closeModalBtn fas fa-times" aria-hidden="true"></i>
    </span>
  </modal>
  </div>
</template>

<script>
import Modal from './common/Modal.vue'

export default {
  components:{
    Modal
  },
  data() {
    return {
      newTodoItem:'',
      showModal:false
    }
  },
  methods: {
    addTodo() {
      // console.log(this.newTodoItem);
      // 로컬 스토리지에 데이터를 추가하는 setItem() api를 이용해서 저장한다. api형식은 키, 값 형태임
      if (this.newTodoItem !== "") {
        var value = this.newTodoItem && this.newTodoItem.trim()
        this.$emit('addTodo',value)
        this.clearInput()
      } else {
        this.showModal = !this.showModal
      }
    },
    clearInput() {
      this.newTodoItem='';
    }
  }
}
</script>

<style scoped>
  input:focus {
    outline: none;
  }

  .inputBox {
    background-color: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
  }

  .inputBox input {
    border-style: none;
    fone-size: 0.9rem;
  }

  .addContainer {
    float: right;
    background: linear-gradient(to right,#6478FB,#8763FB);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
  }

  .addBtn {
    color: white;
    vertical-align: middle;
  }
</style>