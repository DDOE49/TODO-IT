<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <!-- <TodoInput  v-on:addTodoItem="addOneItem"></TodoInput>
    <TodoList   v-bind:propsdata="todoItems" v-on:removeTodo="removeOneItem" v-on:toggleItem="toggleOneItem"></TodoList>
    <TodoFooter v-on:removeAll="clearAllItems"></TodoFooter> -->
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  data() {
    // return {
    //   todoItems: []
    // }
  },
  // created() {
  //   if (localStorage.length > 0)
  //   {
  //     for (let i = 0; i < localStorage.length; i++)
  //     {
  //       if(localStorage.key(i) !== 'loglevel:webpack-dev-server')
  //       {
  //         // this.todoItems.push(localStorage.key(i));
  //         this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
  //       }
  //     }
  //   }
  // },
  methods: {
    // addOneItem(todoItem) {
    //   const obj = {completed: false, item: todoItem};
    //   localStorage.setItem(todoItem, JSON.stringify(obj));
    //   this.todoItems.push(obj);
    // },
    // clearAllItems() {
    //   localStorage.clear();
    //   this.todoItems = [];
    // },
    // removeOneItem(todoItem, index) {
    //   localStorage.removeItem(todoItem.item);
    //   this.todoItems.splice(index, 1);
    // },
    // toggleOneItem(todoItem, index) {
    //   // todoItem.completed = !todoItem.completed;
    //   this.todoItems[index].completed = !this.todoItems[index].completed;
    //   // 로컬스토리지에 데이터 갱신
    //   localStorage.removeItem(todoItem.item);
    //   localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    // }
  },
  components: {
    'TodoHeader': TodoHeader,
    'TodoInput': TodoInput,
    'TodoList': TodoList,
    'TodoFooter': TodoFooter
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
  button {
    border-style: groove;
  }
  .shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
  }
</style>
