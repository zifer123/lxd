<template>
  <nav class="navbar">
    <div class="container flex-box justcontent-between">
      <div class="flex-box align-items-center">
        <img class="logo nav-item" src="./imgs/logo-fitmix.png" @click="$router.push('/product')" alt="">
        <router-link :class="{active: activeNav=='/product'}" class="nav-item" to="/product">{{ $t('header.product') }}</router-link>
        <!--<router-link :class="{active: activeNav=='/taste'}" class="nav-item" to="/taste">{{ $t('header.experience') }}</router-link>-->
        <router-link :class="{active: activeNav=='/fun'}" class="nav-item" to="/fun">{{ $t('header.funs') }}</router-link>
        <router-link :class="{active: activeNav=='/fitmix'}" class="nav-item" to="/fitmix">{{ $t('header.app') }}</router-link>
        <router-link :class="{active: activeNav=='/map'}" class="nav-item" to="/map">{{ $t('header.map') }}</router-link>
      </div>

      <div class="flex-box">
        <a href="https://geekery.tmall.com/" class="nav-item">{{ $t('header.mall') }}</a>
        <router-link :class="{active: activeNav=='/radio'}" class="nav-item" to="/radio">{{ $t('header.radio') }}</router-link>
        <router-link v-if="!isLogin" :class="{active: activeNav=='/login'||activeNav=='/register'}" class="nav-item" to="/login">{{ $t('header.login') }}</router-link>
        <span v-else class="nav-item dropdown-box" @click="showMenu">
          <img class="headimg" :src="avatar" alt="">
          <Icon type="chevron-up"></Icon>
          <div class="dropdown-menu" :class="{'active': isShow}">
            <p @click="$router.push('/my')" class="item" :class="{active: activeNav=='/my'}">
              我的主页
            </p>
            <p class="item" @click="logout">退出</p>
          </div>
        </span>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    data() {
      return {
        activeNav: '',
        isShow: false
      }
    },
    methods: {
      showMenu() {
        this.isShow = !this.isShow;
      },
      logout() {
        localStorage.removeItem('userName');
        localStorage.removeItem('password');
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('openid');
        this.$store.commit('changeLoginState',false);
        location = '/';
      }
    },
    watch: {
      $route(to,from) {
        this.activeNav = to.fullPath;
      }
    },
    computed: {
      isLogin() {
        return this.$store.state.isLogin
      },
      avatar() {
        return this.$store.state.userData.user && this.$store.state.userData.user.avatar ? this.$store.state.userData.user.avatar : '/static/imgs/default/default.jpg'
      }
    },
    mounted() {
      this.activeNav = this.$route.fullPath;
    }
  }
</script>

<style scoped>
  @media(max-width: 768px) {
    nav.navbar {
      opacity: 0;
      height: 0;
    }
    nav.navbar > div {
      display: none;
    }
  }
  .navbar {
    font-family: "微软雅黑";
    font-size: 15px;
    position: fixed;
    width: 100%;
    z-index: 1;
    height: 50px;
    line-height: 50px;
    background-color: #3d3d3e;
    transition: opacity .5s linear,height .5s linear;
  }
  .justcontent-between {
    justify-content: space-between;
  }
  .logo {
    width: 130px;
    height: 15px;
  }
  .nav-item {
    color: #fff;
    padding: 0 15px;
  }
  .nav-item.active {
    color: rgb(12, 180, 232);
  }
  .dropdown-box {
    position: relative;
  }
  .dropdown-menu {
    position: absolute;
    width: 100px;
    border-radius: 4px;
    left: -15px;
    text-align: center;
    background-color: rgba(0,0,0,0.7);
    visibility: hidden;
    opacity: 0;
    transition: all .5s linear;
  }
  .dropdown-menu.active {
    opacity: 1;
    visibility: visible;
  }
  .dropdown-menu .item:first-child {
    border-bottom: 1px solid #ccc;
  }
  .dropdown-menu .item.active {
    color: deepskyblue;
  }
  /* 头像 */
  .headimg {
    width: 30px;
    height: 30px;
    vertical-align: middle;
    border-radius: 50%;
  }
</style>
