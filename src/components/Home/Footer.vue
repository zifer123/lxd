<template>
  <footer class="footer-body">
    <div class="gap">
      全面了解蓝筹科技sales@ifitmix.com
    </div>
    <div class="container center">
      <p class="footer-follow">
        <router-link to="/product"><img src="./imgs/weixin.png" alt=""></router-link>
        <a href="http://www.weibo.com/igeekery?from=myfollow_all&is_host=1"><img src="./imgs/weibo.png" alt=""></a>
      </p>

      <p class="footer-language">
        <span style="cursor: pointer;" @click="changeLanguage('en')"><img src="./imgs/english.png" alt="">English</span>
        |
        <span style="cursor: pointer;" @click="changeLanguage('zh')"><img src="./imgs/china.png" alt="">中文</span>
      </p>

      <p class="footer-support">
        <span @click="$router.push('/joinUs')">{{ $t("footer.job") }}</span>
        <span @click="$router.push('/aboutUs')">{{ $t("footer.aboutUs") }}</span>
        <span @click="$router.push('/contactUs')">{{ $t("footer.contactUs") }}</span>
        <span>{{ $t("footer.privacyPolicy") }}</span>
      </p>

      <p class="footer-copyright">
        <span>{{ $t("footer.bei") }}</span>
        <span>{{ $t("footer.company") }}</span>
        <span>{{ $t("footer.copyright") }}</span>
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

<script>
  export default {
    methods: {
      changeLanguage(language) {
        localStorage.locale = language;
        location.reload();
      }
    }
  }
</script>

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
  .footer-support {
    color: #969696;
    font-size: 15px;
    font-family: "微软雅黑";
  }
  .footer-support span {
    padding: 0 20px;
    cursor: pointer;
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
