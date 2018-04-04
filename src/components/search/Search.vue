<template>
<<<<<<< HEAD
	<!-- <h1>This is Search module!</h1> -->
=======
>>>>>>> 916eb4cd3d5f30b96c6f888909e216f03560bdb6
	<div class="box">
		<div class="card views">
			<div class="titleBar">卡片</div>
			<div class="cBody">
				<div class="cImg">
					<div class="cTop">
						<dl>
							<dt><div class="cLogo"></div></dt>
							<dd>
								<h3>团圆佳节卡</h3>
								<p>院子餐厅</p>
							</dd>
						</dl>
						<div class="credit">
							<p>您的预估额度为</p>
							<h2><b>￥</b>2300<span>.00</span></h2>
						</div>
					</div>
					<div class="line"></div>
					<div class="cBottom">
						<div class="cTips">
							<p><i><img src="../../assets/img/付.png"></i>支付方式<span>信用支付</span></p>
							<p><i><img src="../../assets/img/条件.png"></i>申请条件<span>信用支付</span></p>
							<p><i><img src="../../assets/img/地址.png"></i>适用范围<span>信用支付</span></p>
							<p><i><img src="../../assets/img/期限.png"></i>有效期限<span>信用支付</span></p>
						</div>
					</div>
				</div>
			</div>
			<div class="cBody" v-show="cardFlag">
				<div class="cImg">
					<div class="cTop">
						<dl>
							<dt><div class="cLogo"></div></dt>
							<dd>
								<h3>团圆佳节卡</h3>
								<p>院子餐厅</p>
							</dd>
						</dl>
						<div class="credit">
							<p>您的预估额度为</p>
							<h2><b>￥</b>2300<span>.00</span></h2>
						</div>
					</div>
					<div class="line"></div>
					<div class="cBottom">
						<div class="cTips">
							<p><i><img src="../../assets/img/付.png"></i>支付方式<span>信用支付</span></p>
							<p><i><img src="../../assets/img/条件.png"></i>申请条件<span>信用支付</span></p>
							<p><i><img src="../../assets/img/地址.png"></i>适用范围<span>信用支付</span></p>
							<p><i><img src="../../assets/img/期限.png"></i>有效期限<span>信用支付</span></p>
						</div>
					</div>
				</div>
			</div>
			<div class="button" @click="switchLoadCard">{{cardTab}}</div>
		</div>
		<div class="store views">
			<div class="titleBar">门店</div>
			<div class="sBody">
				<ul>
					<li>
						<div class="sImg"></div>
						<h1>DIBA 东邦皮肤管理中心</h1>
						<p>万象城店<span>&lt;230m</span></p>
					</li>
					<li>
						<div class="sImg"></div>
						<h1>DIBA 东邦皮肤管理中心</h1>
						<p>万象城店<span>&lt;230m</span></p>
					</li>
					<li v-show="storeFlag">
						<div class="sImg"></div>
						<h1>DIBA 东邦皮肤管理中心</h1>
						<p>万象城店<span>&lt;230m</span></p>
					</li>
					<li class="block" v-show="storeFlag"></li>
				</ul>
			</div>
			<div class="button" @click="switchLoadStore">{{storeTab}}</div>
		</div>
		<div class="eshop views">
			<div class="titleBar">电商</div>
			<div class="eBody">
				<div class="eBanner"></div>
				<div class="eMessage">
					<div>
						<h3>花花公子男装商场</h3>
						<p>与专柜同步，更优惠、优先收到 新鞋图册。</p>
					</div>
					<div class="toDetails">查看详情</div>
				</div>
			</div>
			<div class="eBody" v-show="eshopFlag">
				<div class="eBanner"></div>
				<div class="eMessage">
					<div>
						<h3>花花公子男装商场</h3>
						<p>与专柜同步，更优惠、优先收到 新鞋图册。</p>
					</div>
					<div class="toDetails">查看详情</div>
				</div>
			</div>
			<div class="button" @click="switchLoadEShop">{{eshopTab}}</div>
		</div>
	</div>
</template>

<script>
    // import { MessageBox } from 'mint-ui'

    export default{
        // created:function(){
        //     if(window.localStorage.user == null){
        //         this.$router.push({path: '/login'})
        //     }
        // },
        data(){
            let cardFlag = false
            let cardTab = "查看更多"
            let storeFlag = false
            let storeTab = "查看更多"
            let eshopFlag = false
            let eshopTab = "查看更多"
            let orders_status
            return {
            	cardFlag, 
            	cardTab,
            	storeFlag,
            	storeTab,
            	eshopFlag,
            	eshopTab,
            	orders_status
            }
        },
        methods:{
            switchLoadCard: function(){
                this.cardFlag = !this.cardFlag;
                this.cardFlag ? this.cardTab = "收起列表" : this.cardTab = "查看更多";
            },
            switchLoadStore: function(){
                this.storeFlag = !this.storeFlag;
                this.storeFlag ? this.storeTab = "收起列表" : this.storeTab = "查看更多";
            },
            switchLoadEShop: function(){
                this.eshopFlag = !this.eshopFlag;
                this.eshopTab ? this.eshopTab = "收起列表" : this.eshopTab = "查看更多";
            }
        }
    }
</script>

<style scoped>
	*{
		margin: 0;
		padding: 0;
	}
	h1{
		font-size: 20px;
		color: rgb(5, 110, 234);
	}
	.box{
		width: 100%;
		background: #F0F2F5;
		display: flex;
		flex-direction: column;
	}
	.box .views{
		width: 100%;
		margin-top: 0.2rem;
		background: #fff;
	}
	.titleBar{
		height: .6rem;
		font-size: .26rem;
		color: #666666;
		line-height: .6rem;
		text-align: center;
		border-bottom: 1px solid #ECECEC;
		background: url(../../assets/img/标头线.png) no-repeat center center;
		background-size: 100%; 
	}
	.cBody{
		box-sizing: border-box;
		padding: 0 0.3rem 0;
	}
	.button{
		width: 100%;
		height: .7rem;
		font-size: .24rem;
		color: #F9A724;
		border-top: 1px solid #ECECEC;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.cImg{
		height: 2.74rem;
		box-sizing: border-box;
		background: url(../../assets/img/card3.png) no-repeat center center;
		background-size: 100%;
		padding: 0 0.28rem; 
		margin: .4rem 0;
		border-bottom: 1px solid #ECECEC;
		display: flex;
		flex-direction: column;
	}
	.cImg .cTop{
		box-sizing: border-box;
		padding: .28rem 0;
		height: 1.52rem;
		box-sizing: border-box;
		overflow: hidden;
		display: flex;
		justify-content: space-between;
	}
	.cTop dl{
		font-size: 0;
		display: flex;
		justify-content: space-between;
	}
	.cTop dl dd{
		font-size: .28rem;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		color: #fefefe;
		margin-left: .28rem;
	}
	.cTop dl dd h3{
		margin: 0;
		padding: 0;
		font-size: .34rem;
		font-weight: normal;
	}
	.cTop dl dd p{
		margin: 0;
		padding: 0;
	}
	.cTop .credit{
		text-align: right;
		font-size: .2rem;
		color: #fff;
	}
	.credit p{
		color: rgba(255,255,255,.8);
	}
	.credit h2{
		font-size: .48rem;
		font-weight: normal;
	}
	.credit h2 b{
		font-size: .3rem;
	}
	.cBottom{
		height: 1.19rem;
		padding: .21rem 0 .3rem;
		box-sizing: border-box;
	}
	.cTips{
		font-size: .22rem;
		color: rgba(255,255,255,.8);
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
	}
	.cTips p{
		display: block;
		width: 50%;
		overflow: hidden;
	}
	.cTips p i{
		display: inline-block;
		width: .22rem;
		height: .22rem;
		margin-right: .1rem;
	}
	.cTips p i img{
		width: 100%;
	}
	.cTips p span{
		margin-left: .32rem;
	}
	.line{
		width: 100%;
		height: 1px;
		background: rgba(255,255,255,0.35);
	}
	.cLogo{
		width: .75rem;
		height: .75rem;
		background: url(../../assets/img/卡1图.png) no-repeat center center;
		background-size: 100%; 
	}
	.eshop{
		margin-bottom: .6rem;
	}
	.sBody{
		width: 100%;
		box-sizing: border-box;
		padding: .19rem .1rem .21rem;
		height: auto;
	}
	.sBody ul{
		margin: 0;
		padding: 0;
		width: 100%;
		overflow: hidden;
		height: auto;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}
	.sBody ul li{
		list-style: none;
		box-sizing: border-box;
		padding: .1rem;
		padding-bottom: .2rem; 
		width: 3.6rem;
		height: 4.2rem;
		margin-bottom: .1rem;
		border: 1px solid #ECECEC;
		border-radius: 5px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.sBody ul .block{
		height: 0;
		border: none;
		margin: 0;
		padding: 0;
	}
	.sBody ul li .sImg{
		width: 3.4rem;
		height: 2.26rem;
		margin: 0 auto .3rem;
		background: url(../../assets/img/门店1图.png) no-repeat center center;
		background-size: 100%;
	}
	.sBody ul li h1{
		font-size: .28rem;
		color: #333;
		flex: 1;
	}
	.sBody ul li p{
		font-size: .24rem;
		color: #666;
		display: flex;
		justify-content: space-between;
	}
	.eBody{
		width: 100%;
		margin-bottom: .1rem;
	}
	.eBanner{
		width: 100%;
		height: 2.53rem;
		background: url(../../assets/img/电商1图.png) no-repeat center center;
		background-size: 100%;
	}
	.eMessage{
		height: 1.12rem;
		box-sizing: border-box;
		padding: .2rem .3rem;
		display: flex;
		justify-content: space-between;
	}
	.eMessage h3{
		font-size: .28rem;
		color: #333;
	}
	.eMessage p{
		font-size: .22rem;
		color: #999;
	}
	.toDetails{
		font-size: .26rem;
		color: #F9A724;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>