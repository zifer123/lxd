<template>
  <div class="wrapper">
    <div class="joinUs">
      <a href="https://company.liepin.com/8358261/">
        <Button icon="person-add" class="btn" type="info" size="large">申请职位</Button>
      </a>
    </div>
    <div class="container">
      <div class="box">
        <Affix style="padding: 15px;" :offset-top="100">
          <Timeline>
            <TimelineItem>
              <Button @click="scrollToDiv('item1')" :type="activeItem=='item1'?'warning':'info'">APP产品测试工程师</Button>
            </TimelineItem>

            <TimelineItem>
              <Button @click="scrollToDiv('item2')" :type="activeItem=='item2'?'warning':'info'">大客户合作营销经理</Button>
            </TimelineItem>

            <TimelineItem>
              <Button @click="scrollToDiv('item3')" :type="activeItem=='item3'?'warning':'info'">国内渠道销售经理/总监</Button>
            </TimelineItem>
            <TimelineItem>
              <Button @click="scrollToDiv('item4')" :type="activeItem=='item4'?'warning':'info'">海外销售经理</Button>
            </TimelineItem>

            <TimelineItem>
              <Button @click="scrollToDiv('item5')" :type="activeItem=='item5'?'warning':'info'">跨境电商运营</Button>
            </TimelineItem>

            <TimelineItem>
              <Button @click="scrollToDiv('item6')" :type="activeItem=='item6'?'warning':'info'">结构工程师</Button>
            </TimelineItem>

            <TimelineItem>
              <Button @click="scrollToDiv('item7')" :type="activeItem=='item7'?'warning':'info'">电声开发工程师</Button>
            </TimelineItem>

            <TimelineItem>
              <Button @click="scrollToDiv('item8')" :type="activeItem=='item8'?'warning':'info'">联系方式</Button>
            </TimelineItem>
          </Timeline>
        </Affix>

        <div class="items">
          <Card class="item" id="item1" :class="{'active-item': activeItem == 'item1'}">
            <p slot="title">APP产品测试工程师</p>
            <h3 class="page-header">职位描述</h3>
            <ol class="command-list">
              <li>熟悉软件功能要求,测试提交bug,验证已解决的bug,从而将已解决的bug关闭</li>
              <li>熟悉软件研发要求,阅读设计文档,了解研发app需要实现的功能</li>
              <li>与运营部沟通,配合宣传节奏,协调各部门保持一致工作步调</li>
              <li>发版本前,将软件各功能完整测试发出</li>
            </ol>
            <h3 class="page-header">资格要求</h3>
            <ol class="command-list">
              <li>计算机相关专业；具备4年以上测试工作经验；</li>
              <li>熟悉一门或者几门编程语言 </li>
              <li> 掌握基本的软件测试理论，熟悉软件测试的基本方法、流程和规范；</li>
              <li>熟悉 windows操作系统，了解linux，可以搭建测试环境；</li>
              <li>熟练运用各种黑盒测试用例设计方法；</li>
              <li>熟悉的Sql Server，可以使用基本的sql语句辅助测试；；</li>
              <li>熟悉所测试系统和应用的需求，并对所在领域业务比较熟悉。</li>
            </ol>
            <a href="https://job.liepin.com/567_5673331/">
              <Button type="primary">申请职位</Button>
            </a>
          </Card>

          <Card class="item" id="item2" :class="{'active-item': activeItem == 'item2'}">
            <p slot="title">大客户合作营销经理</p>

            <h3 class="page-header">职位描述</h3>
            <ol class="command-list">
              <li>负责國內行業及較大客戶之合作銷售渠道開拓; </li>
              <li>維持客戶及公司方面即时沟通，确保客戶長期銷售公司產品； </li>
              <li>解決客戶之訂購及協助售後相關問題, 完成每月之銷售任務；</li>
              <li>向上级汇报项目的进展情况、客戶需求等信息。</li>
            </ol>
            <h3 class="page-header">资格要求</h3>
            <ol class="command-list">
              <li>熟悉消費類電子產品國內市場；</li>
              <li>熟悉大客戶、行業客戶之合作營銷； </li>
              <li>2年以上銷售經驗, 對銷售工作有濃厚興趣及熱情; </li>
              <li>思维清晰敏捷，积极主动、有责任感, 善于沟通协调，具有较强的团队合作精神和服务意识； </li>
              <li>熟悉使用辦公室Windows 或WPS軟件。</li>
            </ol>
            <a href="https://job.liepin.com/540_5409275/">
              <Button type="primary">申请职位</Button>
            </a>
          </Card>

          <Card class="item" id="item3" :class="{'active-item': activeItem == 'item3'}">
            <p slot="title">国内渠道销售经理/总监</p>

            <h3 class="page-header">职位描述</h3>
            <ol class="command-list">
              <li>负责国内销售渠道开拓；</li>
              <li>提出考托渠道的相关开发计划；  </li>
              <li>跟进并反馈渠道客户的建议及需求，并协调其他部门配合；</li>
              <li>维持客户及公司方面即时沟通，确保客户长期销售公司产品；</li>
              <li>解决库存及销售问题，完成每月的销售任务；</li>
              <li>向上级汇报项目的进展情况、客户需求等信息。</li>
            </ol>
            <h3 class="page-header">资格要求</h3>
            <ol class="command-list">
              <li>熟悉消费类电子产品渠道开发；</li>
              <li>对消费类电子产品市场, 有一定的认识； </li>
              <li>三年以上消费类电子产品品牌渠道开发；</li>
              <li>思维清晰敏捷，积极主动、有责任感, 善于沟通协调，具有较强的团队合作精神和服务意识； </li>
              <li>熟悉使用办公室Windows 或WPS软件；</li>
              <li>有驾照者优先；</li>
            </ol>
            <a href="https://job.liepin.com/540_5409264/">
              <Button type="primary">申请职位</Button>
            </a>
          </Card>

          <Card class="item" id="item4" :class="{'active-item': activeItem == 'item4'}">
            <p slot="title">海外销售经理</p>

            <h3 class="page-header">职位描述</h3>
            <ol class="command-list">
              <li>负责海外品牌销售渠道开拓;</li>
              <li>维持客户及公司方面即时沟通，确保客户长期销售公司产品；</li>
              <li>解决客户之订购及协助售后相关问题, 完成每月之销售任务；</li>
              <li>向上级汇报项目的进展情况、客户需求等信息。</li>
            </ol>
            <h3 class="page-header">资格要求</h3>
            <ol class="command-list">
              <li> 熟悉消费类电子产品海外渠道开发；</li>
              <li>熟悉消费类电子产品海外市场；</li>
              <li>4年以上消费类电子产品品牌海外渠道开发经验；</li>
              <li>英文检定至少通过6级；</li>
              <li>思维清晰敏捷，积极主动、有责任感, 善于沟通协调，具有较强的团队合作精神和服务意识；</li>
              <li>熟悉使用办公室Windows 或WPS软件；</li>
              <li>能独立出国洽谈客户；</li>
            </ol>
            <a href="https://job.liepin.com/486_4869914/">
              <Button type="primary">申请职位</Button>
            </a>
          </Card>

          <Card class="item" id="item5" :class="{'active-item': activeItem == 'item5'}">
            <p slot="title">跨境电商运营</p>

            <h3 class="page-header">职位描述</h3>
            <ol class="command-list">
              <li>负责跨境B2C电商之渠道开拓;</li>
              <li>维持客户及公司方面即时沟通，确保客户长期销售公司产品；</li>
              <li>解决客户之订购及协助售后相关问题, 完成每月之销售任务；</li>
              <li>向上级汇报项目的进展情况、客户需求等信息。</li>
            </ol>
            <h3 class="page-header">资格要求</h3>
            <ol class="command-list">
              <li>熟悉消费类电子产品海外市场；</li>
              <li>熟悉跨境电商之B2C运作模式；</li>
              <li>1年以上之销售工作经验, 对销售工作有浓厚兴趣及热情;</li>
              <li>通过国内英文6级检定;</li>
              <li>思维清晰敏捷，积极主动、有责任感, 善于沟通协调，具有较强的团队合作精神和服务意识；</li>
              <li>熟悉使用办公室Windows 或WPS软件。</li>
            </ol>
            <a href="https://job.liepin.com/540_5409237/">
              <Button type="primary">申请职位</Button>
            </a>
          </Card>

          <Card class="item" id="item6" :class="{'active-item': activeItem == 'item6'}">
            <p slot="title">结构工程师</p>

            <h3 class="page-header">职位描述</h3>
            <ol class="command-list">
              <li>负责项目结构设计工作，拟定工作计划，推动各主要节点按时完成，确保结构设计质量与成本控制；</li>
              <li>参与产品创意及ID评估，提出专业意见，确保产品的可制造性；</li>
              <li>负责新产品外购结构物料的寻找、供应商咨询与寄样、测试和验证；</li>
              <li>负责产品结构设计与模具设计之间的沟通及评估工作，保证产品的使用性能及良好生产工艺；</li>
              <li>负责主导新产品的小批量试产和试产评审会议；</li>
              <li>负责产品的BOM、相关图纸、产品技术标准、产品使用说明书等技术文件的编制和输出；</li>
              <li>负责产品生命周期内的结构工艺改善、成本优化；</li>
              <li>研究探索新工艺新技术，并且很好的应用在公司的产品上。</li>
            </ol>
            <h3 class="page-header">资格要求</h3>
            <ol class="command-list">
              <li>机械设计相关专业毕业；</li>
              <li>三年以上消费类产品结构设计经验，有独立设计的产品上市，耳机、三防户外产品、运动健身周边产品经验优先；</li>
              <li>熟悉五金/塑料/软胶等常用材料性能特性，敢于创新与突破，有全新机构的创造与整合设计能力；</li>
              <li>有较强的学习能力，对行业新趋势、新工艺、新技术非常敏感；</li>
              <li>熟悉产品的设计流程和规范，熟悉产品可靠性测试规范；</li>
              <li>具备独立的产品结构设计能力，能熟练使用PRO/E,CAD，Solidworks等设计软件进行复杂结构的2D&3D设计；</li>
              <li>具备良好的分析问题和解决问题能力；</li>
              <li>熟悉产品的设计流程和规范，熟悉产品可靠性测试规范；</li>
              <li>具备良好的沟通、协调和执行能力，具有良好的开拓精神和团队合作精神；</li>
              <li>工作积极主动，协调推动加工厂解决工艺设计方面问题；</li>
              <li>有驾照者优先考虑。</li>
            </ol>
            <a href="https://job.liepin.com/449_4491010/">
              <Button type="primary">申请职位</Button>
            </a>
          </Card>

          <Card class="item" id="item7" :class="{'active-item': activeItem == 'item7'}">
            <p slot="title">电声开发工程师</p>

            <h3 class="page-header">职位描述</h3>
            <ol class="command-list">
              <li>声学产品ID阶段的声学结构评估；</li>
              <li>产品声学结构的设计及策划；</li>
              <li>产品样品声学性能的调试、测试、验证、改善，产品试产阶段的分析总结；</li>
              <li>电声产品的系统设计、调试、测试；</li>
              <li>电声零部件的打样，收集供方信息，零部件产品标准确认。</li>
              <li>电声标准规格的建立，资料的制作</li>
            </ol>
            <h3 class="page-header">资格要求</h3>
            <ol class="command-list">
              <li>电子相关专业本科以上学历，精通模数电路设计；扎实的理论功底；多年以上专业音频产品的研发经验；</li>
              <li>熟练使用各类电子测试仪表，熟悉电子电路的调试工艺；</li>
              <li>责任心强，勤奋、敬业、具有良好的沟通、协调能力、思路清晰、敏捷，富有创新精神，爱好音响。</li>
            </ol>
            <a href="https://job.liepin.com/597_5971048/">
              <Button type="primary">申请职位</Button>
            </a>
          </Card>

          <Card class="item" id="item8" :class="{'active-item': activeItem == 'item8'}">
            <p slot="title">联系方式</p>

            <p>电子邮箱：sityz@ifitmix.com</p>
            <p>办公地址：深圳市南山区西丽街道朗山路28号通产集团3栋1楼</p>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  var scroll = document.documentElement || document.body;
  export default {
    data() {
      return {
        activeItem: 'item1',
        offsetTopArr: []
      }
    },
    methods: {
      handleScroll(e) {
        var scrollTop = scroll.scrollTop + 50; //50是导航条的高度
        console.log('滚动高度：' + scrollTop);
        var activeItem = this.offsetTopArr.find((item,index) => {
          return Math.abs(scrollTop - item.offsetTop) < 10;
        });
        if(activeItem) {
          this.activeItem = activeItem.id;
        }else {
          // 判断是否是直接拖动滚动条造成直接顶部或者底部
          if(scrollTop >= 50 && scrollTop<= 70) {
            this.activeItem = 'item1';
          }else if(Math.abs(scroll.clientHeight + scroll.scrollTop - scroll.scrollHeight) <= 15) {
            this.activeItem = 'item7';
          }
        }
      },
      scrollToDiv(where) {
        // 根据传过来的id名获取offsetTop
        // 先移除handleScroll事件
        window.removeEventListener('scroll',this.handleScroll);
        this.activeItem = where;
        var offsetTop = document.getElementById(where).offsetTop - 50; // 50是导航的高度
        window.scrollTo(0,offsetTop);
        setTimeout(() => {
          window.addEventListener('scroll',this.handleScroll);
        },100)
      }
    },
    mounted() {
      window.addEventListener('scroll',this.handleScroll);
      document.querySelectorAll('.item').forEach((item,index) => {
        this.offsetTopArr.push({
          offsetTop: item.offsetTop,
          id: 'item' + (index + 1)
        });
      });
    },
    destroyed() {
      window.removeEventListener('scroll',this.handleScroll)
    }
  }
</script>

<style scoped>
  .joinUs {
    position: relative;
    height: 300px;
    background-image: url(./imgs/job_back.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  .joinUs .btn {
    position: absolute;
    left: 50%;
    bottom: 20px;
    transform: translateX(-50%);
  }
  .wrapper {
    background-color: #2b2b2b !important;
  }
  .box {
    display: flex;
  }
  .items {
    flex: 1;
  }
  .items .item {
    margin: 20px;
  }
  .command-list {
    padding: 15px;
  }
  .page-header {
    border-bottom: 1px solid #2db7f5;
  }
  .items .active-item {
    background-color: transparent;
    color: #fff;
  }
  .items .active-item .ivu-card-head p {
    color: #fff;
  }
</style>
