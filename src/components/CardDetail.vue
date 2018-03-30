<template>
  <div>
      <div id="detail-top">
        <div class="cardBox">
            <div class="logoBox">
                <div class="img">
                    <img src="../assets/logo@2x.png" alt="加载中...">   
                </div>
                <div class="logo-right">
                    <div>
                        <span class="shopping-card">狂欢购物卡</span>
                        <span class="limit">您的预估额度为</span>
                    </div>
                    <div>
                        <span class="company">万达集团</span>
                        <span class="money">¥2300.00</span>
                    </div>
                </div>
            </div>   
            <div class="line"></div>
            <div class="join">
                <a href="">
                    进入查看使用范围
                    <img src="../assets/jinru@2x.png" alt="进入">
                </a>
            </div>
            <img src="../assets/ditu@2x.png" alt="cardlogo">
        </div>
      </div>
      <div id="detail-main">
          <div>
              <span>发卡方</span>
              <span>赫美集团</span>
          </div>
          <div>
              <span>支付方式</span>
              <span>信用支付</span>
          </div>
          <div>
              <span>申请条件</span>
              <span>年龄在18-35岁之间</span>
          </div>
          <div>
              <span>有效期</span>
              <span>6个月</span>
          </div>
          <div>
              <span>卡片应用场景</span>
              <span>电商</span>
          </div>
          <div>
              <span>应用范围</span>
              <span>欧蓝-Ostore</span>
          </div>
          <div>
              <span>卡片介绍</span>
          </div>
          <div>
              <span>该卡是***公司旗下产品...</span>
          </div>
      </div>
      <div class="btn">
          立即申请
      </div>
  </div>
</template>
<script>
export default {
  name: "cardDetail",
  components: {},
  data() {
    return {};
  }
};
</script>
<style scoped>
#detail-top {
    height: 11.5rem;
    background: #f0f2f5;
}
.cardBox {
    width: 21.56rem;
    height: 10.4375rem;
    margin: 0 auto;
    padding-top: 1.19rem;
    border-radius: 0.875rem;
    box-sizing: border-box;
    position: relative;
    background: linear-gradient(to right,#3995FF, #7BC5FF);
}
.logoBox {
    text-align: left;
    margin:0 0.875rem;
    display: flex;
}
.img{
    width:3rem;
}
.logoBox img{
    width: 3rem;
    margin-right: 0.875rem;
    vertical-align: middle;    
}
.logo-right{
    height: 3rem;
    flex: 1;
    margin-left: 0.875rem;
    display: inline-block;
    vertical-align: middle;
}
.logo-right div{
    margin-top:4px;
    display: flex;
    justify-content: space-between;
}
.shopping-card {
    font-size: 1.0625rem;
    color: #FEFEFE;
}
.limit{
    color: #FFFFFF;
    font-size: 0.689rem;
}
.company{
    color: #FEFEFE;
    font-size: 0.875rem;
}
.money{
    color: #fff;
    font-size: 0.94rem;
}
.line{
    width: 19.875rem;
    height: .0625rem;
    margin: 0 auto;
    margin-top: 2.8125rem;
    background:rgba(255,255,255,1);
    opacity:0.35;
}
.join{
    font-size: .875rem;
    margin-top: 1.25rem;
}
.join a{
    text-decoration: none;
    color: #FEFEFE;
}
.join img{
    width: .875rem;
    margin-left: .625rem;
    vertical-align: middle;
}
.cardBox>img{
    width: 6.6875rem;
    height: 7.5625rem;
    position: absolute;
    bottom: 0;
    right: 0;
    opacity: 0.2;
}
#detail-main {
    height: 22.6rem;
    margin: 0 1.75rem;
}
#detail-main div{
    height: 2.8rem;
    line-height: 2.8rem;
    display: flex;
    border-bottom: 1px solid #F0F2F5;
    justify-content: space-between;
}
#detail-main div>span:nth-last-child(1){
    color: #333;
}
#detail-main div span{
    font-size: .8125rem;
    color: #666666;
}
#detail-main div:nth-child(7)>span{
    color: #666;
}
.btn{
    position: absolute;
    bottom: 0;
    color: #FFFFFF;
    height: 3.2rem;
    width: 100%;
    line-height: 3.2rem;
    background: #FFB745;
}
</style>

