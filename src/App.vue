<template>
  <div id="app">
    <h1 id="heading">
      <img alt="To-Do logo" src="./assets/todo-icon.png" /> Vue Todo App
    </h1>
    <NewItem :onAddItem="addItem" />
    <List :items="todos" />
  </div>
</template>

<script>
import List from "./components/List.vue";
import NewItem from "./components/NewItem.vue";

export default {
  name: "App",
  components: {
    List,
    NewItem
  },
  data() {
    return {
      todos: ["item 1", "item 2", "item 3", "item 4"],
      newItem: ""
    };
  },
  methods: {
    addItem: function(item) {
      this.todos.push(item);
      console.log(item);
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#heading {
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
}

#heading img {
  height: 40px;
  margin-right: 15px;
}
</style>
