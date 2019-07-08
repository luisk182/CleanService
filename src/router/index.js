import Vue from 'vue'
import Router from 'vue-router'
import mainPage from '@/components/mainPage'
import rootLogin from '@/components/rootLogin'
import producto from '@/components/secciones/producto'
import dashboard from '@/components/dashboard/dashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainPage',
      component: mainPage
    },
    {
      path: '/login',
      name: 'login',
      component: rootLogin
    },
    {
      path: '/producto',
      name: 'producto',
      component: producto
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard
    }
  ]
})
