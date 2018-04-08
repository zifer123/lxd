<template>
  <nav class="flex-box justify-content-space-between  mini-header align-items-center">
    <img class="logo" src="./imgs/logo-fitmix.png" alt="">
    <Icon :type="icon" color="#fff" size="36" style="margin-right: 5px;" @click.native="menuClick"></Icon>
    <div class="mini-menu" :class="{'active': isMenuShow}" id="miniMenu">
      <h1 @click="routeTo('/product')" :class="{'active': activeNav=='/product'}">产品</h1>
      <h1 @click="routeTo('/taste')" :class="{'active': activeNav=='/taste'}">体验</h1>
      <h1 @click="routeTo('/fun')" :class="{'active': activeNav=='/fun'}">趣事</h1>
      <h1 @click="routeTo('/app')" :class="{'active': activeNav=='/app'}">APP</h1>
      <h1 @click="routeTo('/map')" :class="{'active': activeNav=='/map'}">地图</h1>
      <h1 @click="routeTo('/f')" :class="{'active': $route.fullPage=='/product'}">商城</h1>
      <h1 @click="routeTo('/e')" :class="{'active': $route.fullPage=='/product'}">电台</h1>
    </div>
  </nav>
</template>

<script>

  export default {
    data() {
      return {
        icon: 'navicon-round',
        isMenuShow: false,
        activeNav: ''
      }
    },
    methods: {
      menuClick() {
        this.isMenuShow = !this.isMenuShow;
        this.icon = this.isMenuShow?'close-round':'navicon-round';
      },
      routeTo(to) {
        this.isMenuShow = false;
        this.icon = 'navicon-round';
        this.$router.push(to);
      }
    },
    watch: {
      $route(to,from) {
        this.activeNav = to.fullPath;
      }
    },
    mounted() {
      var miniMenu = document.getElementById('miniMenu');
      miniMenu.ontouchmove = function(e) {
        e.preventDefault();
      }

      this.activeNav = this.$route.fullPath;
    }
  }
</script>

<style>
  @media(max-width: 768px) {
    nav.mini-header {
      opacity: 1;
      height: 50px;
    }
  }
  .active {
    background: #3d3d3e;
    color: skyblue;
  }
  .mini-header {
    position: fixed;
    width: 100%;
    z-index: 2;
    height: 0;
    opacity: 0;
    background-color: #3d3d3e;
    transition: opacity .5s linear,height .5s linear;
  }
  .mini-menu {
    position: absolute;
    text-align: center;
    width: 100%;
    z-index: 2;
    background: #000;
    top: 50px;
    left: -100%;
    height: 0;
    opacity: 0;
    transition:all .5s linear;
    /*transition: height .5s linear,opacity .5s linear;*/
  }
  .mini-menu h1 {
    margin: 25px 0;
    color: #fff;
    border-bottom: 1px solid #ccc;
  }
  .mini-menu.active {
    height: 1000px;
    opacity: 1;
    left: 0;
    display: block;
  }
  .logo {
    width: 130px;
    height: 15px;
  }
</style>
