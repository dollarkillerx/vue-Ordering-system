<template>
    <div>
      <h1>home</h1>
      <button @click="goToMenu" class="btn btn-success">Let's order!</button>
    </div>
</template>

<script>
    export default {
        name: "Home",
      methods:{
          goToMenu(){
            //跳转到上一次浏览的页面
            // this.$router.go(-1)
            // this.$router.replace('/menu')
            // this.$router.replace({name:'menuLink'})
            //   this.$router.push('/menu')
            this.$router.push({name:'menuLink'})
          }
      }
    }
</script>

<style scoped>

</style>
