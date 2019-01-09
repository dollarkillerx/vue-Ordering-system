<template>
    <div class="card text-dark bg-light mb-3">
      <div class="card-header">联系我们</div>
      <div class="card-body">
        <h4 class="card-title">联系我们</h4>
        <p>dollarkiller@dollarkiller.com</p>
        <router-link :to="{name:'phoneName'}" tag="button" class="btn btn-default">电话</router-link>
        <router-link :to="{name:'personName'}" tag="button" class="btn btn-default">联系人</router-link>
        <router-view/>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Contact"
    }
</script>

<style scoped>

</style>
