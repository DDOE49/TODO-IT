<template lang="html">
  <section>
    <div>
        <transition-group name="list" tag="p">
            <li v-for="(todoItem, index) in this.storedTodoItems" v-bind:key="todoItem.item" class="shadow">
                <i class="checkBtn fas fa-check" v-bind:class="{checkBtnCompleted:todoItem.completed}" @click="toggleComplete({todoItem, index})" aria-hidden="true"></i>
                <span v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
                <span class="removeBtn" type="button" v-on:click="removeTodo({todoItem, index})">
                <i class="far fa-trash-alt" aria-hidden="true"></i>
                </span>
            </li>
        </transition-group>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  // props: ['propsdata'],
  // data() {
  //   return {
  //     todoItems: []
  //   }
  // },
  // created() {
  //   if (localStorage.length > 0)
  //   {
  //     for (var i = 0; i < localStorage.length; i++)
  //     {
  //       this.todoItems.push(localStorage.key(i));
  //     }
  //   }
  // },
  methods: {
    ...mapMutations({
      removeTodo: 'removeOneItem',
      toggleComplete: 'toggleOneItem'
      // removeTodo: 'removeOneItem(todoItem, index)'
    }),
    // removeTodo(todoItem, index) {
    //   // this.$emit('removeTodo', todoItem, index);
    //   // const obj = {
    //   //   todoItem,
    //   //   index
    //   // }
    //   this.$store.commit('removeOneItem', {todoItem, index});
    // },
    // toggleComplete(todoItem, index) {
    //   // this.$emit('toggleItem', todoItem,index);
    //   this.$store.commit('toggleOneItem', {todoItem, index});
    // }
  },
  computed: {
    // todoItems() {
    //   return this.$store.getters.storedTodoItems;
    // }
      ...mapGetters(['storedTodoItems']) // 이름 일치시킨 배열 리턴식
      // ...mapGetters({ // getters의 이름과 list에서 사용하는 명이 일치하지 않을 때 객체 리턴식
      //   todoItem: 'storedTodoItems'
      // })
  }
}
</script>

<style lang="css" scoped>
  ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
  }
  li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
  }
  .checkBtn {
    line-height: 50px;
    color: #62acde;
    margin-right: 5px;
  }
  .checkBtnCompleted {
    color: #b3adad;
    /* text-decoration: line-through; */
  }
  .textCompleted {
    color: #b3adad;
    text-decoration: line-through;
  }
  .removeBtn {
    margin-left: auto;
    color: #de4343;
  }
  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }

  /* 리스트 아이템 트랜지션 효과 */

  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(30px);
  }
</style>
