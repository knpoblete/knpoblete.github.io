<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <HomePage msg="Welcome to my portfolio!"/>
  <NavBar />
</template>

<script>
import HomePage from './components/HomePage.vue'
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    HomePage,
    NavBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #3F4739;
  margin-top: 60px;
}
</style>
