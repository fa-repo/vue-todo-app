<template>
  <input v-model="newTodo" autofocus @keyup.enter="addTodo" />
</template>

<script>
export default {
  name: "NewToDoItem",
  props: {
    onAddTodo: Function
  },
  data() {
    return {
      newTodo: ""
    };
  },
  methods: {
    addTodo: function() {
      this.onAddTodo(this.newTodo);
      this.newTodo = "";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
//
</style>
