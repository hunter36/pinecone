<template>
  <div class="credit">
      <ul>
        <li>
          <img src="../../assets/img/xiaofei@2x.png" class="left">
          <div class="refund">
            <p class="title">
              <span class="title-t">退款-阿玛尼星光大道店</span>
              <a href="#">+ 576.50</a>
            </p>
            <p class="card">
              <span>赫美轻奢虚拟卡（023）</span>
              <span>10-12 12:34</span>
            </p>
          </div>
          <img src="../../assets/img/jinru.png" class="right">
        </li>
        <li>
          <img src="../../assets/img/xiaofei@2x.png" class="left">
          <div class="refund">
            <p class="title">
              <span class="title-t">退款-阿玛尼星光大道店</span>
              <a href="#">- 200.50</a>
            </p>
            <p class="card">
              <span>赫美轻奢虚拟卡（023）</span>
              <span>10-12 12:34</span>
            </p>
          </div>
          <img src="../../assets/img/jinru.png" class="right">
        </li>
        <li>
          <img src="../../assets/img/zhangdan@2x.png" class="left">
          <div class="refund">
            <p class="title">
              <span class="title-t">账单分期</span>
              <a href="#">2376.50（分6期）</a>
            </p>
            <p class="card">
              <span>赫美轻奢虚拟卡（023）</span>
              <span>10-12 12:34</span>
            </p>
          </div>
          <img src="../../assets/img/jinru.png" class="right">
        </li>
        <li>
          <img src="../../assets/img/huankuan@2x.png" class="left">
          <div class="refund">
            <p class="title">
              <span class="title-t">还款-自动扣款</span>
              <a href="#">+ 8766.50</a>
            </p>
            <p class="card">
              <span>赫美轻奢虚拟卡（023）</span>
              <span>10-12 12:34</span>
            </p>
          </div>
          <img src="../../assets/img/jinru.png" class="right">
        </li>
        <li>
          <img src="../../assets/img/huankuan@2x.png" class="left">
          <div class="refund">
            <p class="title">
              <span class="title-t">还款-主动还款</span>
              <a href="#">+ 8766.50</a>
            </p>
            <p class="card">
              <span>赫美轻奢虚拟卡（023）</span>
              <span>10-12 12:34</span>
            </p>
          </div>
          <img src="../../assets/img/jinru.png" class="right">
        </li>
        <li>
          <img src="../../assets/img/huiyuan@2x.png" class="left">
          <div class="refund">
            <p class="title">
              <span class="title-t">会员费</span>
              <a href="#">- 8766.50</a>
            </p>
            <p class="card">
              <span>赫美轻奢虚拟卡（023）</span>
              <span>10-12 12:34</span>
            </p>
          </div>
          <img src="../../assets/img/jinru.png" class="right">
        </li>
        <li>
          <img src="../../assets/img/huiyuan@2x.png" class="left">
          <div class="refund">
            <p class="title">
              <span class="title-t">会员费-减免</span>
              <a href="#">+ 8766.50</a>
            </p>
            <p class="card">
              <span>赫美轻奢虚拟卡（023）</span>
              <span>10-12 12:34</span>
            </p>
          </div>
          <img src="../../assets/img/jinru.png" class="right">
        </li>
      </ul>
  </div>
</template>

<script>

</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  list-style: none;
}

.credit{
  width: 100%;
  background: #fff;
  margin-top: 0.2rem
}
ul{
  padding-left: 0.24rem;
}
li{
  height: 1.8rem;
  border-bottom: 0.01rem solid #e6e6e6;
  padding-right: 0.3rem
}
li .left{
  width: 0.84rem;
  height: 0.84rem;
  margin-top: 0.48rem;
  margin-right: 0.29rem;
  float: left;
}
li .right{
  width: 0.15rem;
  height: 0.29rem;
  margin-top: 0.75rem;
  float: right;
}
.refund{
  float: left;
  width: 5.33rem;
  position: relative;
  top: 0.45rem
}
.title{
  height: 0.36rem;
  margin-bottom: 0.24rem;
  display: flex;
	justify-content: space-between;
}
 .title .title-t{
  height:0.29rem; 
  font-size:0.3rem;
  font-family:PingFangSC-Light;
  color:rgba(51,51,51,1);
  line-height:0.36rem;
}
 .title a{
  text-decoration: none;
  height:0.22rem; 
  font-size:0.28rem;
  font-family:PingFangSC-Medium;
  color:rgba(51,51,51,1);
  line-height:0.36rem
}
.card{
  height: 0.36rem;
  display: flex;
	justify-content: space-between;
}
.card span{
  height:0.23rem; 
  font-size:0.24rem;
  font-family:PingFangSC-Light;
  color:rgba(153,153,153,1);
  line-height:0.36rem;
}
</style>

