<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodo="addTodo"></TodoInput>
    <TodoList v-bind:propsdata="todoItems" @removeTodo="removeTodo"></TodoList>
    <TodoFooter v-on:removeAll="clearAll"></TodoFooter>
  </div>  
</template>

<script>
import TodoHeader from './components/TodoHeader'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import TodoFooter from './components/TodoFooter'


export default {
  data() {
    return {
      todoItems:[]
    }
  },
  methods: {
    addTodo(todoItem) {
      localStorage.setItem(todoItem,todoItem)
      this.todoItems.push(todoItem)
    },
    clearAll() {
      localStorage.clear();
      this.todoItems=[];
    },
    removeTodo(todoItem,index){
      localStorage.removeItem(todoItem)
      this.todoItems.splice(index,1)
    }
  },
  components:{
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  },
  created() {
    if (localStorage.length > 0){
      for (var i=0; i<localStorage.length; i++){
        this.todoItems.push(localStorage.key(i))
      }
    }
  }
}
</script>

<style>
body {
  text-align: center;
  background-color: #F6F6F8;
}

input {
  border-style: groove;
  width: 200px;
}

botton {
  border-style: groove;
}

.shadow {
  box-shadow: 5px 10px 10px rbga(0,0,0,0.03);
}

</style>