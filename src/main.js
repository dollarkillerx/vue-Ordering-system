import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import About from './components/about/About'
import Login from './components/Login'
import Register from './components/Register'

//二级路由
import Contact from './components/about/Contact'
import Delivery from './components/about/Delivery'
import OrderingGuide from './components/about/OrderingGuide'
import History from './components/about/History'

Vue.use(VueRouter);

const routes = [
  {path:'/',name:"homeLink",component:Home},
  {path:'/menu',name:'menuLink',component:Menu},
  {path:'/admin',component:Admin},
  {path:'/about',component:About,children:[
      {path:'/about/contact',name:'contactLink',component:Contact},
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

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
