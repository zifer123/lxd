// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import Axios from 'axios'
import VueI18n from 'vue-i18n'
import en from 'iview/dist/locale/en-US';
import zh from 'iview/dist/locale/zh-CN';
import customEn from './language/en'
import customZh from './language/zh'
import App from './App'

Vue.use(VueI18n)
Vue.use(iView)
Vue.config.productionTip = false
Vue.prototype.$http = Axios
Vue.locale = () => {}



// 合并iview的语言包
const messages = {
  en: Object.assign(customEn, en),
  zh: Object.assign(customZh, zh)
};
let i18n;
fetch('http://111.230.172.203/api/language',{
  method: 'GET'
}).then(response => response.json()).then(data => {
  var locale = data.locale;
  i18n = new VueI18n({
    locale, // set locale
    messages
  });

  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    i18n,
    router,
    components: { App },
    template: '<App/>'
  })
});


