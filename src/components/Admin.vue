<template>
    <h1>admin</h1>
</template>

<script>
    export default {
        name: "Admin",
        data(){
          return {
            name:'Admin'
          }
        },
      //进入主键之前
      beforeRouteEnter:(to,from,next)=>{
        // alert('Hello'+this.name);
        next(vm => {
          alert('Hello'+vm.name);//异步
        })
      }
    }
</script>

<style scoped>

</style>
