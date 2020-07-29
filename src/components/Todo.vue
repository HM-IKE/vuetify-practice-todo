<template>
  <v-container fluid>
    <h2>Todo List</h2>
    <v-btn v-on:click="onReset" dark>Reset</v-btn>
    <Todoform @register="onRegist"/>
    <Todolist :task="task" @did="onDelete"/>
    <ul>
      <li>gender:{{ this.info.gender }}</li>
      <li>name.first:{{ this.info.name.first }}</li>
      <li>name.last:{{ this.info.name.last }}</li>
      <li>email:{{ this.info.email }}</li>
      <li>thumbnail: <img :src="this.info.thumbnail" alt="thumbnail"></li>
    </ul>
    <RouterLink to="/memo">メモに切替</RouterLink>
  </v-container>
</template>

<script>
import Todoform from './Todoform'
import Todolist from './Todolist'

export default {
  name: "Todo",
  components:{
    Todoform,
    Todolist
  },
  data(){
    return{
      "info": {
        "gender": null,
        "name": {
          "first": null,
          "last": null
        },
        "email": null,
        "thumbnail": null
      }
    }
  },
  computed:{
    task(){
      return this.$store.state.task
    }
  },
  mounted(){
  },
  created(){
    this.axios
      .get('https://randomuser.me/api/')
      .then(responce => {
        this.info.gender = responce.data.results[0].gender,
        this.info.name.first = responce.data.results[0].name.first,
        this.info.name.last = responce.data.results[0].name.last,
        this.info.email = responce.data.results[0].email,
        this.info.thumbnail = responce.data.results[0].picture.thumbnail})
      .catch((e)=>{
        alert(e);
      });
  },
  methods:{
    onRegist(todo){
      let addtask = {"id": this.task.length+1, "todo": todo}
      // this.task.push(addtask);
      this.$store.commit("regist", addtask)
    },
    onDelete(todoid){
      let index = this.task.findIndex((v) => v.id === todoid)
      this.task.splice(index, 1);
    },
    onReset(){
      Object.assign(this.$data, this.$options.data.call(this))
    }
  }
}
</script>

<style scoped>

</style>