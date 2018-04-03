// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import Axios from 'axios'
import locale from 'iview/dist/locale/en-US';


import App from './App'

Vue.use(iView, { locale })
Vue.config.productionTip = false
Vue.prototype.$http = Axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
