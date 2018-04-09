<template>
  <div>
    <div class="flex-box first">
      <img class="logo" src="./imgs/fitmix_font_logo.png" alt="">
      <h2 class="title">把握你节奏 跃动乐享动</h2>
      <img class="download" src="./imgs/download.png" alt="">
      <p class="text">扫码下载乐享动app</p>
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
          <h1 class="title">无音乐不运动 最带感的运动音乐歌单</h1>
          <div class="flex-box">
            <div class="item" @mouseenter="changeCarousel(0)">
              <h2>DJ混音 运动专听</h2>
              <p>百名DJ与运动专家打碟定制，提供摇滚、电子等炫酷曲风，适应跑步、骑行、徒步等多种运动类型。</p>
            </div>

            <div class="item" @mouseenter="changeCarousel(1)">
              <h2>音乐随行 运动不停</h2>
              <p>长达60分钟高能单曲，全程陪伴不间断，支持本地音乐播放，无论运动还是小憩，随时随地随身听。</p>
            </div>
          </div>

          <div class="flex-box">
            <div class="item" @mouseenter="changeCarousel(2)">
              <h2>变频激励 能量倍增</h2>
              <p>智能推送变频音乐激励方案，音乐节奏跟随脚步节拍，享受运动愉悦感，增强运动能量，提升15%运动潜能。</p>
            </div>

            <div class="item" @mouseenter="changeCarousel(3)">
              <h2>跟随节奏 乐享运动</h2>
              <p>可自定义运动节拍BPM值，配合音乐节拍器，找寻属于自己的运动节奏，个人训练都可与众不同。</p>
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
          <h1 class="title">口袋运动教练 最智能体贴的运动处方</h1>
          <div class="flex-box">
            <div class="item" @mouseenter="changeCarousel(0)">
              <h2>运动数据 科学管理</h2>
              <p>通过自主算法，精准追踪运动轨迹，时间、卡路里、配速等数据分析，科学助力，让跑步变得轻松好玩。</p>
            </div>

            <div class="item" @mouseenter="changeCarousel(1)">
              <h2>心率监测 实时指导</h2>
              <p>配合智能设备数据采集，实时反映心率变化，并指导姿势及配速，实现燃烧脂肪、强化心肺等运动目的。从此运动状态了然于心。</p>
            </div>
          </div>

          <div class="flex-box">
            <div class="item" @mouseenter="changeCarousel(2)">
              <h2>个性定制 智能提醒</h2>
              <p>预设运动目标，自定义训练计划，实现运动模式、运动场景等个性化设置，提醒你更健康科学的跑步方式，提升训练效果，不断突破自我。</p>
            </div>

            <div class="item" @mouseenter="changeCarousel(3)">
              <h2>云端管理 全网同步</h2>
              <p>运动数据自动上传云端管理中心，WIFI环境下自动同步，永久可追踪管理，每一天都能看到自己的进步。</p>
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
          <h1 class="title">社交与分享 最酷炫有趣的运动社区</h1>
          <div class="flex-box">
            <div class="item" @mouseenter="changeCarousel(0)">
              <h2>乐享排行 好友来战</h2>
              <p>接入微信运动、QQ健康助手等，随时随地分享和查看步数排名，与好友比拼，发现更多运动牛人。</p>
            </div>

            <div class="item" @mouseenter="changeCarousel(1)">
              <h2>乐享运动 一起见证</h2>
              <p>秀出运动成果，晒出运动轨迹，分享最爱的跑步音乐，支持所有社交平台，与好友一起见证运动快乐与成就。</p>
            </div>
          </div>

          <div class="flex-box">
            <div class="item" @mouseenter="changeCarousel(2)">
              <h2>乐享跑团 自建俱乐部</h2>
              <p>提供线上线下多种运动机会，丰富运动社交圈，支持自建俱乐部，结识更多爱音乐的运动达人。</p>
            </div>

            <div class="item" @mouseenter="changeCarousel(3)">
              <h2>运动视界 妙趣体验</h2>
              <p>全球极限运动视频锦集，360度全景VR，任意转发吐槽。随时随地享受妙趣横生的视觉冲击。</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="fiveth flex-box">
      <h3 class="title1">自建俱乐部</h3>
      <h2 class="title2">独乐乐不如众乐乐</h2>
      <p class="text">线上线下活动丰富，加入乐享动跑团，和好友一起玩转运动。</p>
      <img src="./imgs/qr_code.png" alt="">
    </div>

    <div class="sixth flex-box">
      <h1 class="title">更多智能硬件随心操控</h1>
      <p class="more">了解更多</p>
    </div>

    <div class="seventh flex-box">
      <h1 class="title">加入乐享动</h1>
      <p>找到属于你的节奏</p>
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
