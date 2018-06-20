<template>
  <div class="my-box">
    <div class="container">
      <div class="headbox">
        <img class="headimg" :src="avatar" alt="">
        <h3>{{ $store.state.userData.user.name?$store.state.userData.user.name:'运动爱好者' }}</h3>
        <!--<p>已坚持运动100天</p>-->
      </div>

      <div class="my-body">
        <h2>运动汇总</h2>
        <div id="main" class="my-chart"></div>
        <Row class="flex-1">
          <Col span="12" class="custom-col">
          <div class="color-block sport-type1"></div>
          <div class="color-right">
            <span class="sport-number" v-text="type_0.value">30</span>次 <span class="sport-type">室外跑</span>
            <h2><span v-text="type_0.distance">0</span>公里</h2>
          </div>
          </Col>
          <Col span="12" class="custom-col">
          <div class="color-block sport-type2"></div>
          <div class="color-right">
            <span class="sport-number" v-text="type_1.value">30</span>次 <span class="sport-type">室内跑</span>
            <h3><span v-text="type_1.distance">0</span>公里</h3>
          </div>
          </Col>
          <Col span="12" class="custom-col">
          <div class="color-block sport-type3"></div>
          <div class="color-right">
            <span class="sport-number" v-text="type_8.value">30</span>次 <span class="sport-type">登山</span>
            <h3><span v-text="type_8.distance">0</span>公里</h3>
          </div>
          </Col>
          <Col span="12" class="custom-col">
          <div class="color-block sport-type4"></div>
          <div class="color-right">
            <span class="sport-number" v-text="type_2.value">30</span>次 <span class="sport-type">徒步</span>
            <h3><span v-text="type_2.distance">0</span>公里</h3>
          </div>
          </Col>
          <Col span="12" class="custom-col">
          <div class="color-block sport-type5"></div>
          <div class="color-right">
            <span class="sport-number" v-text="type_4.value">30</span>次 <span class="sport-type">公路车</span>
            <h3><span v-text="type_4.distance">0</span>公里</h3>
          </div>
          </Col>
          <Col span="12" class="custom-col">
          <div class="color-block sport-type6"></div>
          <div class="color-right">
            <span class="sport-number" v-text="type_15.value">30</span>次 <span class="sport-type">山地车</span>
            <h3><span v-text="type_15.distance">0</span>公里</h3>
          </div>
          </Col>
        </Row>
      </div>

      <div class="my-footer">
        <h1 class="odd-line sport-title">
          <p>运动记录</p>
          <span class="more">加载更多</span>
        </h1>
        <div class="sport-item" v-for="(item,index) in sportData" :class="{'even-line': index%2==0,'odd-line': index%2==1}">
          <p class="sport-date">{{ new Date(item.startTime).Format('yyyy.MM.dd hh:mm') }}</p>
          <p class="sport-type">{{ item | sportType }}</p>
          <div class="sport-distance">
            <p class="title">距离</p>
            <p>{{ item.model?item.distance/1000:item.watch.totalDistance/1000 }}KM</p>
          </div>
          <div class="sport-runtime">
            <p class="title">时长</p>
            <p>{{ item.runTime | runTime }}</p>
          </div>
          <div class="sport-caroli">
            <p class="title">卡路里</p>
            <p v-text="item.calorie">0</p>
          </div>
          <div class="sport-caroli">
            <p class="title">配速</p>
            <p>{{ item | speed }}</p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  // 引入 ECharts 主模块
  var echarts = require('echarts/lib/echarts');
  // 引入柱状图
  require('echarts/lib/chart/pie');
  // 引入提示框和标题组件
  require('echarts/lib/component/tooltip');
  require('echarts/lib/component/title');
  export default {
    data() {
      return {
        sportData: [],
        type_0: {
          value: 0,
          distance: 0
        },
        type_1: {
          value: 0,
          distance: 0
        },
        type_2: {
          value: 0,
          distance: 0
        },
        type_4: {
          value: 0,
          distance: 0
        },
        type_8: {
          value: 0,
          distance: 0
        },
        type_15: {
          value: 0,
          distance: 0
        },
      }
    },
    filters: {
      runTime: function (value) {
        if (!value) return ''
        var hours = value / 1000 / 60 /60;
        var minutes = value / 1000 / 60;
        var seconds = value / 1000;
        hours = hours >= 1? Math.floor(hours) : '00';
        minutes = minutes >=1 ? Math.floor(minutes%60) : '00';
        seconds = seconds >= 60 ? Math.round(seconds%60) : Math.round(seconds);

        // 是否补0
        hours = hours.toString()[1]?hours:'0' + hours;
        minutes = minutes.toString()[1]?minutes:'0' + minutes;
        seconds = seconds.toString()[1]?seconds:'0' + seconds;
        return hours + ':' + minutes + ':' +seconds;
      },
      speed: function (value) {
        if (!value) return ''
        var runTime = value.runTime;
        var distance = value.model?value.distance:value.watch.totalDistance;
//        debugger;
        var speed = runTime / (distance / 1000);
        var minutes = speed / 1000 / 60;
        var seconds = speed / 1000;
//        debugger;
        minutes = minutes >=1 ? Math.floor(minutes) : '00';
        seconds = seconds >= 60 ? Math.round(seconds%60) : Math.round(seconds);

        // 是否补0
        minutes = minutes.toString()[1]?minutes:'0' + minutes;
        seconds = seconds.toString()[1]?seconds:'0' + seconds;
        return minutes + "'" +seconds +'"';
      },
      sportType: function (value) {
        if (!value) return '测试数据'
        let type = value.model?value.type:value.watch.sportType;
        let name;
        switch(type) {
          case 0:
            name = '户外跑';
            break;
          case 1:
            name = '室内跑';
            break;
          case 2:
            name = '徒步';
            break;
          case 4:
            name = '公路骑行';
            break;
          case 8:
            name = '登山';
            break;
          case 15:
            name = '山地骑行';
            break;
        }
        return name;
      }
    },
    mounted() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('main'));
      let type_0 = {
        value: 0,
        distance: 0,
        name:'室外跑',
        selected: true,
        itemStyle: {
          color: '#FCB43C'
        }
      };
      let type_1 = {
        value: 0,
        distance: 0,
        name:'室内跑',
        selected: true,
        itemStyle: {
          color: '#7287FE'
        }
      };
      let type_2 = {
        value: 0,
        distance: 0,
        name:'徒步',
        selected: true,
        itemStyle: {
          color: '#62F374'
        }
      };
      let type_4 = {
        value: 0,
        distance: 0,
        name:'公路骑行',
        selected: true,
        itemStyle: {
          color: '#F1768B'
        }
      };
      let type_8 = {
        value: 0,
        distance: 0,
        name:'登山',
        selected: true,
        itemStyle: {
          color: '#4BE6C6'
        }
      };
      let type_15 = {
        value: 0,
        distance: 0,
        name:'山地车',
        selected: true,
        itemStyle: {
          color: '#FFF722'
        }
      };
      // 绘制图表
      console.log(this.$store.state.userData);
      this.$http.get('/api/getSportsData',{
        params: {
          uid: this.$store.state.userData.user.id
        }
      }).then(body => {
        if(body.data.new.length) {
          // 有运动记录 统计各类型的
          // 户外跑分为app和手表
          var datas = body.data.new;
          this.sportData = datas;
          datas.forEach((item) => {
            if(item.model == 1 && item.type == 0 || item.model == 1 && item.type == 1) {
              // 户外跑
              type_0.value++;
              type_0.distance += item.distance;
            }else if(item.watch && item.watch.sportType == 0) {
              // 手表户外跑
              type_0.value++;
              type_0.distance += item.watch.totalDistance;
            }else if(item.model == 2 && item.type == 1) {
              // 室内跑
              type_1.value++;
              type_1.distance += item.distance;
            }else if(item.type == 3 && item.watch.sportType == 1) {
              // 手表室内跑（跑步机）
              type_1.value++;
              type_1.distance += item.watch.totalDistance;
            }else if(item.watch && item.watch.sportType == 2) {
              // 手表徒步
              type_2.value++;
              type_2.distance += item.watch.totalDistance;
            } else if(item.watch && item.watch.sportType == 4) {
              // 手表公路骑行
              type_4.value++;
              type_4.distance += item.watch.totalDistance;
            }else if(item.watch && item.watch.sportType == 8) {
              // 手表公路爬山
              type_8.value++;
              type_8.distance += item.watch.totalDistance;
            }else if(item.watch && item.watch.sportType == 15) {
              // 手表公山地车
              type_15.value++;
              type_15.distance += item.watch.totalDistance;
            }
          });
          this.$set(this.type_0,'value',type_0.value);
          this.$set(this.type_0,'distance',Math.round(type_0.distance/1000));
          this.$set(this.type_1,'value',type_1.value);
          this.$set(this.type_1,'distance',Math.round(type_1.distance/1000));
          this.$set(this.type_2,'value',type_2.value);
          this.$set(this.type_2,'distance',Math.round(type_2.distance/1000));
          this.$set(this.type_4,'value',type_4.value);
          this.$set(this.type_4,'distance',Math.round(type_4.distance/1000));
          this.$set(this.type_8,'value',type_8.value);
          this.$set(this.type_8,'distance',Math.round(type_8.distance/1000));
          this.$set(this.type_15,'value',type_15.value);
          this.$set(this.type_15,'distance',Math.round(type_15.distance/1000));
          var option = {
            tooltip: {
              trigger: 'item',
              formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            series: [
              {
                name:'访问来源',
                type:'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                selectedOffset: 0.5,
                label: {
                  normal: {
                    show: false,
                    position: 'center'
                  },
                  emphasis: {
                    show: true,
                    textStyle: {
                      fontSize: '30',
                      fontWeight: 'bold'
                    }
                  }
                },
                labelLine: {
                  normal: {
                    show: false
                  }
                },
                data:[
                  type_0,
                  type_1,
                  type_2,
                  type_4,
                  type_8,
                  type_15
                ]
              }
            ]
          };
          myChart.setOption(option);
          var oDiv = document.createElement('h2');
          oDiv.style.position = 'absolute';
          oDiv.style.left = '50%';
          oDiv.style.top = '50%';
          oDiv.style.textAlign = 'center';
          oDiv.style.transform = 'translate(-50%,-50%)';
          var oH3 = document.createElement('h3');
          var oP = document.createElement('p');
          oDiv.appendChild(oH3);
          oDiv.appendChild(oP);
          oH3.innerText = '总运动次数';
          oP.innerText = type_0.value + type_1.value + type_2.value + type_4.value + type_8.value + type_15.value;
          document.querySelector('.my-chart').appendChild(oDiv);
        }
      })
    },
    computed: {
      avatar() {
        return this.$store.state.userData.user && this.$store.state.userData.user.avatar ? this.$store.state.userData.user.avatar : '/static/imgs/default/default.jpg'
      }
    }
  }
</script>

<style scoped>
  .my-box {
    background-image: url(./imgs/rousing_warp@2.jpg);
    background-size: cover;
    background-position: center;
    color: #fff;
    overflow-y: hidden;
  }
  .my-box .container {
    height: 100%;
    display: flex;
    overflow-y: auto;
    flex-direction: column;
    background-color: rgba(10,10,10,0.5);
  }
  .headbox {
    text-align: center;
    padding: 20px 0;
  }
  .headbox .headimg {
    width: 50px;
    height: 50px;
    border: 2px solid #fff;
    border-radius: 50%;
  }
  .my-body {
    display: flex;
    padding: 0 120px;
  }
  .my-chart {
    width: 250px;
    height: 250px;
  }
  .color-block {
    padding: 7px;
    float: left;
    border-radius: 3px;
  }
  .color-right {
    float: left;
    color: #A4A39F;
    line-height: 20px;
    padding-left: 20px;
  }
  .custom-col {
    padding: 18px;
  }
  .sport-number {
    color: #fff;
    font-size: 28px;
  }
  .my-body .sport-type {
    padding: 7px;
  }
  /* 室外 */
  .my-body .sport-type1 {
    background-color: #FCB43C;
  }
  /* 室内 */
  .my-body .sport-type2 {
    background-color: #7287FE;
  }
  /* 登山 */
  .my-body .sport-type3 {
    background-color: #4BE6C6;
  }
  /* 徒步 */
  .my-body .sport-type4 {
    background-color: #62F374;
  }
  /* 公路 */
  .my-body .sport-type5 {
    background-color: #F1768B;
  }
  /* 山地 */
  .my-body .sport-type6 {
    background-color: #FFF722;
  }


  .my-footer {
    flex: 1;
    flex-direction: column;
    overflow-y: auto;
  }
  /*.my-footer::-webkit-scrollbar {display:none}*/
  .odd-line {
    border-bottom: 1px solid #FBC946;
  }
  .even-line {
    border-bottom: 1px solid #F07057;
  }
  .sport-title {
    display: flex;
    justify-content: space-between;
  }
  .more {
    cursor: pointer;
    font-size: 14px;
  }
  .sport-item {
    display: flex;
    align-items: center;
    text-align: center;
    padding: 5px 0;
    justify-content: space-between;
  }
  .sport-item .title {
    color: #F37E1F
  }
</style>
