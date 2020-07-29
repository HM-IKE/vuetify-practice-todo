<template>
    <v-form ref="form">
      <v-flex>
        <v-text-field type="text" id="todo" label="Add todo" clearable></v-text-field>
        <p v-if="error">内容を入力してください。</p>
      </v-flex>
      <v-flex><v-btn v-on:click="todoSubmit" rounded raised>Submit</v-btn></v-flex>
    </v-form>
</template>
<script>
export default {
  name: 'Todoform',
  data(){
    return {
      "error" : false
    }
  },
  methods:{
    todoSubmit(e){
      e.preventDefault();
      let todo = document.getElementById("todo").value;
      let pattern = /^[\s]*[.]*$/;
      if(pattern.test(todo)){
        this.error = true
        return
      }else{
        this.error = false
      }
      this.$emit('register',todo)
    }
  }
}
</script>

<style scoped>

</style>