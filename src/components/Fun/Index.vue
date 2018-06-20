<template>
  <div>
    <div class="container">
      <div class="flex-box fun-item" v-for="item in data" @click="routeTo(item.id)">
        <div class="fun-img-box">
          <img class="fun-img" :src="item.img" alt="">
        </div>
        <div class="flex-box flex-direction-column description">
          <h2 v-text="item.title">可穿戴设备未来要怎么玩？乐享动说是“软件+硬件+服务”</h2>
          <p v-text="item.time">时间：2017年2月16日 14:00-15:00</p>
          <p v-text="item.desc">可穿戴设备与运动息息相关，在这个行业面临升级的当下，来自深圳的第一蓝筹科技想通过“软件+硬件+服务”抢占这个市场，他们旗下拥有运动音乐App乐享动和硬件品牌弄客</p>
          <p>阅读全文</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        data: []
      }
    },
    methods: {
      routeTo(where) {
        this.$router.push(`/funDetail/${where}`);
      }
    },
    mounted() {
      let locale = localStorage.getItem('locale');
      this.$http.get(`/static/fun.json`).then(body => {
        this.data = body.data.data;
      });
    }
  }
</script>

<style scoped>
  .fun-item {
    height: 150px;
    border-bottom: 1px solid #ccc;
  }
  .fun-img-box {
    display: flex;
    align-items: center;
    padding-right: 20px;
  }
  .fun-img {
    width: 215px;
    height: 120px;
  }
  .description {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
</style>
