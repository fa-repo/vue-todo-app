<template>
  <input
    v-model="newTodo"
    autofocus
    @keyup.enter="addTodo"
    placeholder="Enter a new Todo"
  />
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
      if (this.newTodo) {
        this.onAddTodo(this.newTodo);
        this.newTodo = "";
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
input {
  width: 400px;
  font-size: 14px;
  padding: 10px;
  border: thin solid #cccccc;
  margin-bottom: -1px;
}
</style>
