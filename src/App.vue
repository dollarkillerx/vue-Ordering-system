<template>
  <div id="app">
    <div class="container">
      <app-header></app-header>
    </div>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import  AppHeader from './components/Header';
export default {
  name: 'app',
  components:{
    AppHeader
  }
}
</script>

<style>

</style>
