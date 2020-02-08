<template>
  <div id="app">
    <h1 id="heading">
      <img alt="To-Do logo" src="./assets/todo-icon.png" /> Vue Todo App
    </h1>
    <NewTodo :onAddTodo="addTodo" />
    <TodoList :todos="todos" :onUpdateTodos="updateTodos" />
  </div>
</template>

<script>
import TodoList from "./components/TodoList.vue";
import NewTodo from "./components/NewTodo.vue";

export default {
  name: "App",
  components: {
    TodoList,
    NewTodo
  },
  data() {
    return {
      todos: [
        { id: "szq86umfc", note: "item 1", complete: true },
        { id: "b8jj7karu", note: "item 2", complete: false },
        { id: "0wzn59w1p", note: "item 3", complete: true },
        { id: "xgyta47yc", note: "item 4", complete: false }
      ]
    };
  },
  methods: {
    addTodo: function(item) {
      this.todos.unshift(item);
    },
    updateTodos: function(todos) {
      this.todos = todos;
    }
  }
};
</script>

<style lang="scss">
html {
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}

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
