import Vue from 'vue'
import Vuex from 'vuex'
if(process.env.NODE_ENV === 'development') {
  Vue.use(Vuex)
}
const state = {
  test: 1,
  isLogin: false,
  userData: {}
};
const mutations = {
  changeTest(state) {
    state.test = 2;
  },
  changeLoginState(state,isLogin) {
    state.isLogin = isLogin;
  },
  changeUserData(state,userData) {
    state.userData = userData;
  }
};
export default new Vuex.Store({
  state,
  mutations
})
