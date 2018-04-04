<template>
  <div class="reimbursement">
      <div class="reimbu">
          <div class="top">
                <p class="span">还款总金额 (元)</p>
                <p class="shue">10.00</p>
            </div>
            <div class="bottom">
                <p>
                    <span class="left">还款时间</span>
                    <span class="right">2017/09/11 12:23:34</span>
                </p>
                <p>
                    <span class="left">订单编号</span>
                    <span class="right">22331124566653</span>
                </p>
            </div>
      </div>
      <div class="bill">
            <div class="billtitle">所还账单</div>
            <div class="billbottom">
                <div class="left">
                    <p class="p1">
                        <span class="span1">XXX卡（1456）</span>
                        <span class="span2">300.00</span>
                    </p>
                    <p class="p2">
                        <span class="span3">会员费</span>
                        <span class="span4">最后还款日：09-11</span>
                    </p>
                </div>
                <img src="../../assets/img/jinru.png" alt="">
            </div>
       </div>
  </div>

</template>

<script>

</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    .reimbursement{
        width: 100%;
    }
    .reimbu{
        margin-bottom: 0.2rem;
        background: #fff;
    }
    .top{
        border-bottom: 0.01rem solid #F0F2F5;
        margin-top: 0.3rem ;
        padding-top: 0.3rem;
        padding-bottom: 0.55rem;
    }
    .top .span{
        display: inline;
        display: block;
        width: auto;
        height:0.3rem; 
        font-size:0.3rem;
        font-family:PingFangSC-Light;
        color:rgba(51,51,51,1);
        line-height:0.3rem;
        margin-left: 0.3rem;
        margin-bottom: 0.23rem;
    }
     .top .shue{
         height:0.8rem; 
        font-size:0.8rem;
        font-family:SIL-Hei-Med-Jian;
        color:rgba(249,167,36,1);
        line-height:0.8rem;
        text-align: center
     }

     .bottom{
         padding-left: 0.3rem;
         padding-right: 0.3rem;
         padding-top: 0.5rem;
         padding-bottom: 0.04rem;
     }
     .bottom p{
         overflow: hidden;
         margin-bottom: 0.45rem;
     }
     .bottom p .left{
        float: left;
        height:0.3rem; 
        font-size:0.24rem;
        font-family:PingFangSC-Light;
        color:rgba(102,102,102,1);
        line-height:0.3rem;
     }
     .bottom p .right{
        float: right;
        height:0.24rem; 
        font-size:0.24rem;
        font-family:PingFangSC-Light;
        color:rgba(102,102,102,1);
        line-height:0.3rem;
     }
     .bill{
        background: #fff;
     }
     .billtitle{
         height: 0.8rem;
         background: url(../../assets/img/top-line.png) no-repeat center center;
         border-bottom: 0.01rem solid #F0F2F5;
         text-align: center;
         height:0.8rem; 
        font-size:0.28rem;
        font-family:PingFangSC-Light;
        color:rgba(51,51,51,1);
        line-height:0.8rem;
     }
     .billbottom{
         background: #fff;
         height: 1.8rem;
         overflow: hidden;
         padding-right: 0.3rem
     }
     .left{
         float: left;
         /* height: 1.8rem */
          padding-left: 0.27rem;
          width: 6.38rem
     }
     p{
        height: 0;
     }
     .p1{
         height: 0.41rem;
         overflow: hidden;
         margin-top: 0.39rem
     }
     .p2{
         height:0.35rem;
         overflow: hidden;
         margin-top: 0.28rem
     }
     .span1{
         height:0.36rem; 
        font-size:0.3rem;
        font-family:PingFangSC-Light;
        color:rgba(51,51,51,1);
        line-height:0.36rem;
        float: left;
     }
     .span2{

         float: right;
         height:0.36rem; 
        font-size:0.28rem;
        font-family:PingFangSC-Light;
        color:rgba(51,51,51,1);
        line-height:0.36rem;
     }
     .span3{
         float: left;
         height:0.4rem; 
        font-size:0.26rem;
        font-family:PingFangSC-Light;
        color:rgba(153,153,153,1);
        line-height:0.4rem;
     }
     .span4{
         float: right;
         height:0.4rem; 
        font-size:0.26rem;
        font-family:PingFangSC-Light;
        color:rgba(51,51,51,1);
        line-height:0.4rem;
     }
     img{
         float: right;
        width: 0.15rem;
        height: 0.29rem;
        margin-top: 0.76rem
     }
</style>

