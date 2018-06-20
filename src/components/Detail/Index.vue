<template>
  <div class="bigbox">
    <div class="first">
      <div class="description animated" :class="{'current': animatedInit == true}">
        <img :src="locale" alt="">
      </div>

      <div class="product animated" :class="{'current': animatedInit == true}">
        <img src="./imgs/biao.png" alt="">
      </div>
    </div>

    <div class="second">
      <div class="title animated" :class="{'current': activeCurrent == 2}">{{ $t('detail.unparalleled') }}</div>
      <div class="description animated" :class="{'current': activeCurrent == 3}">
        <img src="./imgs/groupFour.png" alt="">
        <h2>{{ $t('detail.tc4') }}</h2>
        <p>{{ $t('detail.high_good') }}</p>
      </div>
    </div>

    <div class="third">
      <div class="animated title-wrapper" :class="{'current': activeCurrent == 4}">
        <span class="title-1">{{ $t('detail.dlc') }}</span>
        <h2 class="title-2">{{ $t('detail.surface') }}</h2>
      </div>
      <div class="animated product" :class="{'current': activeCurrent == 5}"></div>
    </div>

    <div class="fourth">
      <div class="animated title-wrapper" :class="{'current': activeCurrent == 6}">
        <span class="title-1">{{ $t('detail.strap') }}</span>
        <h2 class="title-2">{{ $t('detail.elastic') }}</h2>
      </div>
      <div class="animated product" :class="{'current': activeCurrent == 7}"></div>
    </div>

    <div class="fiveth">
      <div class="animated title-wrapper" :class="{'current': activeCurrent == 8}">
        <span class="title-1">{{ $t('detail.glass') }}</span>
        <h2 class="title-2">{{ $t('detail.sapphare') }}</h2>
      </div>
      <div class="animated product" :class="{'current': activeCurrent == 9}"></div>
    </div>

    <div class="sixth">
      <div class="container">
        <div class="animated title-wrapper" :class="{'current': activeCurrent == 10}">
          <img src="./imgs/display.png" alt="">
          <span class="title-1">{{ $t('detail.lcd') }}</span>
          <h2 class="title-2">{{ $t('detail.glare') }}</h2>
          <span class="title-1">{{ $t('detail.touch') }}</span>
          <h2 class="title-2">{{ $t('detail.touchScreen') }}</h2>
        </div>
        <div class="animated product" :class="{'current': activeCurrent == 11}"></div>
      </div>
    </div>

    <div class="seventh">
      <div class="container">
        <div class="animated title-wrapper" :class="{'current': activeCurrent == 12}">
          <h1 class="title">{{ $t('detail.infinite') }}</h1>
          <span class="title-1">{{ $t('detail.modes') }}</span>
          <h2 class="title-2">{{ $t('detail.different') }}</h2>
        </div>
        <div class="animated product" :class="{'current': activeCurrent == 13}">
          <img src="./imgs/iconFirst.png" alt="">
          <img src="./imgs/iconSecond.png" alt="">
        </div>
      </div>
    </div>

    <div class="eighth">
      <Carousel v-model="value1" loop>
        <CarouselItem>
          <div class="first-carousel">
            <div class="wrapper">
              <h1 class="title">游泳SWIMMING</h1>
              <p class="text">{{ $t('detail.calculate') }}</p>
              <h2 class="title-1">{{ $t('detail.swlof') }}</h2>
              <p class="text">{{ $t('detail.swlof_des') }}</p>
              <h2 class="title-1">{{ $t('detail.stroke') }}</h2>
              <p class="text">{{ $t('detail.stroke_des') }}</p>
              <img src="./imgs/blue.png" alt="">
            </div>
          </div>
        </CarouselItem>

        <CarouselItem>
          <div class="second-carousel">
            <div class="wrapper">
              <h1 class="title">跑步 RUNNING</h1>
              <h2 class="title-1">{{ $t('detail.frequency') }}</h2>
              <p class="text">{{ $t('detail.frequency_des') }}</p>
              <h2 class="title-1">{{ $t('detail.vertical') }}</h2>
              <p class="text">{{ $t('detail.vertical_des') }}</p>
              <img src="./imgs/orange.png" alt="">
            </div>
          </div>
        </CarouselItem>

        <CarouselItem>
          <div class="third-carousel">
            <div class="wrapper">
              <h1 class="title">骑行 CYCLING</h1>
              <h2 class="title-1">{{ $t('detail.elevation') }}</h2>
              <p class="text">{{ $t('detail.elevation_des') }}</p>
              <h2 class="title-1">{{ $t('detail.tracking') }}</h2>
              <p class="text">{{ $t('detail.tracking_des') }}</p>
              <h2 class="title-1">{{ $t('detail.speed') }}</h2>
              <p class="text">{{ $t('detail.speed_des') }}</p>
              <img src="./imgs/green.png" alt="">
            </div>
          </div>
        </CarouselItem>
      </Carousel>
    </div>

    <div class="nineth">
      <div class="container">
        <h1 class="animated title" :class="{'current': activeCurrent == 13}">{{ $t('detail.fearless') }}</h1>
        <div class="animated description" :class="{'current': activeCurrent == 13}">
          <h3 class="title-1">{{ $t('detail.meter100') }}</h3>
          <p class="title-2">{{ $t('detail.meter100_des') }}</p>
        </div>
      </div>
    </div>

    <div class="tenth">
      <div class="container">
        <h1 class="animated title" :class="{'current': activeCurrent == 13}">{{ $t('detail.anytime') }}</h1>
      </div>
    </div>

    <div class="eleventh">
      <div class="container">
        <div>
          <img style="width: 280px;" src="./imgs/valencell.png" alt="">
          <div class="description">
            <h4>{{ $t('detail.heartRate') }}</h4>
            <p>{{ $t('detail.heartRate_des') }}</p>
          </div>
          <img src="./imgs/heartLine.png" alt="">
        </div>
        <img src="./imgs/heartTest.png" alt="">
      </div>
    </div>

    <div class="twelfth">
      <div class="container">
        <h1 class="title">{{ $t('detail.support') }}</h1>
        <div class="imgs">
          <img src="./imgs/redMan.png" alt="">
          <img src="./imgs/redLine.png" alt="">
        </div>
      </div>
    </div>

    <div class="thirteenth">
      <div class="container">
        <img class="img" src="./imgs/elevation.png" alt="">
        <div class="description">
          <h2 class="title-1">{{ $t('detail.d3') }}</h2>
          <p class="title-2">{{ $t('detail.d3_des') }}</p>
        </div>
      </div>
    </div>

    <div class="fourteenth">
      <div class="container">
        <div class="description">
          <h2 class="title-1">{{ $t('detail.less') }}</h2>
          <p class="title-2">{{ $t('detail.less_des') }}</p>
        </div>
      </div>
    </div>

    <div class="fifteenth">
      <div class="container">
        <h1 class="title">{{ $t('detail.anywhere') }}</h1>
        <div class="description">
          <h2 class="title-1"><strong>{{ $t('detail.gps') }}</strong>{{ $t('detail.navSystem') }}</h2>
          <p class="title-2">{{ $t('detail.supportChina') }}</p>
        </div>
      </div>
    </div>

    <div class="sixteenth">
      <div class="container">
        <div class="content">
          <div class="description">
            <h2 class="title-1">{{ $t('detail.realTime') }}</h2>
            <p class="title-2">{{ $t('detail.realTime_des') }}</p>
          </div>

          <img src="./imgs/guiji.jpg" alt="">
        </div>

        <div class="content">
          <div class="description">
            <h2 class="title-1">{{ $t('detail.sensor') }}</h2>
            <p class="title-2">{{ $t('detail.sensor_des') }}</p>
          </div>

          <img src="./imgs/chuangan.jpg" alt="">
        </div>
      </div>
    </div>

    <div class="seventeenth">
      <div class="container">
        <h1 class="title">{{ $t('detail.impeccable') }}</h1>
        <div class="description">
          <h2 class="title-1">{{ $t('detail.cooperationPartner') }}</h2>
          <img src="./imgs/partern.png" alt="">
        </div>
      </div>
    </div>

    <div class="eighteenth"></div>

    <div class="ninteenth">
      <h1 class="container title-1">{{ $t('detail.productSize') }}</h1>
      <img src="" alt="">
    </div>

    <div class="twentieth">
      <div class="container">
        <h1 class="title-1">{{ $t('detail.specification') }}</h1>
        <div class="description">
          <p class="left">{{ $t('detail.weight') }}</p>
          <p class="right">{{ $t('detail.weight_des') }}</p>
        </div>

        <div class="description">
          <p class="left">{{ $t('detail.display') }}</p>
          <p class="right">{{ $t('detail.display_des') }}</p>
        </div>

        <div class="description">
          <p class="left">{{ $t('detail.touchTouch') }}</p>
          <p class="right">{{ $t('detail.touchTouch_des') }}</p>
        </div>

        <div class="description">
          <p class="left">{{ $t('detail.sapphireCrystal') }}</p>
          <p class="right">{{ $t('detail.sapphireCrystal_des') }}</p>
        </div>

        <div class="description">
          <p class="left">{{ $t('detail.case') }}</p>
          <p class="right">{{ $t('detail.case_des') }}</p>
        </div>

        <div class="description">
          <p class="left">{{ $t('detail.watchDiameter') }}</p>
          <p class="right">{{ $t('detail.watchDiameter_des') }}</p>
        </div>

        <div class="description">
          <p class="left">{{ $t('detail.body') }}</p>
          <p class="right">{{ $t('detail.body_des') }}</p>
        </div>

        <div class="description">
          <p class="left">{{ $t('detail.gpsGps') }}</p>
          <p class="right">{{ $t('detail.gpsGps_des') }}</p>
        </div>
        <div class="description">
          <p class="left">{{ $t('detail.vibration') }}</p>
          <p class="right">{{ $t('detail.vibration_des') }}</p>
        </div>
        <div class="description">
          <p class="left">{{ $t('detail.waterResistant') }}</p>
          <p class="right">{{ $t('detail.waterResistant_des') }}</p>
        </div>
        <div class="description">
          <p class="left">{{ $t('detail.battery') }}</p>
          <p class="right">{{ $t('detail.battery_des') }}</p>
        </div>
        <div class="description">
          <p class="left">{{ $t('detail.button') }}</p>
          <p class="right">{{ $t('detail.button_des') }}</p>
        </div>

        <div class="description">
          <p class="left">{{ $t('detail.bluetooth') }}</p>
          <p class="right">{{ $t('detail.bluetooth_des') }}</p>
        </div>

        <div class="description">
          <p class="left">{{ $t('detail.bands') }}</p>
          <p class="right">{{ $t('detail.bands_des') }}</p>
        </div>

        <div class="description">
          <p class="left">{{ $t('detail.antenna') }}</p>
          <p class="right">{{ $t('detail.antenna_des') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import logoEn from './imgs/sameLogoEn.png'
  import logo from './imgs/sameLogo.png'
  export default {
    data() {
      return {
        animatedInit: false,
        activeCurrent: 0,
        value1: 0,
        locale: localStorage.getItem('locale')=='en'?logoEn:logo
      }
    },
    mounted() {
      var allAnimation = document.querySelectorAll('.animated');
      var scrollTopInit = document.body.scrollTop || document.documentElement.scrollTop; // 拿来判断向上滚动还是向下滚动
//      window.addEventListener('scroll',(e) => {
//        let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
//        let clientHeight = document.body.clientHeight || document.documentElement.clientHeight;
//        let hh = scrollTop + clientHeight; // 可视区加上滚动条距离
//        for(let i = 0,len = allAnimation.length;i < len;i++) {
//          let h = parseInt(getComputedStyle(allAnimation[i]).height); // 高度
//          if(allAnimation[i].classList.contains('product')) {
//            if( hh >= allAnimation[i].offsetTop ) {
//              console.log(i)
//              this.activeCurrent = i;
////            break;
//            }
//          }else {
//            if( hh >= allAnimation[i].offsetTop + h ) {
//              console.log('范围之内');
//              console.log(i)
//              this.activeCurrent = i;
////            break;
//            }
//          }
//
//        }
//      })
    },
    destroyed() {

    }
  }
</script>

<style scoped>
  @keyframes opacityX {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .bigbox {
    color: #fff;
  }
  .animated {
    animation-name: opacityX;
    animation-timing-function: linear;
    animation-duration: 1s;
    animation-play-state: running;
  }
  .animated.current {
    animation-play-state: running;
  }
  .first {
    height: 1319px;
    background-image: url(./imgs/firstBackground.jpg);
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  .first .description {
    padding: 120px 0 60px 0;
  }

  .second {
    height: 1126px;
    background-image: url(./imgs/fire.jpg);
    background-size: cover;
    background-position: center;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #ccc;
  }
  .second .title {
    font-size: 220px;
  }
  .second .description {
    padding-top: 60px;
    font-size: 30px;
  }

  .third {
    height: 980px;
    background-image: url(./imgs/watchBody.jpg);
    background-size: cover;
    background-position: center;
    color: #ccc;
    flex-direction: column;
  }
  .third .title-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .third .title-1 {
    border-bottom: 1px solid #ccc;
    font-weight: bold;
    font-size: 25px;
  }
  .third .title-2 {
    font-size: 35px;
    width: 700px;
  }
  .third .product {
    height: 700px;
    margin-top: 100px;
    background-image: url(./imgs/wBody.png);
    background-size: cover;
    background-position: center;
  }

  .fourth {
    background-image: url(./imgs/watchBand.jpg);
    background-size: cover;
    background-position: center;
    color: #ccc;
    flex-direction: column;
  }
  .fourth .title-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .fourth .title-1 {
    border-bottom: 1px solid #ccc;
    font-weight: bold;
    font-size: 25px;
  }
  .fourth .title-2 {
    font-size: 35px;
    width: 700px;
  }
  .fourth .product {
    height: 1100px;
    margin-top: -150px;
    background-image: url(./imgs/wBand.png);
    background-size: cover;
    background-position: center;
  }

  .fiveth {
    background-image: url(./imgs/circle.png);
    background-size: cover;
    background-position: center;
    color: #ccc;
    flex-direction: column;
  }
  .fiveth .title-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .fiveth .title-1 {
    border-bottom: 1px solid #ccc;
    font-weight: bold;
    font-size: 25px;
  }
  .fiveth .title-2 {
    font-size: 35px;
    width: 700px;
  }
  .fiveth .product {
    height: 700px;
    margin-top: 10px;
    background-image: url(./imgs/wCircle.png);
    /*background-size: cover;*/
    background-repeat: no-repeat;
    background-position: center;
  }

  .sixth {
    background-color: #000;
    color: #ccc;
  }
  .sixth .container {
    display: flex;
    justify-content: center;
  }
  .sixth .title-wrapper {
    display: flex;
    width: 400px;
    flex-direction: column;
    justify-content: center;
  }
  .sixth .title-1 {
    border-bottom: 1px solid #ccc;
    font-weight: bold;
    font-size: 25px;
    margin: 20px 0 15px 0;
  }
  .sixth .title-2 {
    font-size: 35px;
  }
  .sixth .product {
    flex: 1;
    height: 1085px;
    background-image: url(./imgs/wScreen.png);
    /*background-size: cover;*/
    background-repeat: no-repeat;
    background-position: center;
  }

  .seventh {
    display: flex;
    background-color: #000;
    justify-content: center;
    color: #ccc;
    flex-direction: column;
  }
  .seventh .title {
    font-size: 250px;
    text-align: center;
  }
  .seventh .title-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .seventh .title-1 {
    font-weight: bold;
    font-size: 25px;
    margin: 20px 0 15px 0;
    padding: 0 50px 0 60px;
  }
  .seventh .title-2 {
    font-size: 35px;
    text-align: center;
    padding: 0 50px 0 50px;
  }
  .seventh .product {
    flex: 1;
    display: flex;
    padding: 80px 50px 120px 50px;
    justify-content: space-between;
  }

  .eighth .wrapper {
    padding-left: 200px;
  }
  .eighth .title {
    font-size: 40px;
    padding: 10px 0 10px 0;
  }
  .eighth .title-1 {
    padding: 10px 0 10px 0;
    font-size: 30px;
  }
  .eighth .text {
    font-size: 25px;
  }
  .eighth .first-carousel {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    color: #3beef0;
    background-image: url(./imgs/swim.jpg);
    height: 1080px;
  }
  .eighth .second-carousel {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background-image: url(./imgs/run.jpg);
    color: #dbbe3b;
    height: 1080px;
  }
  .eighth .third-carousel {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    color: #2fdb6e;
    background-image: url(./imgs/ride.jpg);
    height: 1080px;
  }

  .nineth {
    display: flex;
    background-image: url(./imgs/diving.jpg);
    height: 1116px;
    justify-content: center;
    color: #ccc;
    flex-direction: column;
  }
  .nineth .title {
    font-size: 250px;
    text-align: center;
  }
  .nineth .title-1 {
    font-weight: bold;
    font-size: 25px;
    margin: 20px 0 15px 0;
    padding: 0 50px 0 60px;
  }
  .nineth .title-2 {
    font-size: 35px;
    padding: 0 50px 0 58px;
  }

  .tenth {
    display: flex;
    background-image: url(./imgs/mountain.jpg);
    background-position: center;
    height: 1116px;
    justify-content: center;
    color: #ccc;
    flex-direction: column;
  }
  .tenth .title {
    font-size: 250px;
    text-align: center;
  }

  .eleventh {
    background-image: url(./imgs/heartBg.png);
    background-position: center;
    background-repeat: no-repeat;
    height: 866px;
    color: #000;
  }
  .eleventh .container {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
  .eleventh .description {
    width: 350px;
    padding: 30px 0 30px 0;
    font-size: 30px;
  }
  .eleventh .title {
    font-size: 250px;
    text-align: center;
  }

  .twelfth {
    background-image: url(./imgs/snowMountain.png);
    background-position: center;
    background-repeat: no-repeat;
    height: 890px;
  }
  .twelfth .container {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .twelfth .title {
    color: red;
  }
  .twelfth .imgs {
    display: flex;
    justify-content: space-between;
  }

  .thirteenth {
     background-color: #f2f2f2;
     color: #000;
   }
  .thirteenth .img {
    margin-top: -150px;
  }
  .thirteenth .container {
    display: flex;
    justify-content: space-around;
  }
  .thirteenth .description {
    width: 300px;
  }
  .thirteenth .title-1 {
    font-size: 25px;
    padding: 20px 0 20px 0 ;
  }
  .thirteenth .title-2 {
    font-size: 30px;
  }

  .fourteenth {
    background-image: url(./imgs/camping.jpg);
    height: 1272px;
  }
  .fourteenth .container {
    display: flex;
    justify-content: space-around;
  }
  .fourteenth .description {
    margin-top: 80px;
    color: #af9f87;
  }
  .fourteenth .title-1 {
    font-size: 25px;
    padding: 20px 0 20px 0 ;
  }
  .fourteenth .title-2 {
    font-size: 40px;
  }

  .fifteenth {
    background-image: url(./imgs/tree.jpg);
    height: 1104px;
  }
  .fifteenth .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .fifteenth .title {
    text-align: center;
    font-size: 270px;
    color: #1c5667;
  }
  .fifteenth .description {

  }
  .fifteenth .title-1 {
    font-size: 25px;
    color: #333;
    padding: 20px 0 20px 0 ;
  }
  .fifteenth .title-2 {
    font-size: 40px;
    color: #333;
  }

  .sixteenth {
    background-color: #f2f2f2;
    padding-top: 30px;
    padding-bottom: 30px;
    height: 1300px;
  }
  .sixteenth .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .sixteenth .content {
    display: flex;
    margin: 35px 0 35px 0;
    align-items: center;
  }
  .sixteenth .description {
    padding-right: 30px;
  }
  .sixteenth .title-1 {
    font-size: 25px;
    color: #333;
    padding: 20px 0 20px 0 ;
  }
  .sixteenth .title-2 {
    font-size: 40px;
    color: #333;
  }

  .seventeenth {
    background-color: #f2f2f2;
    height: 1200px;
  }
  .seventeenth .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .seventeenth .title {
    text-align: center;
    font-size: 210px;
    color: #333;
  }
  .seventeenth .description {

  }
  .seventeenth .title-1 {
    font-size: 25px;
    color: #333;
    padding: 20px 0 20px 0 ;
  }

  .eighteenth {
    height: 1390px;
    background-image: url(./imgs/model.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  .ninteenth {
    background-image: url(./imgs/size.jpg);
    height: 1152px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .ninteenth .title-1 {
    font-size: 35px;
    color: #333;
    padding: 150px 0 0px 110px ;
  }

  .twentieth {
    padding: 45px 0 45px 0;
    background-color: #d8d8d8;
  }
  .twentieth .title-1 {
    font-size: 35px;
    color: #333;
    padding: 20px 0 20px 0;
  }
  .twentieth .description {
    color: #1a1a1a;
    font-size: 20px;
    padding: 20px 0 20px 0;
    display: flex;
  }
  .twentieth .description .left {
    width: 300px;
  }
</style>
