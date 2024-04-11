<template>
  <div id="app">
    <QlNavbar />
    <router-view></router-view>
  </div>
</template>

<script>
import QlNavbar from './views/QlNavbar.vue';
export default {
  name: 'App',
  components: {
    QlNavbar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>

