import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/login'
import Reg from '@/components/register'
import Index from '@/components/index'

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
      path: '/index',
     
      component: Index
    }
  ]
})
