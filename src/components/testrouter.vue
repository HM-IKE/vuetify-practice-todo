<template>
  <v-container fluid>
    <h2>Memo</h2>
    <v-btn @click="onReset">Reset</v-btn>
    <Memoform @register="onRegist"/>
    <Memolist :note="note" />
    <RouterLink to="/">戻る</RouterLink>
  </v-container>
</template>
<script>
import Memoform from './Memoform'
import Memolist from './Memolist'

export default {
  name:"testRouter",
  components:{
    Memoform,
    Memolist
  },
  data(){
    return{
      "note": [
        "this is My cola!!",
        "Oh no! I like it!!"
      ]
    }
  },
  methods:{
    onRegist(memo){
      this.note.push(memo)
    },
    onReset(){
      Object.assign(this.$data, this.$options.data.call(this))
    }
  }
}
</script>

<style scoped>

</style>