<template>
	<!-- <h1>This is card module!</h1> -->
	<div class="box">
    <div id="detail-main">
        <div class="param">
            <span>息费参数</span>
        </div>
        <div>
            <span>会员费金额</span>
            <span>{{param.memberFee}}元</span>
        </div>
        <div>
            <span>账单日</span>
            <span>{{param.accountDate}}</span>
        </div>
        <div>
            <span>账单统计期</span>
            <span>{{param.accountStatistics}}</span>
        </div>
        <div>
            <span>到期还款日</span>
            <span>{{param.dueDate}}</span>
        </div>
        <div>
            <span>最低单笔消费金额</span>
            <span>{{param.lowestConsume}}</span>
        </div>
        <div>
            <span>最低账单分期金额</span>
            <span>{{param.lowestAging}}</span>
        </div>
        <div id="lv">
            <span>可分期期数及费率</span>
        </div>
        <div class="fq">
            <span>8%/期（分3期）、6%/期（分6期）、5%/期（分9期）、4%/期（分12期）、3%/期（分18期）、1.8%/期（分24期）</span>
        </div>
    </div>
      <div class="btn">
          立即申请
      </div>
	</div>
</template>
<script>
// import axios from "axios";
export default {
  data() {
    return {
      param: ""
    };
  },
  // mounted() {
  //   axios.get("/static/data.json").then(res => {
  //     console.log("11", res);
  //     this.param = res.data.data.param;
  //   });
  // }
};
</script>

<style scoped>
h1 {
  color: rgb(5, 110, 234);
}
* {
  margin: 0;
  padding: 0;
}
.box {
  width: 100%;
  background: #f0f2f5;
}

#detail-main {
  height: auto;
  padding: 0 0.56rem;
  background: #fff;
  margin-top: .2rem;
}
#detail-main div {
  height: 0.84rem;
  line-height: 0.84rem;
  display: flex;
  border-bottom: 1px solid #f0f2f5;
  justify-content: space-between;
}
#detail-main .param{
  border-bottom: none;
}
#detail-main>.param span{
  margin-top: .1rem;
  font-size: .3rem;
}
#detail-main div > span:nth-last-child(1) {
  color: #333;
}
#detail-main div span {
  font-size: 0.26rem;
  color: #666666;
}
#detail-main>#lv{
  border-bottom: none;
}
#detail-main>#lv>span{
  color: #666666;
}
#detail-main>.fq{
  height: auto;
  line-height: .48rem;
  padding-bottom: .2rem;
}
.btn {
  position: fixed;
  bottom: 0;
  color: #ffffff;
  height: 1.18rem;
  width: 100%;
  font-size: 0.36rem;
  text-align: center;
  line-height: 1.18rem;
  background: #ffb745;
}
</style>