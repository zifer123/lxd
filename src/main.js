// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import iView from 'iview'
if(process.env.NODE_ENV == 'development') {
  require('iview/dist/styles/iview.css')
}
import Axios from 'axios'
import qs from 'qs'
import VueI18n from 'vue-i18n'
import en from 'iview/dist/locale/en-US';
import zh from 'iview/dist/locale/zh-CN';
import customEn from './language/en'
import customZh from './language/zh'
import store from './store'
import App from './App'

Vue.use(VueI18n)
if(process.env.NODE_ENV == 'development') {
  Vue.use(iView)
}
Vue.config.productionTip = false
Axios.defaults.withCredentials = true;
var instance = Axios.create({
  timeout: 30000,
  // 只对put,post,patch有效，get的话没用，所以要判断data是否有数据
  transformRequest: [function (data) {
    return qs.stringify(data?data:{});
  }],
  headers: {'Content-Type': 'application/x-www-form-urlencoded'}
});
//instance.interceptors.request.use(function (config) {
//  //iView.Spin.show();
//  return config;
//}, function (error) {
//  return Promise.reject(error);
//});
instance.interceptors.response.use(function (response) {
  //iView.Spin.hide();
  return response;
}, function (error) {
  return Promise.reject(error);
});
Vue.prototype.$http = instance
Vue.locale = () => {}

// 合并iview的语言包
const messages = {
  en: Object.assign(customEn, en),
  zh: Object.assign(customZh, zh)
};

function wxLogin(token,openid) {
  instance.get('/api/wxLogin', {
    params: {
      token: token,
      openid: openid
    }
  }).then((body) => {
    if (!body.data.code) {
      // 微信登录成功之后sessionStorage存储token和openid
      sessionStorage.setItem('token',token);
      sessionStorage.setItem('openid',openid);
      store.commit('changeLoginState', true);
      store.commit('changeUserData',body.data);
      /* eslint-disable no-new */
      window.vm = new Vue({
        el: '#app',
        i18n,
        router,
        store,
        components: { App },
        template: '<App/>'
      })
      router.push('/product');
    }
  });
}

function phone_email_login() {
  instance.get('/api/login', {
    params: {
      email: localStorage.getItem('userName'),
      password: localStorage.getItem('password'),
      _v: 0
    }
  }).then(function (body) {
    if (!body.data.code) {
      store.commit('changeLoginState', true);
      store.commit('changeUserData',body.data);
      /* eslint-disable no-new */
      window.vm = new Vue({
        el: '#app',
        i18n,
        router,
        store,
        components: { App },
        template: '<App/>'
      })
    }
  });
}

Date.prototype.Format = function (fmt) { //author: meizz
  var o = {
    "M+": this.getMonth() + 1, //月份
    "d+": this.getDate(), //日
    "h+": this.getHours(), //小时
    "m+": this.getMinutes(), //分
    "s+": this.getSeconds(), //秒
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
    "S": this.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}


let i18n;
var locale = localStorage.getItem('locale');
i18n = new VueI18n({
  locale: locale?locale:'zh', // set locale
  messages
});


// 微信登录，判断url上或者sessionStorage
let search = location.search.substr(1).split('&');
let token = search[0] && search[0].split('=')[0] == 'token' ? search[0].split('=')[1]:'';
let openid = search[1] && search[1].split('=')[0] == 'openid' ? search[1].split('=')[1]:'';
if(token && openid) {
  wxLogin(token,openid);
}else if(sessionStorage.getItem('token')) {
  wxLogin(token,openid);
}else if(localStorage.getItem('userName')) {
  // 手机号码邮箱登陆
  phone_email_login();
}else {
  window.vm = new Vue({
    el: '#app',
    i18n,
    router,
    store,
    components: { App },
    template: '<App/>'
  })
}


