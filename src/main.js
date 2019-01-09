import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from './routers'

Vue.use(VueRouter);



const router = new VueRouter({
  routes,
  mode:'history'
})

//全局守卫
//to 进入那个
//from从那个离开
//next去那个页面
// router.beforeEach((to,from,next)=>{
//   // alert("还没有登录请先登录");
//   // next();
//   // console.log(to);
//
//   //判断store.gettes.isLogin == false
//   // if (to.path)
//   if (to.path == '/login' || to.path =='/register'){
//     next();
//   }else{
//     alert("还没有登录请先登录");
//     next('/login');
//   }
// })

//后置钩子
// router.afterEach((to,from)=>{//to去的  from离开的
//   alert('afterEach');
// })


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
