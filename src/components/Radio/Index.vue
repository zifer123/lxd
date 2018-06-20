<template>
  <div>
    <div class="first">
      <div class="radio">
        <img class="radio-png" src="./imgs/radio.png" alt="">
        <p class="description1">{{ $t("radio.entertainment") }}</p>
        <p class="description2">{{ $t("radio.fit") }}</p>
      </div>
    </div>

    <div class="second">
      <p class="description1">{{ $t("radio.second1") }}</p>
      <p class="description1">{{ $t("radio.second2") }}</p>
    </div>

    <div class="third">
      <h2 class="description1">{{ $t("radio.third1") }}</h2>
      <p class="description1">{{ $t("radio.third2") }}</p>
    </div>

    <div class="fourth">
      <img src="./imgs/mad_logo.png" alt="">
      <h2 class="description1">{{ $t("radio.fourth1") }}</h2>
      <p class="description1">{{ $t("radio.fourth2") }}</p>
    </div>

    <div class="fifth">
      <div class="left">
        <img class="music-logo" src="./imgs/music_chinese_logo.jpg" alt="">
        <p class="description3">{{ $t("radio.left1") }}</p>
        <p class="description3">{{ $t("radio.left2") }}</p>
      </div>
      <div class="right">
        <img class="music-logo" src="./imgs/music_ossi_logo.jpg" alt="">
        <p class="description3">{{ $t("radio.right1") }}</p>
        <p class="description3">{{ $t("radio.right2") }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .first {
    height: 515px;
    background-image: url(./imgs/run_music.jpg);
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .first .radio {
    color: #fff;
    width: 230px;
    padding: 15px;
    flex: 1;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
  .radio-png {
    width: 120px;
  }
  .description1 {
    margin: 15px 0;
    letter-spacing: 2px;
  }
  .description2 {
    background-color: rgba(255,255,255,0.5);
    border-radius: 5px;
    padding: 5px 15px;
  }
  .description3 {
    margin: 5px 0;
    font-size: 16px;
    letter-spacing: 2px;
  }

  .second {
    padding: 20px 0;
    color: #fff;
    text-align: center;
    background-color: rgba(0,0,0,0.8);
  }

  .third {
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(./imgs/max_coffee.jpg);
    height: 300px;
    background-size: cover;
  }

  .fourth {
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(./imgs/mad.jpg);
    height: 515px;
    background-size: cover;
  }

  .fifth {
    color: #fff;
    display: flex;
    height: 414px;
  }
  .fifth .left {
    background-image: url(./imgs/music_chinese.jpg);
    background-size: cover;
    background-position: center;
    flex: 1;
    padding: 0 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .fifth .right {
    background-image: url(./imgs/music_ossi.jpg);
    background-size: cover;
    background-position: center;
    flex: 1;
    padding: 0 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .music-logo {
    width: 120px;
  }
</style>
