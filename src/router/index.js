import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/login'
import Reg from '@/components/register'
import Index from '@/components/index'
import Main from '@/components/main'
import Bank from '@/components/bank'
import Cash from '@/components/Cash'
import Mymoney from '@/components/mymoney'
import ActivePage from '@/components/activePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      redirect:"/main",
      component: Main
    },
    {
      path: '/login',
    
      component: Login
    },
    {
      path: '/register',
   
      component: Reg
    },
    {
      path: '/main',
     
      component: Main,
      redirect:"/index",
      children:[{
         
          path: '/index',
         
          component: Index
        
      },
      {
       path: '/bank',
       component: Bank
      
    },
    {
      path:"/activePage",
      component:ActivePage
    }
    ]
    },
    {
      path:"/cash",
      component:Cash
    },
    {
      path:"/mymoney",
      component:Mymoney
    },
    
   
  ]
})
