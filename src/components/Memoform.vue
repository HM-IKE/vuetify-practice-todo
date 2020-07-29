<template>
  <v-form ref="form">
    <v-text-field label="Memo" required id="memo"></v-text-field>
    <p v-if="error">内容を入力してください。</p>
    <v-btn v-on:click="memoSubmit">Memo</v-btn>
  </v-form>
</template>

<script>
export default {
  name: "Memoform",
  data(){
    return {
      "error": false
    }
  },
  methods:{
    memoSubmit(e){
      e.preventDefault();
      let memo = document.getElementById("memo").value
      let pattern = /^[¥s]*[.]*$/
      if(pattern.test(memo)){
        this.error = true
        return
      }else{
        this.error = false
      }
      this.$emit('register', memo)
    }
  }
}
</script>

<style scoped>

</style>