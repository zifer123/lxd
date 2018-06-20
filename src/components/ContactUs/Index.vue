<template>
  <div class="box">
    <div class="head"></div>
    <div class="body">
      <div class="contact-box">
        <div class="contact-content">
          <p>公司电话: 0755-26651083 </p>
          <p>公司地址: 深圳市南山区西丽街道朗山路28号通产集团3栋1楼</p>
        </div>
      </div>
      <div class="contact-box app">
        <div class="contact-content">
          <p>APP商务合作&nbsp;&nbsp;&nbsp;&nbsp;零售与分销</p>
          <p>QQ:1983309920 &nbsp;&nbsp; sales@ifitmix.com</p>
        </div>
      </div>
      <div class="contact-box weibo">
        <div class="contact-content">
          <p>新浪微博</p>
          <p>@乐享动 <br />
            @弄客GEEKERY &nbsp;&nbsp;&nbsp;&nbsp; @乐享动电台 fitmixradio</p>
        </div>
      </div>
      <div class="contact-box weChat">
        <div class="contact-content">
          <p>微信帐号</p>
          <p>乐享动/FitmixApp</p>
        </div>
      </div>
      <div class="contact-box brand">
        <div class="contact-content">
          <p>品牌/公关/媒体</p>
          <p>market@ifitmix.com</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .box {
    /*display: flex;*/
    /*flex-direction: column;*/
  }
  .head {
    height: 700px;
    background-image: url(./imgs/home_back@2.jpg);
    background-size: cover;
    background-position: center;
  }
  .body {
    height: 700px;
    background-image: url(./imgs/us_back@2.jpg);
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .contact-box {
    background-image: url(./imgs/logo_longke@2.png);
    background-size: cover;
    height: 101.469px;
    width: 600px;
    position: relative;
    display: flex;
    align-items: center;
    color: #fff;
  }
  .contact-box.app {
    background-image: url(./imgs/logo_fitmix@2.png);
  }
  .contact-box.weibo {
    background-image: url(./imgs/logo_weibo@2.png);
  }
  .contact-box.weChat {
    background-image: url(./imgs/logo_wechat@2.png);
  }
  .contact-box .contact-content {
    position: absolute;
    left: 120px;
    font-size: 18px;
  }
</style>
