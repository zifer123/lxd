<template>
  <div>
    <div class="taste">
      <img class="my-logo" src="./imgs/logo-fitmix.png" alt="">
      <img class="my-logo" src="./imgs/logo_font.png" alt="">
      <p class="text">如果说穿一双跑鞋，就能随时上路那么，听着音乐开跑就是更好的开始</p>
      <p class="text">
        乐享动在路上给你的陪伴</p>
      <p class="text">
        让每一公里都不寂寞，每一次尝试都有新的可能</p>
    </div>
  </div>
</template>

<style scoped>
  @media(max-width: 768px) {
    div.taste {
      height: 300px;
    }
    .taste .my-logo {
      padding: 5px 0;
      width: 300px;
    }
    .taste .text {
      font-size: 12px;
      padding: 5px 0;
    }
  }
  .taste {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #fff;
    height: 100%;
    background-image: url(./imgs/warp_1@2.jpg);
    background-size: cover;
  }
  .my-logo {
    padding: 10px 0;
    width: 300px;
  }
  .text {
    font-size: 18px;
    padding: 10px 0;
  }
</style>
