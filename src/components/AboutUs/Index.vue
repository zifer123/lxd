<template>
  <div class="box">
    <div class="head">
      <img src="./imgs/fitmix@logo.png" alt="">
    </div>

    <div class="about-us">
      <div class="container">
        <h1>关于我们</h1>
        <p class="description">深圳第一蓝筹科技有限公司成立于2014年3月，是一家基于互联网的运动情景内容服务平台,为用户推送有运动激励效果的定制化音乐内容， 并提供一系列炫酷智能硬件采集用户数据， 完美达成运动、音乐与科技的无缝衔接和交互体验。 “有温度的创新，有担当的反叛，有建设性的坦诚，有使命感的进取。”是蓝筹科技的价值观</p>
        <p class="description">玩最好的，做最好玩的。我们自称弄客，喜欢摆弄各种新鲜玩意儿。公司成立后，将会议室改建为游戏机房、将会客室改建为健身房、将办公室改建为音乐厅、收藏全球限量战损版美队盾牌、集结漫威所有英雄的手办⋯⋯“玩”的基因根植于蓝筹科技，同时也将认真、满怀激情地玩下去。</p>
        <img src="./imgs/image1.png" alt="">
      </div>
    </div>
  </div>
</template>

<style scoped>
  .box {
    display: flex;
    flex-direction: column;
  }
  .head {
    height: 120px;
    background-color: #34bcee;
    display: flex;
  }
  .head img {
    width: 260px;
    margin: auto;
  }
  .about-us {
    background-color: #545555;
    padding: 20px 0;
    flex: 1;
    color: #fff;
  }
  .about-us .description {
    font-size: 18px;
    margin: 5px 0;
  }
</style>
