<template lang="html">
  <div class="clearAllContainer">
    <span class="clearAllBtn" @click="clearTodo">Clear All</span>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations({
      clearTodo: 'clearAllItems',
    })
    // clearTodo() {
    //   // this.$emit('removeAll');
    //   this.$store.commit('clearAllItems');
    // }
  }
  
}
</script>

<style lang="css" scoped>
  .clearAllContainer {
    width: 8.5rem;
    height: 50px;
    line-height: 50px;
    background-color: white;
    border-radius: 5px;
    margin: 0 auto;
  }
  .clearAllBtn {
    color: #e20303;
    display: block;
  }
</style>
