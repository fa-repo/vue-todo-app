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
  border: thin solid rgba(0,0,0,0.2);
  width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
li {
  display: inline-block;
  padding: 10px;
  width: 100%;
  text-align: left;
}
a {
  color: #42b983;
}
</style>
