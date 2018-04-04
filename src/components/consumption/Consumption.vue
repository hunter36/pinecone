<template>
  <div class="consumption">
      <div class="information">
          <span class="left">消费总额</span>
          <span class="right">1999.48元</span>
      </div>
      <div class="information">
          <span class="left">订单编号</span>
          <span class="right">26565448856</span>
      </div>
      <div class="information">
          <span class="left">使用卡片</span>
          <span class="right">捷富手机信用卡</span>
      </div>
      <div class="information">
          <span class="left">支付类型</span>
          <span class="right">信用支付</span>
      </div>
      <div class="information">
          <span class="left">下单店铺</span>
          <span class="right">中国移动(光荣大地中山路特约代销店)</span>
      </div>
      <div class="information">
          <span class="left">交易时间</span>
          <span class="right">2017-04-28 12:23:34</span>
      </div>
      <img src="../../assets/img/jiaoyicg@2x.png" alt="">
  </div>
</template>

<script>

</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    .consumption{
        background: #fff;
        width: 100%;
        margin-top: 0.2rem;
        padding-bottom: 0.35rem;
    }
    .information{
        height: 1.07rem;
        padding: 0 0.3rem;
    }
    .left{
        float: left;
        height:0.28rem; 
        font-size:0.28rem;
        font-family:PingFangSC-Light;
        color:rgba(102,102,102,1);
        line-height:0.36rem;
        margin-top: 0.4rem;
    }
    .right{
        float: right;
        height:0.28rem; 
        font-size:0.28rem;
        font-family:PingFangSC-Light;
        color:rgba(51,51,51,1);
        line-height:0.36rem;
        margin-top: 0.4rem;
    }
    img{
        width: 1.86rem;
        height: 1.06rem;
        position: absolute;
        right: 1.32rem;
        top: 1.48rem
    }
</style>

