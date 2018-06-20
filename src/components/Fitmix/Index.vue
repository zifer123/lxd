<template>
  <div>
    <div class="flex-box first">
      <img class="logo" src="./imgs/fitmix_font_logo.png" alt="">
      <h2 class="title">{{ $t('app.fit') }}</h2>
      <img class="download" src="./imgs/download.png" alt="">
      <p class="text">{{ $t('app.scanner') }}</p>
    </div>

    <div class="section second">
      <div class="container flex-box">
        <div class="left">
          <Carousel style="margin-top: 55px;width: 222px;margin-left: 13px;height: 396px;" v-model="carousel1" loop>
            <CarouselItem>
              <div class="my-carousel first-car"></div>
            </CarouselItem>
            <CarouselItem>
              <div class="my-carousel section-car"></div>
            </CarouselItem>
            <CarouselItem>
              <div class="my-carousel third-car"></div>
            </CarouselItem>
            <CarouselItem>
              <div class="my-carousel fourth-car"></div>
            </CarouselItem>
          </Carousel>
        </div>

        <div class="right">
          <h1 class="title">{{ $t('app.noMusic') }}</h1>
          <div class="flex-box">
            <div class="item" @mouseenter="changeCarousel(0)">
              <h2>{{ $t('app.noMusic_des1_title') }}</h2>
              <p>{{ $t('app.noMusic_des1') }}</p>
            </div>

            <div class="item" @mouseenter="changeCarousel(1)">
              <h2>{{ $t('app.noMusic_des2_title') }}</h2>
              <p>{{ $t('app.noMusic_des2') }}</p>
            </div>
          </div>

          <div class="flex-box">
            <div class="item" @mouseenter="changeCarousel(2)">
              <h2>{{ $t('app.noMusic_des3_title') }}</h2>
              <p>{{ $t('app.noMusic_des3') }}</p>
            </div>

            <div class="item" @mouseenter="changeCarousel(3)">
              <h2>{{ $t('app.noMusic_des4_title') }}</h2>
              <p>{{ $t('app.noMusic_des4') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section third">
      <div class="container flex-box">
        <div class="left">
          <Carousel style="margin-top: 55px;width: 222px;margin-left: 13px;height: 396px;" v-model="carousel1" loop>
            <CarouselItem>
              <div class="my-carousel first-car"></div>
            </CarouselItem>
            <CarouselItem>
              <div class="my-carousel section-car"></div>
            </CarouselItem>
            <CarouselItem>
              <div class="my-carousel third-car"></div>
            </CarouselItem>
            <CarouselItem>
              <div class="my-carousel fourth-car"></div>
            </CarouselItem>
          </Carousel>
        </div>

        <div class="right">
          <h1 class="title">{{ $t('app.pocket') }}</h1>
          <div class="flex-box">
            <div class="item" @mouseenter="changeCarousel(0)">
              <h2>{{ $t('app.pocket_des1_title') }}</h2>
              <p>{{ $t('app.pocket_des1') }}</p>
            </div>

            <div class="item" @mouseenter="changeCarousel(1)">
              <h2>{{ $t('app.pocket_des2_title') }}</h2>
              <p>{{ $t('app.pocket_des2') }}</p>
            </div>
          </div>

          <div class="flex-box">
            <div class="item" @mouseenter="changeCarousel(2)">
              <h2>{{ $t('app.pocket_des3_title') }}</h2>
              <p>{{ $t('app.pocket_des3') }}</p>
            </div>

            <div class="item" @mouseenter="changeCarousel(3)">
              <h2>{{ $t('app.pocket_des4_title') }}</h2>
              <p>{{ $t('app.pocket_des4') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section fourth">
      <div class="container flex-box">
        <div class="left">
          <Carousel style="margin-top: 55px;width: 222px;margin-left: 13px;height: 396px;" v-model="carousel1" loop>
            <CarouselItem>
              <div class="my-carousel first-car"></div>
            </CarouselItem>
            <CarouselItem>
              <div class="my-carousel section-car"></div>
            </CarouselItem>
            <CarouselItem>
              <div class="my-carousel third-car"></div>
            </CarouselItem>
            <CarouselItem>
              <div class="my-carousel fourth-car"></div>
            </CarouselItem>
          </Carousel>
        </div>

        <div class="right">
          <h1 class="title">{{ $t('app.share') }}</h1>
          <div class="flex-box">
            <div class="item" @mouseenter="changeCarousel(0)">
              <h2>{{ $t('app.share_des1_title') }}</h2>
              <p>{{ $t('app.share_des1') }}</p>
            </div>

            <div class="item" @mouseenter="changeCarousel(1)">
              <h2>{{ $t('app.share_des2_title') }}</h2>
              <p>{{ $t('app.share_des2') }}</p>
            </div>
          </div>

          <div class="flex-box">
            <div class="item" @mouseenter="changeCarousel(2)">
              <h2>{{ $t('app.share_des3_title') }}</h2>
              <p>{{ $t('app.share_des3') }}</p>
            </div>

            <div class="item" @mouseenter="changeCarousel(3)">
              <h2>{{ $t('app.share_des4_title') }}</h2>
              <p>{{ $t('app.share_des4') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="fiveth flex-box">
      <h3 class="title1">{{ $t('app.ownClub') }}</h3>
      <h2 class="title2">{{ $t('app.everyone') }}</h2>
      <p class="text">{{ $t('app.joinUs') }}</p>
      <img src="./imgs/qr_code.png" alt="">
    </div>

    <div class="sixth flex-box">
      <h1 class="title">{{ $t('app.learnMore') }}</h1>
      <p class="more">{{ $t('app.knowMore') }}</p>
    </div>

    <div class="seventh flex-box">
      <h1 class="title">{{ $t('app.joinFitmix') }}</h1>
      <p>{{ $t('app.forYou') }}</p>
      <div>
        <a href="http://android.myapp.com/myapp/detail.htm?apkName=com.fitmix.sdk">
          <img class="app-download" src="./imgs/download_app_store.png" alt="">
        </a>

        <a href="https://itunes.apple.com/cn/app/le-xiang-dong-jian-shen-jian/id999239164?l=en&mt=8">
          <img class="app-download" src="./imgs/download_google_play.png" alt="">
        </a>
      </div>

      <Row :gutter="32" style="text-align: center">
        <Col :xs="12" :sm="6" :md="6" :lg="6">
          <img class="gallery" src="./imgs/group_one_1.jpg" alt="">
        </Col>

        <Col :xs="12" :sm="6" :md="6" :lg="6">
          <img class="gallery" src="./imgs/group_one_2.jpg" alt="">
        </Col>

        <Col :xs="12" :sm="6" :md="6" :lg="6">
          <img class="gallery" src="./imgs/group_one_3.jpg" alt="">
        </Col>
        <Col :xs="12" :sm="6" :md="6" :lg="6">
          <img class="gallery" src="./imgs/group_one_4.jpg" alt="">
        </Col>

      </Row>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        carousel1: 0
      }
    },
    methods: {
      changeCarousel(num,e) {
        this.carousel1 = num;
      }
    }
  }
</script>

<style scoped>
  .first {
    height: 710px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(./imgs/banner_back.jpg);
    background-size: cover;
    background-position: center;
  }
  .first .logo {
    width: 120px;
  }
  .first .download {
    width: 120px;
  }
  .title {
    font-size: 30px;
    padding: 10px 0;
    color: #fff;
  }
  .text {
    color: #fff;
    padding: 10px 0;
  }

  .section {
    height: 620px;
    color: #fff;
  }
  .section .container {
    height: 100%;
    justify-content: center;
    align-items: center;
  }
  .section .left {
    width: 250px;
    height: 500px;
    background-size: cover;
    background-image: url(./imgs/iPhone6_black.png);
  }
  .my-carousel {
    background-size: cover;
    width: 222px;
    height: 396px;
  }
  .section .right {
    width: 650px;
    padding-left: 68px;
  }
  .section .tight .title {
    padding: 12px 0;
  }
  .section .right .item {
    flex: 1;
    margin: 20px 20px 20px 0;
  }
  .section .right .item:hover {
    color: deepskyblue;
  }

  /* 2 */
  .second {
    background-image: url(./imgs/group_one_back.jpg);
  }
  .second .first-car {
    background-image: url(./imgs/group_one_1.jpg);
  }
  .second .section-car {
    background-image: url(./imgs/group_one_2.jpg);
  }
  .second .third-car {
    background-image: url(./imgs/group_one_3.jpg);
  }
  .second .fourth-car {
    background-image: url(./imgs/group_one_4.jpg);
  }

  /* 3 */
  .third {
    background-image: url(./imgs/group_tow_back.jpg);
  }
  .third .first-car {
    background-image: url(./imgs/group_two_1.jpg);
  }
  .third .section-car {
    background-image: url(./imgs/group_two_2.jpg);
  }
  .third .third-car {
    background-image: url(./imgs/group_two_3.jpg);
  }
  .third .fourth-car {
    background-image: url(./imgs/group_two_4.jpg);
  }
  .section.third .right .item:hover {
    color: #3d3d3e;
  }

  /* 4 */
  .fourth {
    background-image: url(./imgs/group_one_back.jpg);
  }
  .fourth .first-car {
    background-image: url(./imgs/group_three_1.jpg);
  }
  .fourth .section-car {
    background-image: url(./imgs/group_three_2.jpg);
  }
  .fourth .third-car {
    background-image: url(./imgs/group_three_3.jpg);
  }
  .fourth .fourth-car {
    background-image: url(./imgs/group_three_4.jpg);
  }

  /* 5 */
  .fiveth {
    height: 458px;
    color: #fff;
    background-image: url(./imgs/my_club_back.jpg);
    background-size: cover;
    background-position: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .fiveth .title1 {
    font-size: 22px;
    padding: 10px 0;
  }
  .fiveth .title2 {
    font-size: 24px;
  }
  .fiveth .text {
    font-size: 20px;
  }

  /* 6 */
  .sixth {
    height: 136px;
    color: #fff;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(./imgs/group_tow_back.jpg);
  }
  .sixth .title {
    letter-spacing: 2px;
    font-size: 26px;
  }
  .sixth .more {
    padding: 5px 15px;
    border-radius: 10px;
    border: 3px solid #fff;
  }

  /* 7 */
  .seventh {
    height: 620px;
    color: #fff;
    background-image: url(./imgs/group_one_back.jpg);
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .seventh .app-download {
    width: 140px;
    margin: 20px;
  }
  .seventh .gallery {
    width: 160px;
  }
</style>
