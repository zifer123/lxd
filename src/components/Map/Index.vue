<template>
  <div class="flex-box">
    <div class="left">
      <Row :gutter="16" class="btn-group">
        <Col span="12">
        <div class="left-btn" @click="changeBtn(true)" :class="{'active': select.allBtn}">{{ $t("map.all") }}</div>
        </Col>
        <Col span="12">
        <div class="right-btn" @click="changeBtn(false)" :class="{'active': !select.allBtn}">{{ $t("map.my") }}</div>
        </Col>
      </Row>

      <div class="select flex-box" @click="showType">
        <img class="type" :src="select.selectType" alt="">
        <span class="text" v-text="select.selectLabel">{{ $t("map.onFoot") }}</span>
        <img class="right-icon" src="./imgs/down.png">
      </div>

      <ul class="select-options flex-box">
        <li class="select-item flex-box" style="border-bottom: 1px solid #ccc;" :class="{'active': select.selectValue==1}" @click="selectType({selectValue: 1,selectLabel: $t('map.runningOutside')})">
          <img class="type" src="./imgs/run.png" alt="">
          <span class="text">{{ $t("map.runningOutside") }}</span>
        </li>

        <li class="select-item flex-box" style="border-bottom: 1px solid #ccc;" :class="{'active': select.selectValue==2}" @click="selectType({selectValue: 2,selectLabel: $t('map.cycling')})">
          <img class="type" src="./imgs/highwayCar.png" alt="">
          <span class="text">{{ $t("map.cycling") }}</span>
        </li>

        <li class="select-item flex-box" style="border-bottom: 1px solid #ccc;" :class="{'active': select.selectValue==3}" @click="selectType({selectValue: 3,selectLabel: $t('map.mountain')})">
          <img class="type" src="./imgs/mountaineering.png" alt="">
          <span class="text">{{ $t("map.mountain") }}</span>
        </li>
        <li class="select-item flex-box" :class="{'active': select.selectValue==4}" @click="selectType({selectValue: 4,selectLabel: $t('map.mountain')})">
          <img class="type" src="./imgs/foot.png" alt="">
          <span class="text">{{ $t("map.onFoot") }}</span>
        </li>

      </ul>

      <div class="data-container">
        <div v-for="(item,index) in sportsData" v-if="index < currentPage * 10" class="flex-box item">
          <div class="left-img">
            <img v-if="select.allBtn" src="./imgs/redMan.png" alt="">
            <img v-else :src="$store.state.userData.user.avatar" alt="">
          </div>
          <div class="flex-box right-content">
            <h1 class="sport-name">{{ $store.state.userData.user.name?$store.state.userData.user.name:'运动爱好者' }}</h1>
            <div class="flex-box description">
              <span class="km" v-text="item.distance?(item.distance/1000).toFixed(2) + 'km':(item.watch.totalDistance/1000).toFixed(2) + 'km'">12.53km</span>
              <span class="sport-type" v-if="select.selectValue == 1">{{ $t("map.runningOutside") }}</span>
              <span class="sport-type" v-else-if="select.selectValue == 2">{{ $t("map.cycling") }}</span>
              <span class="sport-type" v-else-if="select.selectValue == 3">{{ $t("map.mountain") }}</span>
              <span class="sport-type" v-else="select.selectValue == 4">{{ $t("map.onFoot") }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="right" id="allMap">
      <Login></Login>
    </div>
  </div>
</template>

<script>
  import Login from '../Login'
  import type1 from './imgs/run.png' // 户外跑
  import type2 from './imgs/highwayCar.png' // 骑行
  import type3 from './imgs/mountaineering.png' // 登山
  import type4 from './imgs/foot.png' // 徒步
  let map; // 存取map实例  让别的方法可以访问到
  export default {
    name: 'map111',
    data() {
      return {
        collapse: true,// 判断select-options是否已经显示了
        select: {
          allBtn: false, // true代表所有
          selectType: type1,
          selectValue: 1, // 1代表户外跑 2代表骑行 3代表登山 4代表徒步
          selectLabel: this.$t('map.runningOutside'), // 1代表户外跑 2代表骑行 3代表登山 4代表徒步
        },
        currentPage: 1,
        sportsData: [] // 运动数据
      }
    },
    methods: {
      changeBtn(ifAll) {
        // 根据参数决定是所有还是个人
        this.$set(this.select,'allBtn',ifAll);
        if(!ifAll && !this.loginState) {
          // 我的，判断是否登陆过
          this.sportsData = [];
          return;
        }
        this.fetchData();
      },
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
        document.querySelector('.select').classList.remove('active');
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
        this.fetchData();
      },
      ifScrollToBottom(e) {
        // 判断是否滚动到底部
        if(e.target.scrollHeight - (e.target.scrollTop + e.target.clientHeight) <= 5) {
          this.currentPage++;
          this.addOverlay();
        }
      },
      fetchData() {
        if(!this.loginState) {
          this.$Message.warning('请先登录');
          return;
        }
        this.sportsData = [];
        let close = this.$Message.loading({
          content: '获取数据中',
          duration: 0
        });
        if(this.select.allBtn) {
          // 所有
          this.$http.get('/api/getSportsData',{
            params: {
              cityId: this.$store.state.userData.user.registerTaoBaoIp?this.$store.state.userData.user.registerTaoBaoIp.city_id:'local'
            }
          }).then((body) => {
            if(!body.data.code) {
              this.currentPage = 1;
              map.clearOverlays();
              close();
              if(!body.data.runList.length) {
                this.$Message.warning('还没有运动数据，快去运动吧');
              }else {
                let selectValue = this.select.selectValue; // 选择的类型
                if(selectValue == 1) {
                  // 户外跑模式，过滤出app数据的户外跑和手表数据的户外跑
                  this.sportsData = body.data.runList.filter((item) => {
                    if(item.model&&item.type == 0) {
                      return true;
                    }else if(item.type == 3 && item.watch.sportType == 0) {
                      return true;
                    }
                  });
                }else if(selectValue == 2) {
                  // 骑行，过滤出手表数据的骑行
                  this.sportsData = body.data.runList.filter((item) => {
                    if(item.type == 3) {
                      if(item.watch.sportType == 4 || item.watch.sportType == 15) {
                        return true;
                      }
                    }
                  });
                }else if(selectValue == 3) {
                  // 爬山，过滤出手表数据的爬山
                  this.sportsData = body.data.runList.filter((item) => {
                    if(item.type == 3 && item.watch.sportType == 8) {
                      return true;
                    }
                  });
                }else if(selectValue == 4) {
                  // 徒步模式，过滤出a手表数据的徒步
                  this.sportsData = body.data.runList.filter((item) => {
                    if(item.type == 3 && item.watch.sportType == 2) {
                      return true;
                    }
                  });
                }
                this.addOverlay();
              }
            }
          })
        }else {
          // 个人
          this.$http.get('/api/getSportsData',{
            params: {
              uid: this.$store.state.userData.user.id
            }
          }).then((body) => {
            if(!body.data.code) {
              this.currentPage = 1;
              map.clearOverlays();
              close();
              if(!body.data.new.length) {
                this.$Message.warning('还没有运动数据，快去运动吧');
              }else {
                let selectValue = this.select.selectValue; // 选择的类型
                if(selectValue == 1) {
                  // 户外跑模式，过滤出app数据的户外跑和手表数据的户外跑model=1&&type=0||1
                  this.sportsData = body.data.new.filter((item) => {
                    if(item.model == 1&&item.type == 0 || item.model == 1 && item.type == 1) {
                      return true;
                    }else if(item.type == 3 && item.watch.sportType == 0) {
                      return true;
                    }
                  });
                }else if(selectValue == 2) {
                  // 骑行，过滤出手表数据的骑行
                  this.sportsData = body.data.new.filter((item) => {
                    if(item.type == 3 && item.watch.sportType == 4 || item.type == 3 && item.watch.sportType == 15) {
                      return true;
                    }
                  });
                }else if(selectValue == 3) {
                  // 爬山，过滤出手表数据的爬山
                  this.sportsData = body.data.new.filter((item) => {
                    if(item.type == 3 && item.watch.sportType == 8) {
                      return true;
                    }
                  });
                }else if(selectValue == 4) {
                  // 徒步模式，过滤出a手表数据的徒步
                  this.sportsData = body.data.new.filter((item) => {
                    if(item.type == 3 && item.watch.sportType == 2) {
                      return true;
                    }
                  });
                }
              }
              this.addOverlay();
            }
          }).catch(() => {
            close();
          })

        }
      },
      addOverlay() {
        if(!this.sportsData.length) {
          return;
        }
        let datas = [];
        let needFetch = [];
        let currentPage = this.currentPage;
        let init_1 = currentPage * 10 - 10;
        let init_2 = currentPage * 10;
        let num = 0;

        for(let i = init_1; i < init_2;i++) {
          if(this.sportsData[i] && this.sportsData[i].model) {
            // app数据，可以直接获取经纬度
            datas.push({
              lng: this.sportsData[i].endLng,
              lat: this.sportsData[i].endLat
            })
          }else if(this.sportsData[i] && this.sportsData[i].watchZipFile) {
            // 判断是否有http开头
            if(this.sportsData[i].watchZipFile.indexOf('http://')!=-1) {
              needFetch.push(this.sportsData[i].watchZipFile);
            }else {
              needFetch.push('http://yyssb.ifitmix.com/'+this.sportsData[i].watchZipFile);
            }

          }
        }
        datas.forEach(item => {
          let point = new BMap.Point(item.endLng, item.endLat);
          let marker = new BMap.Marker(point);
          map.addOverlay(marker);
        });
        this.$Spin.show();
        if(!needFetch.length) {
          this.$Spin.hide();
        }
        needFetch.forEach((item,index) => {
          this.$http.get('/api/zipFileParse?zip_url=' + item).then(body => {
            num++;
            if(body.data.json && body.data.json.array.length) {
              let arr = body.data.json.array;
              let point = new BMap.Point(arr[arr.length - 1].lng, arr[arr.length - 1].lat);
              let marker = new BMap.Marker(point);
              map.addOverlay(marker);
              console.log(num);
              console.log(needFetch.length - 1);
              console.log(needFetch.length);
            }
            if(num == needFetch.length) {
              this.$Spin.hide();
            }
          })
        })
      }
    },
    computed: {
      loginState() {
        return this.$store.state.isLogin;
      }
    },
    mounted() {
      if(!this.loginState) {
        return;
      }
      map = new BMap.Map("allMap");
      let point = new BMap.Point(116.404, 39.915);
      map.centerAndZoom(point, 7);
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

      let geolocation = new BMap.Geolocation();
      geolocation.getCurrentPosition(function(r){
        if(this.getStatus() == BMAP_STATUS_SUCCESS){
          console.timeEnd('a');
          let point = new BMap.Point(r.point.lng, r.point.lat);
          map.centerAndZoom(point, 12);
        }
      },{enableHighAccuracy: true});

      this.fetchData();

      let cc = document.querySelector('.data-container');
      cc.addEventListener('scroll',this.ifScrollToBottom)
    },
    destroyed() {
//      let cc = document.querySelector('.data-container');
//      console.log(cc);
//      cc.removeEventListener('scroll',this.ifScrollToBottom)
    },
    components: {
      Login
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
    top: 50%;
    transform: rotate(-180deg) translateY(50%);
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
    justify-content: center;
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

  .right {
    flex: 1;
    display: flex;
  }
</style>
