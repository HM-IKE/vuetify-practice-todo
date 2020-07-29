<template>
  <header>
    <v-navigation-drawer app v-model="drawer" clipped>
      <v-container>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">Practice Vue.js</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list dense nav>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>icon</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title><router-link to="/">Todo</router-link></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>icon</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-content>
                <v-list-item-title><router-link to="/memo">memo</router-link></v-list-item-title>
              </v-list-item-content>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-container>
    </v-navigation-drawer>
    <v-app-bar dark app clipped-left>
      <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
      <h1>Myheader</h1>
      <v-spacer></v-spacer>
        <v-btn>Button</v-btn>
        <v-btn text>Button</v-btn>
        <v-btn outlined>Button</v-btn>
      <v-toolbar-items>
        <v-btn>Button</v-btn>
        <v-btn text>Button</v-btn>
        <v-menu offset-y>
          <template v-slot:activator="{on}">
            <v-btn v-on="on" outlined>Button</v-btn>
          </template>
          <v-list>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Here is</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Drop btn</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>This btn click! But No action!</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar-items>
    </v-app-bar>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data(){
    return {
      drawer: null
    }
  },
  methods:{
    onReset(){
      this.$emit("reset")
    }
  }
}
</script>

<style scoped>

</style>