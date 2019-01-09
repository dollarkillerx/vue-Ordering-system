<template>
    <div>
      <div id="home" class="col-sm-12 text-center">
          <div class="background">
            <h1>欢迎大家品尝pizza！</h1>
            <h2>这里有你非常喜欢的pizza</h2>
            <button @click="goToMenu" class="btn btn-success">Let's order!</button>

          </div>
      </div>
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

<style lang="stylus" scoped>
#home
  background-image:url("../../src/assets/pizza.png")
  height:53vh
  padding: 10%
  .background
    background-color:#eee
    opacity:0.8
    max-width:70vw
    margin:0 auto
    padding:20px 0
    h1,h2
      margin: 6%

</style>
