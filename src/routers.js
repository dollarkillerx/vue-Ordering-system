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

export const routes = [
  {path:'/',name:"homeLink",components:{
    default:Home,
      'orderingGuide':OrderingGuide,
      'delivery':Delivery,
      'history':History
    }},
  {path:'/menu',name:'menuLink',component:Menu},
  {path:'/admin',component:Admin,
    // beforeEnter:(to,from,next)=>{
    // alert('非登录状态不能访问此页面');
    // }
  },
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
