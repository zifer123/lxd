<template>
  <footer class="footer-body">
    <div class="gap">
      全面了解蓝筹科技sales@ifitmix.com
    </div>
    <div class="container center">
      <p class="footer-follow">
        <img src="./imgs/weixin.png" alt="">
        <img src="./imgs/weibo.png" alt="">
      </p>

      <p class="footer-language">
        <img src="./imgs/english.png" alt="">English
        |
        <img src="./imgs/china.png" alt="">中文
      </p>

      <p class="footer-support">
        <span>工作机会</span>
        <span>关于我们</span>
        <span>联系我们</span>
        <span>隐私政策</span>
      </p>

      <p class="footer-copyright">
        <span>粤ICP备15030586</span>
        <span>深圳第一蓝筹科技有限公司</span>
        <span>版权所有@2015-2016</span>
      </p>
      <!--<div>-->
        <!--<h2 class="page-header">支持</h2>-->
        <!--<div class="page-body">-->
          <!--<h2><router-link to="/a">工作机会</router-link></h2>-->
          <!--<h2><router-link to="/a">关于我们</router-link></h2>-->
          <!--<h2><router-link to="/a">联系我们</router-link></h2>-->
          <!--<h2><router-link to="/a">隐私政策</router-link></h2>-->
        <!--</div>-->
      <!--</div>-->

      <!--<div>-->
        <!--<h2 class="page-header">语言</h2>-->
        <!--<div class="page-body">-->
          <!--<h2>Englisg</h2>-->
          <!--<h2>Chinese</h2>-->
        <!--</div>-->
      <!--</div>-->

      <!--<div>-->
        <!--<h2 class="page-header">更多</h2>-->
        <!--<div class="page-body">-->
          <!--<h2>全面了解</h2>-->
          <!--<h2>蓝筹科技</h2>-->
          <!--<h2>sales@ifitmix.com</h2>-->
        <!--</div>-->
      <!--</div>-->

      <!--<div>-->
        <!--<h2 class="page-header">关注我们</h2>-->
        <!--<div class="page-body">-->
          <!--<Icon type="ios-home" size="36"></Icon>-->
          <!--<Icon type="ios-home" size="36"></Icon>-->
        <!--</div>-->
      <!--</div>-->

      <!--<div class="page-body">-->
        <!--<h2>-->
          <!--粤ICP备15030586-->
        <!--</h2>-->
        <!--<h2>-->
          <!--深圳第一蓝筹科技有限公司-->
        <!--</h2>-->
        <!--<h2>-->
          <!--版权所有@2015-2016-->
        <!--</h2>-->
      <!--</div>-->
    </div>
  </footer>
</template>

<style scoped>
  .gap {
    padding: 10px;
    text-align: center;
    background-color: #2b2b2b;
  }
  .center {
    text-align: center;
    color: #fff;
    font-size: 16px;
  }
  .center > p {
    margin: 10px 0;
  }
  .footer-follow img {
    width: 35px;
  }
  .footer-language img {
    width: 20px;
    vertical-align: bottom;
  }
  .footer-support span {
    padding: 0 20px;
  }
  .footer-copyright {
    color: #969696;
  }
  @media(max-width: 768px) {
    footer.footer-body .container {
      flex-direction: column;
    }
    .page-body h2 {
      border-bottom: 1px solid #ccc;
    }
  }
  .footer-body {
    background-color: #3d3d3e;
  }
  .page-header {
    padding-bottom: 10px;
  }
  .page-body {
    padding-left: 1px;
  }
  .page-body h2 {
    padding: 5px 0;
    color: #969696;
  }
  a {
    color: #969696;
  }
</style>
