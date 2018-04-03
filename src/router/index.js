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
      children: [
        {
          path: 'product',
          component: () => import('../components/Product')
        }
      ]
    }
  ]
})
