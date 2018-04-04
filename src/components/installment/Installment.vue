<template>
    <div class="installment">
        <div class="success">
            <h3>分期信息</h3>
            <p>
                <span class="left">分期金额</span>
                <span class="right">5000.00</span>
            </p>
            <p>
                <span class="left">分期订单编号</span>
                <span class="right">23111021112</span>
            </p>
            <p>
                <span class="left">所属虚拟卡</span>
                <span class="right">A卡（2458）</span>
            </p>
            <p>
                <span class="left">分期时间</span>
                <span class="right">2017-10-10 12:23:34</span>
            </p>
        </div>
        <div class="pay">
            <h3>原信用支付账单</h3>
            <p>
                <span class="left">原信用支付账单编号</span>
                <span class="right">23111021112</span>
            </p>
            <p>
                <span class="left">账单金额</span>
                <span class="right">5300.00</span>
            </p>
            <p>
                <span class="left">账单出账时间</span>
                <span class="right">2017-10-10 12:23:34</span>
            </p>
            <div class="detail">
                查看详情
            </div>
        </div>
        <div class="detailed">
            <h3 class="fenqi">分期明细</h3>
            <div class="details">
                <div class="lf">
                    <p class="p1">分期本金（元）</p>
                    <p class="p2">1058.23</p>
                </div>
                 <div class="middle">
                    <p class="p1">分期总手续费（元）</p>
                    <p class="p2">510.54</p>
                </div>
                 <div class="rg">
                    <p class="p1">合计应还（元）</p>
                    <p class="p2">510.54</p>
                </div>
            </div>
        </div>
        <ul>
            <li>
                <div class="nper">
                    <span class="span1">[1/6期]</span>
                    <span class="span2">￥269.23</span>
                </div>
                <div class="nper">
                    <span class="span3">最后还款日：2017-04-27</span>
                    <span class="span4">（含手续费12.21元）</span>
                </div>
            </li>
            <li>
                <div class="nper">
                    <span class="span1">[2/6期]</span>
                    <span class="span2">￥269.23</span>
                </div>
                <div class="nper">
                    <span class="span3">最后还款日：2017-04-27</span>
                    <span class="span4">（含手续费12.21元）</span>
                </div>
            </li>
            <li>
                <div class="nper">
                    <span class="span1">[3/6期]</span>
                    <span class="span2">￥269.23</span>
                </div>
                <div class="nper">
                    <span class="span3">最后还款日：2017-04-27</span>
                    <span class="span4">（含手续费12.21元）</span>
                </div>
            </li>
            <li>
                <div class="nper">
                    <span class="span1">[4/6期]</span>
                    <span class="span2">￥269.23</span>
                </div>
                <div class="nper">
                    <span class="span3">最后还款日：2017-04-27</span>
                    <span class="span4">（含手续费12.21元）</span>
                </div>
            </li>
            <li>
                <div class="nper">
                    <span class="span1">[5/6期]</span>
                    <span class="span2">￥269.23</span>
                </div>
                <div class="nper">
                    <span class="span3">最后还款日：2017-04-27</span>
                    <span class="span4">（含手续费12.21元）</span>
                </div>
            </li>
            <li>
                <div class="nper">
                    <span class="span1">[6/6期]</span>
                    <span class="span2">￥269.23</span>
                </div>
                <div class="nper">
                    <span class="span3">最后还款日：2017-04-27</span>
                    <span class="span4">（含手续费12.21元）</span>
                </div>
            </li>
        </ul>
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
    .installment{
        width: 100%;
        margin-top: 0.2rem;
    }
    .success{
        background: #fff;
        height: 3.34rem;
        padding-top: 0.5rem;
        width: 100%;
    }
    .pay{
        background: #fff;
        margin-top: 0.2rem;
        padding-top: 0.5rem;
        width: 100%;
    }
    .detailed{
        background: #fff;
        margin-top: 0.2rem;
        width: 100%;
    }
    h3{
        height:0.3rem; 
        font-size:0.3rem;
        font-family:PingFangSC-Light;
        color:rgba(51,51,51,1);
        line-height:0.3rem;
        margin-bottom: 0.04rem;
        padding-left: 0.31rem;
    }
    .fenqi{
        padding: 0;
        padding: 0.32rem 0;
        padding-left: 0.31rem;
        border-bottom: 0.01rem solid #F0F2F5;
    }
    p{
        overflow: hidden;
        margin-top: 0.45rem;
        padding-left: 0.31rem;
        padding-right: 0.29rem
    }
    p span{
        height:0.24rem; 
        font-size:0.24rem;
        font-family:PingFangSC-Light;
        color:rgba(102,102,102,1);
        line-height:0.24rem;
    }
    .left{
        float: left;
    }
    .right{
        float: right;
    }
    .detail{
        border-top: 0.01rem solid #F0F2F5;
        height: 0.72rem;
        background:rgba(255,255,255,1);
        text-align: center;
        font-size:0.24rem;
        font-family:PingFangSC-Light;
        color:rgba(249,167,36,1);
        line-height:0.72rem;
        cursor: pointer;
        margin-top: 0.49rem
    }
    .p1{
        height:0.24rem; 
        font-size:0.24rem;
        font-family:PingFangSC-Light;
        color:rgba(153,153,153,1);
        line-height:0.24rem;
        text-align: center;
        margin: 0;
        margin-bottom: 0.32rem;
    }
    .p2{
        height:0.32rem; 
        font-size:0.32rem;
        font-family:PingFangSC-Light;
        color:rgba(51,51,51,1);
        line-height:0.32rem;
        text-align: center;
        margin: 0;
    }
    .details{
        display: flex;
        height: 1.84rem;
        margin-left: 0.16rem;
    }
    .middle{
        width: 2.54rem;
        height: 0.86rem;
        border-left: 0.01rem solid #E3E5E9;
        border-right: 0.01rem solid #E3E5E9;
        margin-top: 0.5rem;
    }
    .lf{
        margin-top: 0.5rem;
    }
    .rg{
        margin-top: 0.5rem;
    }
    ul{
        background: #fff;
        margin: 0;
        margin-top: 0.2rem;
        padding: 0;
    }
    li{
        border-bottom: 0.01rem solid #F0F2F5;
        height: 2rem;
    }
    .nper{
        overflow: hidden;
        height: 0.5rem;
        margin-top: 0.25rem;
        position: relative;
        top:-1.25rem;
        padding: 0 0.55rem 0 0.33rem
    }
    .span1{
        float: left; 
        font-size:0.26rem;
        font-family:PingFangSC-Light;
        color:rgba(51,51,51,1);
        line-height:0.5rem;
        display: inline;
        display: block;
        height: 0.5rem;
    }
    .span2{
        float:right;
        font-size:0.36rem;
        font-family:PingFangSC-Light;
        color:rgba(51,51,51,1);
        line-height:0.5rem;
        display: inline;
        display: block;
        height: 0.5rem;
    }
    .span3{
        float: left;
        font-size:0.26rem;
        font-family:PingFangSC-Light;
        color:rgba(153,153,153,1);
        line-height:0.5rem;
        display: inline;
        display: block;
        height: 0.5rem;
    }
    .span4{
        float: right;
        font-size:0.22rem;
        font-family:PingFangSC-Light;
        color:rgba(102,102,102,1);
        line-height:0.22rem;
        line-height:0.5rem;
        display: inline;
        display: block;
        height: 0.5rem;
    }
    img{
        width: 1.86rem;
        height: 1.06rem;
        position: absolute;
        right: 1.32rem;
        top: 1.48rem
    }
</style>
