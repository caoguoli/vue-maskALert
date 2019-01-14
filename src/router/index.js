import Vue from 'vue'
import Router from 'vue-router'
import Start from '@/components/start/Start'
import Public from '@/components/public/Public'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'start',
      component: Start
    },
    {
      path: '/public',
      name: 'Public',
      component: Public
    }
  ]
})
