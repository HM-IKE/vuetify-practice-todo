<template>
  <v-container>
    <v-list subheader>
      <v-subheader>Memo List</v-subheader>
      <v-list-item v-for="memo in note" :key="memo">
        <v-list-item-content>
          <v-list-item-title>{{memo}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script>
export default {
  name: "Memolist",
  props:{
    "note": Array,
  }
}
</script>

<style scoped>

</style>