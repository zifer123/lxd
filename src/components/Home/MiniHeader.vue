<template>
  <nav class="flex-box justify-content-space-between  mini-header align-items-center">
    <img class="logo" src="./imgs/logo-fitmix.png" alt="">
    <Icon :type="icon" color="#fff" size="36" style="margin-right: 5px;" @click.native="menuClick"></Icon>
    <div class="mini-menu" :class="{'active': isMenuShow}" id="miniMenu">
      <h1 @click="routeTo('/product')">产品</h1>
      <h1 @click="routeTo('/taste')">体验</h1>
      <h1 @click="routeTo('/c')">趣事</h1>
      <h1 @click="routeTo('/d')">APP</h1>
      <h1 @click="routeTo('/e')">地图</h1>
      <h1 @click="routeTo('/f')">商城</h1>
      <h1 @click="routeTo('/e')">电台</h1>
    </div>
  </nav>
</template>

<script>

  export default {
    data() {
      return {
        icon: 'navicon-round',
        isMenuShow: false
      }
    },
    methods: {
      menuClick() {
        this.isMenuShow = !this.isMenuShow;
        this.icon = this.isMenuShow?'close-round':'navicon-round';
      },
      routeTo(to) {
        this.isMenuShow = false;
        this.$router.push(to);
      }
    },
    mounted() {
      var miniMenu = document.getElementById('miniMenu');
      miniMenu.ontouchmove = function(e) {
        e.preventDefault();
      }
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
  .mini-header {
    height: 0;
    opacity: 0;
    background-color: #3d3d3e;
    transition: opacity .5s linear,height .5s linear;
  }
  .mini-menu {
    position: absolute;
    text-align: center;
    width: 100%;
    z-index: 1;
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
    height: 95%;
    opacity: 1;
    left: 0;
    display: block;
  }
  .logo {
    width: 130px;
    height: 15px;
  }
</style>
