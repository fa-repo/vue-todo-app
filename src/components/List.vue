<template>
  <div class="todo-list">
    <ul>
      <li v-for="(item, index) in items" :key="`item-${index}`">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  props: {
    msg: String,
    items: Array
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
