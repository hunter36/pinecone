<template>
	<!-- <h1>This is card module!</h1> -->
	<div class="box">
		<div id="detail-top">
        <div class="cardBox">
            <div class="logoBox">
                <div class="img">
                    <img src="../../assets/img/logo@2x.png" alt="加载中...">   
                </div>
                <div class="logo-right">
                    <div>
                        <span class="shopping-card">狂欢购物卡</span>
                        <span class="limit">您的预估额度为</span>
                    </div>
                    <div>
                        <span class="company">万达集团</span>
                        <span class="money"><span class="dollar">¥</span>{{baseMsg.money}}</span>
                    </div>
                </div>
            </div>   
            <div class="line"></div>
            <div class="join">
                <a href="">
                    进入查看使用范围
                    <img src="../../assets/img/jinru@2x.png" alt="进入">
                </a>
            </div>
            <img src="../../assets/img/ditu@2x.png" alt="cardlogo">
        </div>
      </div>
      <div id="detail-main">
             <div>
              <span>发卡方</span>
              <span>{{baseMsg.company}}</span>
            </div>
            <div>
                <span>支付方式</span>
                <span>{{baseMsg.payType}}</span>
            </div>
            <div>
                <span>申请条件</span>
                <span>{{baseMsg.apply}}</span>
            </div>
            <div>
                <span>有效期</span>
                <span>{{baseMsg.indate}}</span>
            </div>
            <div>
                <span>卡片应用场景</span>
                <span>{{baseMsg.useCard}}</span>
            </div>
            <section class="wrop">
                <p>应用范围</p>
                <p>{{baseMsg.useRange}}</p>
            </section>
            <section class="wrop">
                <p>卡片介绍</p>
                <p>该卡是{{baseMsg.cardIntroduce}}公司旗下产品...</p>
            </section>
          
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
      baseMsg: "",
    };
  },
  // mounted() {
  //   axios.get("./static/data.json").then(res => {
  //     	console.log("11",res);
  //     	this.baseMsg = res.data.data.baseMsg;
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
.box{
	width: 100%;
	background: #F0F2F5;	
}
#detail-top {
  margin: .2rem .3rem .3rem .3rem;
}
.cardBox {
  padding-top: .38rem;
  border-radius: .28rem;
  box-sizing: border-box;
  position: relative;
  background: linear-gradient(to right, #3995ff, #7bc5ff);
}
.logoBox {
  text-align: left;
  margin: 0 0.38rem;
  display: flex;
}
.img {
  width: .96rem;
  height: .96rem;
}
.logoBox img {
  width: .96rem;
  float: left;
  margin-right: .28rem;
}
.logo-right {
  height: .96rem;
  flex: 1;
  margin-left: .28rem;
  display: inline-block;
  vertical-align: middle;
}
.logo-right div {
  margin-top: .04rem;
  display: flex;
  justify-content: space-between;
}
.shopping-card {
  font-size: .34rem;
  color: #fefefe;
  font-family: PingFangSC-Medium;
}
.limit {
  color: #ffffff;
  font-size: .22rem;
  font-family: PingFangSC-Light;
}
.company {
  color: #fefefe;
  font-size: .28rem;
  font-family: PingFangSC-Light;
}
.money {
  color: #fff;
  font-size: .3rem;
  font-family: PingFang SC;
}
.dollar {
  font-size: .3rem;
}
.line {
  width: 6.36rem;
  height: 1px;
  margin: 0 auto;
  margin-top: .89rem;
  background: rgba(255, 255, 255, 1);
  opacity: 0.35;
}
.join {
  font-size: .28rem;
  padding: .42rem 0;
  text-align: center;
}
.join a {
  text-decoration: none;
  font-family: PingFangSC-Light;
  color: #fefefe;
}
.join img {
  width: .28rem;
  margin-left: .19rem;
  vertical-align: middle;
}
.cardBox > img {
  width: 2.14rem;
  height: 2.42rem;
  position: absolute;
  bottom: 0;
  right: 0;
  opacity: 0.2;
}
#detail-main {
  height: auto;
  padding: 0 .56rem;
  background: #fff;
}
#detail-main div {
  height: .84rem;
  line-height: .84rem;
  display: flex;
  border-bottom: 1px solid #f0f2f5;
  justify-content: space-between;
}
#detail-main div > span:nth-last-child(1) {
  color: #333;
}
#detail-main div span {
  font-size: .26rem;
  color: #666666;
}
.wrop{
	font-size: .26rem;
	border-bottom: 1px solid #f0f2f5;
}
.wrop p{
	line-height: .8rem;
}
.wrop p:nth-child(1){
	color: #666;
}
.wrop p:nth-child(2){
	color: #333;
}
.btn {
  position: fixed;
  bottom: 0;
  color: #ffffff;
  height: 1.18rem;
  width: 100%;
  font-size: .36rem;
  text-align: center;
  line-height: 1.18rem;
  background: #ffb745;
}
</style>