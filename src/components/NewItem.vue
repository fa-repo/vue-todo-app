<template>
  <input v-model="newItem" autofocus @keyup.enter="addItem" />
</template>

<script>
export default {
  name: "NewToDoItem",
  props: {
    onAddItem: Function
  },
  data() {
    return {
      newItem: ""
    };
  },
  methods: {
    addItem: function() {
      this.onAddItem(this.newItem);
      this.newItem = "";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
//
</style>
