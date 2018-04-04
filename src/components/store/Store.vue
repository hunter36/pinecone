<template>
    <div>
        <swipe :auto="4000" class="swipeBox">
            <swipe-item><img src="../../assets/img/门店1图@2x.png" alt="门店图"></swipe-item>
            <swipe-item><img src="../../assets/img/门店3图@2x.png" alt="门店图"></swipe-item>
            <swipe-item><img src="../../assets/img/门店4图@2x.png" alt="门店图"></swipe-item>
        </swipe>
        <div class="contact">
            <div class="contact-left">
                <div>中国移动星光大道店</div>
                <div><span><img class="address" src="../../assets/img/商家详情定位 拷贝@2x.png" alt="address"></span>浙江省杭州市滨江区春晓路23号</div>
            </div>
            <div class="contact-right"><span class="tel"><img src="../../assets/img/tel.png" alt="tel"></span>&nbsp;联系商家</div>
        </div>
        <div class="titleBar">门店可用虚拟卡</div>
        <div class="possess">
            <div class="possess-title">
                <div class="float-left"><span><img src="../../assets/img/success@2x.png" alt="已拥有"></span>已拥有的卡片</div>
                <div class="float-right">查看更多<span><img src="../../assets/img/更多1@2x.png" alt="查看更多"></span></div>
            </div>
            <div class="card">
                <dl>
                    <dt><div class="cLogo"></div></dt>
                    <dd>
                        <h3>团圆佳节卡</h3>
                        <p>院子餐厅</p>
                    </dd>
                </dl>
                <div class="credit"></div>
            </div>
            <div class="card card2">
                <dl>
                    <dt><div class="cLogo"></div></dt>
                    <dd>
                        <h3>团圆佳节卡</h3>
                        <p>院子餐厅</p>
                    </dd>
                </dl>
                <div class="credit"></div>
            </div>
        </div>
        <div class="possess">
            <div class="possess-title">
                <div class="float-left"><span><img src="../../assets/img/未拥有@2x.png" alt="未拥有"></span>未拥有的卡片</div>
                <div class="float-right">查看更多<span><img src="../../assets/img/更多1@2x.png" alt="查看更多"></span></div>
            </div>
            <div class="card">
                <dl>
                    <dt><div class="cLogo"></div></dt>
                    <dd>
                        <h3>团圆佳节卡</h3>
                        <p>院子餐厅</p>
                    </dd>
                </dl>
                <div class="credit"></div>
            </div>
            <div class="card card2">
                <dl>
                    <dt><div class="cLogo"></div></dt>
                    <dd>
                        <h3>团圆佳节卡</h3>
                        <p>院子餐厅</p>
                    </dd>
                </dl>
                <div class="credit"></div>
            </div>
        </div>
    </div>
</template>
<script>
    import { Swipe, SwipeItem } from 'mint-ui';
    import 'mint-ui/lib/style.css'
    export default {
        name:'store',
        components:{
            Swipe,
            SwipeItem
        },
        data(){
            return {
                
            }
        }
    }
</script>

<style scoped>
	*{
        margin: 0;
        padding:0;
    }
    .swipeBox{
        width: 100%;
        height: 3.99rem;
    }
    .swipeBox img{
        width: 100%;
    }
    .contact{
        background: #fff;
        height: 1.4rem;
    }
    .contact-left{
        float: left;
        width: 4.91rem;
        box-sizing: border-box;
        margin: .3rem;
        border-right: 1px solid rgb(241, 241, 241);
    }
    .contact-left>div:nth-of-type(1){
        font-size: .3rem;
        color: #333;
    }
    .contact-left>div:nth-of-type(2){
        color: #999;
        font-size: .24rem;
    }
    .address{
        width: .17rem;
        height: .22rem;
        margin-right: .13rem;
    }
    .contact-right{
        color: #666;
        font-size: .26rem;
        line-height: 1.3rem;
        text-align: center;
    }
    .tel{
        margin-left: -.4rem;
    }
    .tel img{
        width: .22rem;
    }
    .titleBar{
		height: .8rem;
		font-size: .26rem;
		color: #666666;
		line-height: .8rem;
		text-align: center;
		border-bottom: 1px solid #ECECEC;
		background: url(../../assets/img/标头线1@2x.png) no-repeat center center;
        background-size: 100%; 
        background-color: #fff;
        margin-top: .1rem;
    }
    .possess{
        padding: 0 .29rem .2rem;
        background: #fff;
    }
    .possess-title{
        height: .93rem;
        line-height: .93rem;
    }
    .float-left{
        float: left;
        font-size: .26rem;
    }
    .float-left img{
        width: .26rem;
        padding-right: .12rem;
    }
    .float-right{
        float: right;
        font-size: .24rem;
        
    }
    .float-right img{
        width: .22rem;
        padding-left: .08rem;
    }
    .card{
		box-sizing: border-box;
		margin-bottom: .20rem;
		height: 1.4rem;
		box-sizing: border-box;
        overflow: hidden;
        border-radius: .2rem  .2rem   0px  0px;
        background:linear-gradient(to right, #20C0AB, #39DCA7);
		display: flex;
		justify-content: space-between;
    }
    .card2{
        background:linear-gradient(to right, #FF8D20, #FFBB15);
    }
    .card dl{
        font-size: 0;
		display: flex;
		justify-content: space-between;
	}
	.card dl dd{
		font-size: .26rem;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		color: #fefefe;
	}
	.card dl dd h3{
		margin: 0;
		padding: 0;
		font-size: .34rem;
		font-weight: normal;
	}
	.card dl dd p{
		margin: 0;
		padding: 0;
    }
    dl>dt:nth-child(1){
        margin: .2rem;
    }
    .cLogo{
		width: .96rem;
		height: .96rem;
		background: url(../../assets/img/卡1图.png) no-repeat center center;
		background-size: 100%; 
    }
    .credit{
        float: right;
        width: 1.4rem;
        height: 1.4rem;
        opacity: .2;
        background: url(../../assets/img/ditu@2x.png) no-repeat;
        background-size: 100%;
    }
</style>