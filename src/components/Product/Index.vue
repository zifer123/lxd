<template>
  <div>
    <div class="first"></div>
    <div class="container">
      <Button>热销装备</Button>
      <Row :gutter="16">
        <Col :xs="24" :sm="8" :md="8" :lg="8">
          <div class="img-box">

          </div>
        </Col>
        <Col :xs="24" :sm="8" :md="8" :lg="8">
          <div class="img-box">

          </div>
        </Col>
        <Col :xs="24" :sm="8" :md="8" :lg="8">
          <div class="img-box">

          </div>
        </Col>
      </Row>
    </div>
  </div>
</template>

<style scoped>
  .first {
    height: 1200px;
    background-image: url(./imgs/watchPoster.png);
    background-position: center;
  }
  .img-box {
    height: 622px;
    background-color: #fff;
  }
  .img-responsive {
    max-width: 100%;
  }
</style>
