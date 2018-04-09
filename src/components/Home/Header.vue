<template>
  <nav class="navbar">
    <div class="container flex-box justcontent-between">
      <div class="flex-box align-items-center">
        <img class="logo nav-item" src="./imgs/logo-fitmix.png" alt="">
        <router-link :class="{active: activeNav=='/product'}" class="nav-item" to="/product">产品</router-link>
        <router-link :class="{active: activeNav=='/taste'}" class="nav-item" to="/taste">体验</router-link>
        <router-link :class="{active: activeNav=='/fun'}" class="nav-item" to="/fun">趣事</router-link>
        <router-link :class="{active: activeNav=='/fitmix'}" class="nav-item" to="/fitmix">APP</router-link>
        <router-link :class="{active: activeNav=='/map'}" class="nav-item" to="/map">地图</router-link>
      </div>

      <div class="flex-box">
        <a href="http://www.baidu.com" class="nav-item" to="/product">商城</a>
        <router-link :class="{active: activeNav=='/radio'}" class="nav-item" to="/radio">电台</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    data() {
      return {
        activeNav: ''
      }
    },
    watch: {
      $route(to,from) {
        this.activeNav = to.fullPath;
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
</style>
