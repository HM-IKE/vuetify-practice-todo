<template>
  <div>
    <v-list subheader>
      <v-subheader>Todo list</v-subheader>
      <v-list-item v-for='todo in task' :key="todo.id">
        <v-list-item-content>
          <v-list-item-title>{{ todo.id }}:{{ todo.todo }}</v-list-item-title>
          <button v-on:click="didSubmit" x-small :value="todo.id">Did!</button>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  name: 'Todolist',
  props:{
    "task": Array,
  },
  methods:{
    didSubmit(e){
      e.preventDefault()
      let todoid = e.target.value;
      console.log(todoid)
      this.$emit('did', todoid)
    }
  }
}
</script>

<style scoped>

</style>