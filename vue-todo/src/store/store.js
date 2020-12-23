import Vue from 'vue'
import Vuex from  'vuex'
import * as getters from './getters'
import * as mutations from './mutations'

Vue.use(Vuex); // use: vue 플러그인 뷰를 사용하는 모든영역에 global을 적용하고 싶을 때

const storage = {
    fetch() {
       const arr = [];
        if (localStorage.length > 0)
       {
         for (let i = 0; i < localStorage.length; i++)
         {
           if(localStorage.key(i) !== 'loglevel:webpack-dev-server')
           {
             // this.todoItems.push(localStorage.key(i));
             arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
           }
         }
       }
       return arr;
    }
};

export const store = new Vuex.Store({
    state: {
        todoItems: storage.fetch()
    },
    getters,
    mutations
    // getters: {
    //   storedTodoItems(state) {
    //     return state.todoItems;
    //   }
    // },
    // mutations: {
    //   addOneItem(state, todoItem) {
    //     const obj = {completed: false, item: todoItem};
    //     localStorage.setItem(todoItem, JSON.stringify(obj));
    //     state.todoItems.push(obj);
    //   },
    //   removeOneItem(state, payload) {
    //     localStorage.removeItem(payload.todoItem.item);
    //     state.todoItems.splice(payload.index, 1);
    //   },
    //   toggleOneItem(state, payload) {
    //     // todoItem.completed = !todoItem.completed;
    //     state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
    //     // 로컬스토리지에 데이터 갱신
    //     localStorage.removeItem(payload.todoItem.item);
    //     localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
    //   },
    //   clearAllItems(state) {
    //     localStorage.clear();
    //     // this.todoItems = [];
    //     state.todoItems = [];
    //   }
    // }
    
});