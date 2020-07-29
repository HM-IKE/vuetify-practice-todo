<template>
  <v-app>
    <Header />
    <v-main>
      <router-view></Router-view>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Header from './components/Header';
import Footer from './components/footer';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  data(){
    return{
    }
  },
  methods:{
  }
};
</script>
