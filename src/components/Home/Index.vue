<template>
  <div class="bigBox">
    <Header></Header>
    <div class="flex-box flex-direction-column flex-1">
      <router-view style="flex: 1;"></router-view>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
  import Header from './Header'
  import Footer from './Footer'
  export default {
    components: {
      Header,
      Footer
    }
  }
</script>

<style>
  .bigBox {
    display: flex;
    color: #fff;
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
</style>
