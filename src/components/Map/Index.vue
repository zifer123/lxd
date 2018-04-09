<template>
  <div class="flex-box">
    <div class="left">
      <Row :gutter="16" class="btn-group">
        <Col span="12">
        <div class="left-btn" :class="{'active': select.allBtn}">所有</div>
        </Col>
        <Col span="12">
        <div class="right-btn" :class="{'active': !select.allBtn}">我的</div>
        </Col>
      </Row>

      <div class="select flex-box" @click="showType">
        <img class="type" :src="select.selectType" alt="">
        <span class="text" v-text="select.selectLabel">徒步</span>
        <img class="right-icon" src="./imgs/down.png">
      </div>

      <ul class="select-options flex-box">
        <li class="select-item flex-box" style="border-bottom: 1px solid #ccc;" :class="{'active': select.selectValue==1}" @click="selectType({selectValue: 1,selectLabel: '户外跑'})">
          <img class="type" src="./imgs/run.png" alt="">
          <span class="text">户外跑</span>
        </li>

        <li class="select-item flex-box" style="border-bottom: 1px solid #ccc;" :class="{'active': select.selectValue==2}" @click="selectType({selectValue: 2,selectLabel: '骑行'})">
          <img class="type" src="./imgs/highwayCar.png" alt="">
          <span class="text">骑行</span>
        </li>

        <li class="select-item flex-box" style="border-bottom: 1px solid #ccc;" :class="{'active': select.selectValue==3}" @click="selectType({selectValue: 3,selectLabel: '爬山'})">
          <img class="type" src="./imgs/mountaineering.png" alt="">
          <span class="text">爬山</span>
        </li>
        <li class="select-item flex-box" :class="{'active': select.selectValue==4}" @click="selectType({selectValue: 4,selectLabel: '徒步'})">
          <img class="type" src="./imgs/foot.png" alt="">
          <span class="text">徒步</span>
        </li>

      </ul>

      <div class="data-container">
        <div class="flex-box item">
          <div class="left-img">
            <img class="" src="./imgs/redMan.png" alt="">
          </div>
          <div class="flex-box right-content">
            <h1 class="sport-name">运动爱好者</h1>
            <div class="flex-box description">
              <span class="km">12.53km</span>
              <span class="sport-type">户外跑</span>
            </div>
          </div>
        </div>

        <div class="flex-box item">
          <div class="left-img">
            <img class="" src="./imgs/redMan.png" alt="">
          </div>
          <div class="flex-box right-content">
            <h1 class="sport-name">运动爱好者</h1>
            <div class="flex-box description">
              <span class="km">12.53km</span>
              <span class="sport-type">户外跑</span>
            </div>
          </div>
        </div>

        <div class="flex-box item">
          <div class="left-img">
            <img class="" src="./imgs/redMan.png" alt="">
          </div>
          <div class="flex-box right-content">
            <h1 class="sport-name">运动爱好者</h1>
            <div class="flex-box description">
              <span class="km">12.53km</span>
              <span class="sport-type">户外跑</span>
            </div>
          </div>
        </div>

        <div class="flex-box item">
          <div class="left-img">
            <img class="" src="./imgs/redMan.png" alt="">
          </div>
          <div class="flex-box right-content">
            <h1 class="sport-name">运动爱好者</h1>
            <div class="flex-box description">
              <span class="km">12.53km</span>
              <span class="sport-type">户外跑</span>
            </div>
          </div>
        </div>

        <div class="flex-box item">
          <div class="left-img">
            <img class="" src="./imgs/redMan.png" alt="">
          </div>
          <div class="flex-box right-content">
            <h1 class="sport-name">运动爱好者</h1>
            <div class="flex-box description">
              <span class="km">12.53km</span>
              <span class="sport-type">户外跑</span>
            </div>
          </div>
        </div>

        <div class="flex-box item">
          <div class="left-img">
            <img class="" src="./imgs/redMan.png" alt="">
          </div>
          <div class="flex-box right-content">
            <h1 class="sport-name">运动爱好者</h1>
            <div class="flex-box description">
              <span class="km">12.53km</span>
              <span class="sport-type">户外跑</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="right flex-1" id="allMap">

    </div>
  </div>
</template>

<script>
  import type1 from './imgs/run.png' // 户外跑
  import type2 from './imgs/highwayCar.png' // 骑行
  import type3 from './imgs/mountaineering.png' // 登山
  import type4 from './imgs/foot.png' // 徒步
  export default {
    data() {
      return {
        collapse: true,// 判断select-options是否已经显示了
        select: {
          allBtn: true, // true代表所有
          selectType: type1,
          selectValue: 1, // 1代表户外跑 2代表骑行 3代表登山 4代表徒步
          selectLabel: '户外跑', // 1代表户外跑 2代表骑行 3代表登山 4代表徒步
        }
      }
    },
    methods: {
      showType(e) {
        if(this.collapse) {
          e.target.classList.add('active');
          document.querySelector('.select-options').classList.add('active');
          this.collapse = false;
        }else {
          e.target.classList.remove('active');
          document.querySelector('.select-options').classList.remove('active');
          this.collapse = true;
        }
      },
      selectType(obj) {
        this.collapse = true;
        document.querySelector('.select-options').classList.remove('active');
        this.$set(this.select,'selectValue',obj.selectValue);
        this.$set(this.select,'selectLabel',obj.selectLabel);
        switch (obj.selectValue) {
          case 1:
            this.$set(this.select,'selectType',type1);
            break;
          case 2:
            this.$set(this.select,'selectType',type2);
            break;
          case 3:
            this.$set(this.select,'selectType',type3);
            break;
          case 4:
            this.$set(this.select,'selectType',type4);
            break;
        }
      }
    },
    mounted() {
      let map = new BMap.Map("allMap");
      let point = new BMap.Point(116.404, 39.915);
      map.centerAndZoom(point, 14);
      map.enableScrollWheelZoom();
      map.enableInertialDragging();

      map.enableContinuousZoom();

      let size = new BMap.Size(10, 20);
      map.addControl(new BMap.CityListControl({
        anchor: BMAP_ANCHOR_TOP_LEFT,
        offset: size,
        // 切换城市之间事件
        // onChangeBefore: function(){
        //    alert('before');
        // },
        // 切换城市之后事件
        // onChangeAfter:function(){
        //   alert('after');
        // }
      }));
    }
  }
</script>

<style scoped>
  .left {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 340px;
    padding: 20px;
    color: #fff;
    background-color: rgba(34, 34, 34, 0.7);
  }
  .left .btn-group {
    font-size: 20px;
    text-align: center;
  }
  .left .left-btn,.left .right-btn {
    border-radius: 5px;
    background-color: rgb(61, 61, 62);
    padding: 8px 0;
  }
  .left .left-btn.active,.left .right-btn.active {
    background-color: rgb(255, 139, 34);
  }
  .left .select {
    position: relative;
    border-radius: 5px;
    margin: 10px 0;
    background-color: #3d3d3e;
    height: 62px;
    align-items: center;
  }
  .left .select .type {
    width: 17px;
    margin: 0 15px;
    transition: tranform .5s linear,opacity .5s linear;
  }
  .left .select .text {
    font-size: 20px;
    margin-left: 15px;
  }
  .left .select .right-icon {
    position: absolute;
    right: 10px;
    transform: rotate(-180deg);
    transition: all .5s linear;
  }
  .left .select.active .right-icon {
    transform: rotate(0deg);
  }
  .select-options {
    position: absolute;
    width: 300px;
    top: 140px;
    visibility: hidden;
    flex-direction: column;
    transition: all .5s linear;
    opacity: 0;
    transform: translateY(-10px);
  }
  .select-options.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
  .select-options .select-item {
    background-color: #3d3d3e;
    align-items: center;
    height: 62px;
    width: 100%;
  }
  .select-options .select-item.active {
    background-color: rgb(255, 139, 34);
  }
  .select-options .select-item:hover {
    background-color: rgb(255, 139, 34);
  }
  .select-options .select-item .type {
    width: 17px;
    margin: 0 15px;
  }
  .select-options .select-item .text {
    font-size: 20px;
    margin-left: 15px;
  }
  .data-container {
    flex: 1;
    overflow-x: hidden;
    overflow-y: scroll;
  }
  .data-container::-webkit-scrollbar { width: 0 !important }
  .data-container { -ms-overflow-style: none; }
  .data-container { overflow: -moz-scrollbars-none; }
  .data-container .item {
    padding-top: 15px;
    padding-bottom: 15px;
    border-bottom: 1px solid #ccc;
  }
  .data-container .item .left-img {
    width: 57px;
    height: 57px;
    border: 1px solid #ff8b22;
  }
  .data-container .item .left-img img {
    width: 100%;
  }
  .data-container .item .right-content {
    flex-direction: column;
    flex: 1;
  }
  .data-container .item .sport-name {
    color: #ff8b22;
    font-size: 20px;
    font-weight: normal;
    margin-left: 20px;
  }
  .data-container .item .description {
    margin-left: 20px;
    justify-content: space-between;
    font-size: 20px;
    color: #969696;
  }
</style>
