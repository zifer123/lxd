<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide>
        <div class="section first">
          <img class="my-logo my-animated" src="./imgs/logo-fitmix.png" alt="">
          <img class="my-logo my-animated" src="./imgs/logo_font.png" alt="">
          <p class="text my-animated">如果说穿一双跑鞋，就能随时上路那么，听着音乐开跑就是更好的开始</p>
          <p class="text my-animated">
            乐享动在路上给你的陪伴</p>
          <p class="text my-animated">
            让每一公里都不寂寞，每一次尝试都有新的可能</p>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="section second">
          <h3 class="title my-animated">享受音乐 享受运动</h3>
          <img class="my-logo my-animated" src="./imgs/fimtix-china.png" alt="">
          <p class="text my-animated">不正确的运动方式常常让我们白费力气</p>
          <p class="text my-animated">乐享动提供的音乐激励、运动节拍器让运动节奏达到最佳</p>
          <p class="text my-animated">而步数以及运动轨迹则可以成为你炫耀成果的资本，科学化的数据</p>
          <p class="text my-animated">分析让运动成就更美好的你。</p>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="section third">
          <h3 class="title my-animated">一起玩</h3>
          <img class="my-logo my-animated" src="./imgs/fimtix-china.png" alt="">
          <div class="flex-box my-animated">
            <div class="img-wrapper">
              <div class="bg" @mouseenter="changeBg(1,$event)">
                <img src="./imgs/rousing@logo.png" alt="">
              </div>
              <p class="title">激励</p>
            </div>

            <div class="img-wrapper">
              <div class="bg" @mouseenter="changeBg(2,$event)">
                <img src="./imgs/synchronize@logo.png" alt="">
              </div>
              <p class="title">同步</p>
            </div>

            <div class="img-wrapper">
              <div class="bg" @mouseenter="changeBg(3,$event)">
                <img src="./imgs/charts@logo.png" alt="">
              </div>
              <p class="title">分析</p>
            </div>

            <div class="img-wrapper">
              <div class="bg" @mouseenter="changeBg(4,$event)">
                <img src="./imgs/share@logo.png" alt="">
              </div>
              <p class="title">共享</p>
            </div>

            <div class="img-wrapper">
              <div class="bg" @mouseenter="changeBg(5,$event)">
                <img src="./imgs/radio@logo.png" alt="">
              </div>
              <p class="title">更多</p>
            </div>
          </div>
          <p class="text my-animated">变频音乐、节拍器、以及语音</p>
          <p class="text my-animated">教练, 护航你的运动体验。</p>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="section fouth">
          <div class="product-box">
            <div class="left my-animated" style="transition-delay: .3s;">
              <img src="./imgs/feiji@logo.png" alt="">
              <img class="left-middle" src="./imgs/bolt1@logo.png" alt="">
              <img src="./imgs/meidui@logo.png" alt="">
            </div>
            <div class="main my-animated" style="transition-delay: 0s;">
              <img src="./imgs/charts_iphone@logo.png" alt="">
            </div>
            <div class="right my-animated" style="transition-delay: 0.3s;">
              <img src="./imgs/g-light@logo.png" alt="">
              <img class="right-middle" src="./imgs/air@logo.png" alt="">
              <img src="./imgs/shine@logo.png" alt="">
            </div>
          </div>
          <h3 class="title my-animated">为什么</h3>
          <p class="text my-animated">为了达到更好的运动效果，乐享动提供运动软件与智能硬件</p>
          <p class="text my-animated">搭配的生态系统，舒适的无线运动耳机搭配功能强大的APP，一个硬件满足多种需求。</p>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="section fiveth">
          <h3 class="title my-animated">享受音乐 享受运动</h3>
          <p class="text my-animated">作为第一家推出音乐激励方案的运动软件和泛娱乐运动平台的先行者</p>
          <p class="text my-animated">我们始终致力于“运动＋音乐”智能生态产业链的构建，虽已经得到了不同行业的认可</p>
          <p class="text my-animated">但我们一直在找寻基于未来科技的娱乐化运动体验。</p>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="section sixth">
          <div class="flex-box justify-content-space-between my-animated">
            <img src="./imgs/fitmix_1.png" alt="">
            <img src="./imgs/fitmix_2.png" alt="">
            <img src="./imgs/fitmix_3.png" alt="">
          </div>
          <h3 class="title my-animated">在运动与音乐的路上，有朋友相伴</h3>
          <p class="text my-animated" style="text-align: center">
            乐享动适配于Android和iOS系统<br>
            您可以在线直播运动的快乐、电台里偶遇让耳朵怀孕的音乐<br>
            在跑团里寻找同一条路上的另一个你
          </p>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="section seventh">
          <h3 class="title my-animated">鼓励&意见要开诚布公</h3>
          <h3 class="title my-animated">隐私&数据会守口如瓶</h3>
          <p class="text my-animated">您的运动情况只属于您自己，您可以在想和大家</p>
          <p class="text my-animated">分享的时候随意选择分享内容。但是，我们从不会泄露您的个人信息，在隐私方面我们绝对保密。</p>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="section eighth">
          <h3 class="title my-animated">购买GEEKERY</h3>
          <p class="text my-animated">无论您在这里找什么，总有一款适合您的geekery产品</p>
          <router-link class="more my-animated" to="/a">了解更多</router-link>
          <div class="flex-box my-animated">
            <img src="./imgs/product_b1@logo.png" alt="">
            <img src="./imgs/product_black@logo.png" alt="">
            <img src="./imgs/product_bulb@logo.png" alt="">
            <img src="./imgs/product_captain@log.png" alt="">
            <img src="./imgs/product_plane@logo.png" alt="">
            <img src="./imgs/product_shine@log.png" alt="">
            <img src="./imgs/product_xx@logo.png" alt="">
          </div>
        </div>
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import Png1 from './imgs/rousing_warp@2.jpg'
  import Png2 from './imgs/synchronize_warp@2.jpg'
  import Png3 from './imgs/charts_warp@2.jpg'
  import Png4 from './imgs/share_warp@2.jpg'
  import Png5 from './imgs/radio_warp@2.jpg'
  export default {
    data() {
//      var that = this;
      return {
        thatDiv: '',
        swiperOption: {
//          direction: 'vertical',
          slidesPerView: 1,
          spaceBetween: 30,
          mousewheel: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          on: {
            init: function(){
              //Swiper初始化了
              console.log('当前的slide序号是'+this.activeIndex);
              this.thatDiv = document.querySelectorAll('.section')[this.activeIndex];
              document.querySelectorAll('.section')[this.activeIndex].classList.add('current');
            },
            slideChangeTransitionEnd: function(i) {
              if(this.thatDiv) {
                this.thatDiv.classList.remove('current');
              }
              var activeDiv = document.querySelectorAll('.section')[this.activeIndex];
              activeDiv.classList.add('current');
              this.thatDiv = activeDiv;
            }
          }
        }
      }
    },
    methods: {
      changeBg(which,e) {
        var activeBg = '';
        var text1 = '';
        var text2 = '';
        if(this.thatActive) {
          this.thatActive.classList.remove('active')
        }
        this.thatActive = e.target;
        switch (which) {
          case 1:
            activeBg = Png1;
            text1 = '变频音乐、节拍器、以及语音';
            text2 = '教练, 护航你的运动体验。';
            break;
          case 2:
            activeBg = Png2;
            text1 = '弄客智能设备通过蓝牙';
            text2 = '无线自动同步所有运动数据。';
            break;
          case 3:
            activeBg = Png3;
            text1 = '实时记录运动轨迹、时间、卡路里';
            text2 = '配速等数据，独家算法，更科学掌握运动节奏';
            break;
          case 4:
            activeBg = Png4;
            text1 = '运动在线直播、自建俱乐部';
            text2 = '在跑团里寻找同一条路上的另一个你';
            break;
          case 5:
            activeBg = Png5;
            text1 = '在乐享动电台里';
            text2 = '偶遇大咖与让耳朵怀孕的音乐';
            break;
        }
        document.querySelector('.third').style.backgroundImage = `url(${activeBg})`;
        document.querySelectorAll('.third .text')[0].innerText = text1;
        document.querySelectorAll('.third .text')[1].innerText = text2;
        e.target.classList.add('active')
      }
    },
    components: {
      swiper,
      swiperSlide
    }
  }
</script>

<style scoped>
  .swiper-container {
    /*min-height: 300px;*/
    height: 100%;
  }
  .my-animated {
    transition-property: opacity, transform;
    transition-timing-function: linear;
    transition-duration: .5s;
    opacity: 0;
    transform: translateY(10px);
  }
  .section {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #fff;
    background-size: cover;
  }
  /*@media(max-width: 768px) {*/
    /*div.first {*/
      /*height: 300px;*/
    /*}*/
    /*.first .my-logo {*/
      /*padding: 5px 0;*/
      /*width: 300px;*/
    /*}*/
    /*.first .text {*/
      /*font-size: 12px;*/
      /*padding: 5px 0;*/
    /*}*/
  /*}*/
  .first {
    background-image: url(./imgs/warp_1@2.jpg);
  }
  .first .my-logo {
    padding: 10px 0;
    width: 300px;
  }
  .first .text {
    font-size: 18px;
    padding: 10px 0;
  }
  .my-animated:nth-of-type(1) {
    transition-delay: 0s;
  }
  .my-animated:nth-of-type(2) {
    transition-delay: .3s;
  }
  .my-animated:nth-of-type(3) {
    transition-delay: .6s;
  }
  .my-animated:nth-of-type(4) {
    transition-delay: .9s;
  }
  .my-animated:nth-of-type(5) {
    transition-delay: 1.2s;
  }
  .current .my-animated {
    opacity: 1;
    transform: translateY(-10px);
  }


  .second {
    background-image: url(./imgs/warp_2@2.jpg);
  }
  .second .title {
    font-size: 22px;
    padding: 10px 0;
  }
  .second  .my-logo {
    padding: 10px 0;
    width: 200px;
  }
  .second  .text {
    font-size: 18px;
    padding: 10px 0;
  }

  .third {
    background-image: url(./imgs/rousing_warp@2.jpg);
    transition: background .5s linear;
  }
  .third .title {
    font-size: 24px;
  }
  .third .text {
    font-size: 18px;
    padding: 10px 0;
  }
  .third .img-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px;
  }
  .third .img-wrapper .bg {
    width: 100px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(./imgs/logo_back@gray.png);
    background-size: cover;
  }
  .third .img-wrapper .bg.active {
    background-image: url(./imgs/logo_back@blue.png);
  }
  .third .img-wrapper .title {
    font-size: 18px;
  }

  .fouth {
    background-image: url(./imgs/warp_4@2.jpg);
  }
  .fouth .product-box {
    display: flex;
  }
  .product-box .left,.product-box .right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .product-box .left img,.product-box .right img{
    width: 80px;
    margin: 0 20px;
  }
  .left .left-middle {
    position: relative;
    right: 68px;
  }
  .right .right-middle {
    position: relative;
    left: 68px;
  }
  .product-box .main img {
    width: 150px;
  }
  .fouth .title {
    font-size: 30px;
  }
  .fouth .text {
    font-size: 18px;
    padding: 5px 0;
  }

  .fiveth {
    background-image: url(./imgs/warp_5@2.jpg);
  }
  .fiveth .title {
    font-size: 24px;
  }
  .fiveth .text {
    font-size: 18px;
    padding: 5px 0;
  }

  .sixth {
    background-image: url(./imgs/warp_6@2.jpg);
  }
  .sixth .title {
    font-size: 24px;
  }
  .sixth {
    font-size: 18px;
  }
  .sixth .flex-box img {
    margin: 20px;
  }

  .seventh {
    background-image: url(./imgs/warp_7@2.jpg);
  }
  .seventh .title {
    font-size: 24px;
  }
  .seventh .text {
    font-size: 18px;
    margin: 10px 0;
  }

  .eighth {
    background-color: #3d3d3e;
  }
  .eighth .title {
    font-size: 24px;
  }
  .eighth .text {
    font-size: 18px;
    margin: 10px 0;
  }
  .eighth .more {
    padding: 10px 20px;
    border-radius: 20px;
    color: #fff;
    background-color: #131313;
  }
  .eighth .flex-box img {
    width: 80px;
    margin: 20px;
  }
</style>
