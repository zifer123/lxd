<template>
  <div class="bigBox">
    <Header></Header>
    <MiniHeader></MiniHeader>
    <!-- 这里加上margin-top的原因是flex布局失效了，可能是我加了两个header的原因，有时间再回来看看什么原因 -->
    <div class="flex-box flex-direction-column flex-1" style="margin-top: 50px;">
      <router-view style="flex: 1;background-color: #ededed;overflow-y: auto;"></router-view>
      <Footer></Footer>
    </div>
    <BackTop>
      <div class="top">返回顶端</div>
    </BackTop>
  </div>
</template>

<script>
  import Header from './Header'
  import MiniHeader from './MiniHeader'
  import Footer from './Footer'
  export default {
    components: {
      Header,
      Footer,
      MiniHeader
    }
  }
</script>

<style>
  .bigBox {
    display: flex;
    flex-direction: column;
  }
  .container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  .flex-box {
    display: flex;
  }
  .align-items-center {
    align-items: center;
  }
  .justify-content-space-between {
    justify-content: space-between;
  }
  .flex-direction-column {
    flex-direction: column;
  }
  .flex-1 {
    flex: 1;
  }
  @media (min-width: 768px) {
    .container {
      width: 750px;
    }
  }
  @media (min-width: 992px) {
    .container {
      width: 970px;
    }
  }
  @media (min-width: 1200px) {
    .container {
      width: 1170px;
    }
  }
  .top {
    padding: 10px;
    background: rgba(0, 153, 229, .7);
    color: #fff;
    text-align: center;
    border-radius: 2px;
  }
</style>
