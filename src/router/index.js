import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/common/Home'
import HelloWorld from '@/components/pages/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [{
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
      }]
    }
  ]
})
