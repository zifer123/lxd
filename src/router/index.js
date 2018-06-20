import Vue from 'vue'
import Router from 'vue-router'
// Home组件包括头部和底部组件
import Home from '@/components/Home'

if(process.env.NODE_ENV == 'development') {
  Vue.use(Router)
}


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
        },
        {
          path: 'funDetail/:id',
          component: () => import('../components/FunDetail')
        },
        {
          path: 'fitmix',
          component: () => import('../components/Fitmix')
        },
        {
          path: 'map',
          component: () => import('../components/Map')
        },
        {
          path: 'login',
            component: () => import('../components/Login')
        },
        {
          path: 'register',
            component: () => import('../components/Register')
        },
        {
          path: 'my',
            component: () => import('../components/My')
        },
        {
          path: 'forget',
          component: () => import('../components/Forget')
        },
        {
          path: 'joinUs',
          component: () => import('../components/JoinUs')
        },
        {
          path: 'aboutUs',
          component: () => import('../components/AboutUs')
        },
        {
          path: 'contactUs',
          component: () => import('../components/ContactUs')
        },
        {
          path: 'detail',
          component: () => import('../components/Detail')
        },
        {
          path: 'radio',
          component: () => import('../components/Radio')
        }
      ]
    }
  ]
})
