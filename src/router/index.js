import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/login'
import Reg from '@/components/register'
import Index from '@/components/index'
import Main from '@/components/main'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Index
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
        
      }]
    }
   
  ]
})
