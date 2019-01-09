import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import About from './components/about/About'
import Login from './components/Login'
import Register from './components/Register'
//多级路由

//二级路由
import Contact from './components/about/Contact'
import Delivery from './components/about/Delivery'
import OrderingGuide from './components/about/OrderingGuide'
import History from './components/about/History'

//三级路由
import PersonName from './components/about/Contact/PersonName'
import Phone from './components/about/Contact/Phone'

Vue.use(VueRouter);

const routes = [
  {path:'/',name:"homeLink",component:Home},
  {path:'/menu',name:'menuLink',component:Menu},
  {path:'/admin',component:Admin},
  {path:'/about',component:About,redirect: '/about/contact',children:[
      {path:'/about/contact',name:'contactLink',component:Contact,redirect:'/about/contact/phonename',children:[
          {path:'/about/contact/phonename',name:'phoneName',component:PersonName},
          {path:'/about/contact/personname',name:'personName',component:Phone}
        ]},
      {path:'/about/delivery',name:'deliveryLink',component:Delivery},
      {path:'/about/orderingGuide',name:'orderingGuideLink',component:OrderingGuide},
      {path:'/about/history',name:'historyLink',component:History}
    ]},
  {path:'/login',component:Login},
  {path:'/register',component:Register},
  {path:'*',redirect:'/'},
]

const router = new VueRouter({
  routes,
  mode:'history'
})

//全局守卫
//to 进入那个
//from从那个离开
//next去那个页面
router.beforeEach((to,from,next)=>{
  // alert("还没有登录请先登录");
  // next();
  // console.log(to);

  //判断store.gettes.isLogin == false
  // if (to.path)
  if (to.path == '/login' || to.path =='/register'){
    next();
  }else{
    alert("还没有登录请先登录");
    next('/login');
  }
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
