<template>
  <div>
    <div class="first">
      <p class="coming-soon">即将到来</p>
    </div>
    <div class="container">
      <h1 class="classify">{{ $t("product.hotSelling") }}</h1>

      <Row :gutter="12">
        <Col :xs="24" :sm="12" :md="12" :lg="8">
          <div class="img-box">
            <div class="img-product-box">
              <img class="img-product" src="./imgs/blackStraight.png" alt="">
            </div>
            <div class="description">
              <h2 class="title">SNOW E23</h2>
              <p class="text">
                百度合作蓝牙运动磁吸开关耳机
              </p>
            </div>
          </div>
        </Col>
        <Col :xs="24" :sm="12" :md="12" :lg="8">
          <div class="img-box">
            <div class="img-product-box">
              <img class="img-product" src="./imgs/blackBend.png" alt="">
            </div>
            <div class="description">
              <h2 class="title">AIR S10</h2>
              <p class="text">
                无线蓝牙智能运动挂耳式耳机
              </p>
            </div>
          </div>
        </Col>
        <Col :xs="24" :sm="12" :md="12" :lg="8">
          <div class="img-box">
            <div class="img-product-box">
              <img class="img-product" src="./imgs/whitear.png" alt="">
            </div>
            <div class="description">
              <h2 class="title">SHINE E11</h2>
              <p class="text">
                无线蓝牙可调夜光运动耳机
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>

    <div class="product-footer">
      <Row class="container">
        <Col span="12" class="footer-description">
          <h2 class="title">玩最好的，最好玩</h2>
          <p class="text">这里有至in的运动装备，最好玩的智能产品，通过音乐，运动与科技的完美结合，</p>
          <p class="text">给你最适合的运动激励方案。</p>
        </Col>
        <Col span="12" class="footer-description">
          <h3 class="more">发现更多好玩的装备</h3>
        </Col>
      </Row>

      <div class="container">
        <Row :gutter="16">
          <Col :xs="24" ::sm="12" :md="12" :lg="12">
            <div class="footer-bg bg1">
              <h4 class="title">开启你的运动之旅</h4>
              <p class="text">选择更适合你的运动激励方案</p>
              <router-link to="/a" class="btn">开始选择</router-link>
            </div>
          </Col>
          <Col :xs="24" :sm="12" :md="12" :lg="12">
            <div class="footer-bg bg2">
              <h4 class="title">进一步了解我们</h4>
              <p class="text">如何重新定义运动新玩法</p>
              <router-link to="/a" class="btn">了解更多</router-link>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  </div>
</template>

<style scoped>
  @media(max-width: 992px) {
    div.first {
      height: 600px;
    }
    p.coming-soon {
      padding-top: 90px;
    }
    h1.classify {
      padding: 8px 19px;
    }
  }
  @media(max-width: 768px) {
    div.first {
      height: 450px;
    }
    p.coming-soon {
      padding-top: 70px;
    }
    h1.classify {
      padding: 10px 21px;
    }
    div.img-box {
      height: 422px;
    }
  }
  .first {
    height: 1200px;
    position: relative;
    background-image: url(./imgs/watchPoster.png);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .coming-soon {
    /*width: 20px;*/
    font-size: 46px;
    padding-top: 190px;
    text-align: center;
    color: #969696;
  }
  .img-box {
    height: 622px;
    margin-bottom: 10px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #fff;
  }
  .img-responsive {
    max-width: 100%;
  }
  .classify {
    margin-top: 40px;
    margin-bottom: 20px;
    padding: 5px 15px;
    width: 180px;
    color: #fff;
    text-align: center;
    background-color: #3e3e3d;
  }
  .img-product-box {
    height: 306px;
    display: flex;
  }
  .img-product {
    width: 133px;
    margin: auto;
    transition: transform .5s linear;
  }
  .img-product:hover {
    transform: scale(1.1);
  }
  .description .title {
    font-size: 30px;
    padding: 5px 0;
  }
  .description .text {
    color: #b2b2b2;
    font-size: 18px;
  }


  .product-footer {
    background-color: rgb(19, 19, 19);
    padding-bottom: 40px;
    color: #fff;
  }
  .footer-description {
    margin: 40px 0;
    position: relative;
  }
  .footer-description h2.title {
    font-size: 30px;
  }
  .footer-description p.text {
    font-size: 14px;
    padding: 10px 0;
  }
  .footer-description .more {
    position: absolute;
    right: 0;
    padding: 5px 20px;
    border: 5px solid #fff;
    border-radius: 20px;
    transition: background-color .5s linear ;
  }
  .footer-description .more:hover {
    background-color: deepskyblue;
  }

  .footer-bg {
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 250px;
    margin-bottom: 20px;
  }
  .footer-bg.bg1 {
    background-image: url(./imgs/play_run1.jpg);
  }
  .footer-bg.bg2 {
    background-image: url(./imgs/play_run2.jpg);
  }
  .footer-bg .title {
    font-size: 18px;
    padding: 10px;
  }
  .footer-bg .text {
    font-size: 16px;
    padding: 10px;
  }
  .footer-bg .btn {
    font-size: 16px;
    background-color: rgb(19, 19, 19);
    padding: 10px;
    margin: 0 15px;
    width: 100px;
    border-radius: 10px;
    color: #fff;
    transition: background-color .2s linear;
  }
  .footer-bg .btn:hover {
    background-color: deepskyblue;
  }
</style>
