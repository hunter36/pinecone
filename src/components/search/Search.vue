<template>
	<h1>This is Search module!</h1>
	<div class="box">
		<div class="card views">
			<div class="titleBar">卡片</div>
			<div class="cBody">
				<div class="cImg">
					<div class="cLogo">
						<img src="../../assets/img/卡1图.png" alt="院子餐厅" />
					</div>
				</div>
			</div>
		</div>
		<div class="store views">
			<div class="titleBar">门店</div>
			<div class="sBody">
				<ul>
					<li>
						<div class="sImg"></div>
					</li>
					<li>
						<div class="sImg"></div>
					</li>
					<li>
						<div class="sImg"></div>
					</li>
					<li>
						<div class="sImg"></div>
					</li>
				</ul>
			</div>
		</div>
		<div class="eshop views">
			<div class="titleBar">电商</div>
			<div class="eBody">
				<div class="eBanner"></div>
				<div class="eMessage"></div>
			</div>
		</div>
	</div>
</template>

<script>
	
</script>

<style scoped>
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
	.cImg{
		position: relative;
		height: 2.74rem;
		background: url(../../assets/img/card3.png) no-repeat center center;
		background-size: 100%; 
		margin: .4rem 0;
		border-bottom: 1px solid #ECECEC;
	}
	.cLogo{
		width: .96rem;
		height: .96rem;
		position: absolute;
		top: .28rem;
		left: .28rem;
	}
	.cLogo img{
		width: 100%;
	}
	.eshop{
		margin-bottom: .6rem;
	}
	.sBody{
		box-sizing: border-box;
		padding: .19rem .1rem .21rem;
		height: auto;
	}
	.sBody ul{
		margin: 0;
		padding: 0;
		overflow: hidden;
		height: auto;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
	}
	.sBody ul li{
		list-style: none;
		width: 3.6rem;
		height: 4.2rem;
		background: gold;
		margin-bottom: .1rem;
	}
	.sBody ul li:nth-child(2n){
		margin-right: 0;
	}
	.sBody ul li .sImg{
		width: 3.4rem;
		height: 2.26rem;
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
	}
</style>