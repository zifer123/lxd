import Vue from 'vue'
import Router from 'vue-router'
// Home组件包括头部和底部组件
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      redirect: '/product',
      children: [
        {
          path: 'product',
          component: () => {
            return import('../components/Product')
          }
        },
        {
          path: 'taste',
          component: () => import('../components/Taste')
        },
        {
          path: 'fun',
          component: () => import('../components/Fun')
        }
      ]
    }
  ]
})
