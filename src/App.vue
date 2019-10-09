<!--
 * @Date: 2019-10-09 11:45:17
 * @LastEditors: Yqoo
 * @LastEditTime: 2019-10-09 16:37:11
 * @Desc: 
 -->
<template>
  <div id="app">
    <Home></Home>
  </div>
</template>

<script>
import Home from './Home.vue'
export default {
  name: 'app',
  components: {
    Home
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
