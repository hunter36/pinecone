<template>
	<ul>
		<li class="guanxi" v-on:click="handleClick">
			<p>与本人关系</p>
			<span>请选择</span>
				<img src="../../assets/img/jinru.png" alt="" class="jinru">
				<popup
				v-model="popupVisible"
				position="bottom">
					<div class="popup">
						<h3>选择与本人关系</h3>
						<span>确定</span>
					</div>
					<div class="gx">
						<p class="p1">父母</p>
						<p class="p2">子女</p>
						<p class="p3">配偶</p>
						<p class="p2">亲戚</p>
						<p class="p4">同事</p>
					</div>
				</popup>
		</li>
		<li class="name">
			<p>联系人姓名</p>
			<span>请从通讯录中选择</span>
			<div class="tongxunlu">
				<img src="../../assets/img/lianxiren.png" alt="" class="lianxiren">
			</div>
		</li>
		<li class="way">
			<p>联系方式</p>
			<span>请从通讯录中选择</span>
		</li>
	</ul>
	<div class="zhezhao"></div>
</template>

<script>
import { Popup } from 'mint-ui';
export default {
  components:{
	  Popup
  },
  data(){
	  return{
		  popupVisible:false
	  }
  },
  methods: {
        handleClick: function() {
			console.log(1)
          this.popupVisible = true
        }
      }
}
</script>


<style scoped>
	*{
		margin: 0;
		padding: 0;
	}
	ul{
		background: #fff;
		margin-top: 0.2rem;
	}
	li{
		height: 0;
		height: 1.21rem;
		border-bottom: 0.01rem solid #e6e6e6;
		padding-left: 0.3rem;
		overflow: hidden;
	}
	.guanxi{
		padding-right: 0.31rem;
	}
	.guanxi span{
		border-right: 0;
	}
	.name{
		padding-right: 0.35rem;
	}
	.way span{
		border-right: 0;
	}
	p{
		height: 1.21rem;
		font: 0.3rem/1.21rem "";
		color: rgba(51,51,51,1);
		margin: 0 0.6rem 0 0;
		width: 1.5rem;
		float: left;
	}
	div.tongxunlu{
		height: 0.6rem;
		width: 0.8rem;
		border-left: 0.01rem solid #e6e6e6;
		float: right;
		margin-top: 0.33rem;
	}
	span{
		display: inline-block;
		height: 0.6rem;
		/* width: 3.9rem; */
		font-size:0.3rem;
		color:rgba(196,196,196,1);
		line-height:0.6rem;
		margin-top: 0.33rem;
		float: left;
		margin-right: 0.33rem;
	}
	.lianxiren{
		/* swidth: 0.46rem; */
		height: 0.43rem;
		cursor: pointer;
		float: right;
		margin-top: 0.06rem;
	}
	.jinru{
		width: 0.15rem;
		height: 0.29rem;
		margin: 0.47rem 0 0 0.69rem;
		cursor: pointer;
		float: right;
	}
	li:nth-child(3){
		border-bottom: 0;
	}
	.mint-popup{
		height: 6.68rem;
		width: 100%;
		background: #fff;
	}
	.mint-popup .popup{
		height: 1.36rem;
		border-bottom: 0.01rem solid #E9E9E9;
	}
	.mint-popup .popup h3{
		height:1.36rem; 
		font-size:0.36rem;
		font-family:PingFangSC-Light;
		color:rgba(51,51,51,1);
		line-height:1.36rem;
		font-weight: 500;
		width: 100%;
		text-align: center;
	}
	.mint-popup .popup span{
		display: inline;
		display: block;
		height: 1.36rem;
		font-size:0.36rem;
		font-family:PingFangSC-Light;
		color:rgba(249,171,47,1);
		line-height: 1.36rem;
		margin: 0;
		/* padding-right: 0.32rem; */
		width: 1rem;
		position: relative;
		top: -1.36rem;
		right: -6.32rem;
	}
	.mint-popup .gx{
		height: 5.3rem;
		padding: 0;
	}
	.mint-popup .gx p{
		width: 100%;
		text-align: center;
		position: relative;
		top: -1.28rem;
	}
	.p1{
		height:0.3rem; 
		font-size:0.28rem;
		font-family:PingFangSC-Light;
		color:rgba(202,202,202,1);
		line-height:0.3rem;
		margin-bottom: 0.51rem;
		margin-top: 0.7rem
	}
	.p2{
		height:0.32rem; 
		font-size:0.32rem;
		font-family:PingFangSC-Light;
		color:rgba(119,119,119,1);
		line-height:0.32rem;
		margin-bottom: 0.54rem;
	}
	.p3{
		height:0.36rem; 
		font-size:0.36rem;
		font-family:PingFangSC-Regular;
		color:rgba(249,171,47,1);
		line-height:0.36rem;
		margin-bottom: 0.54rem;
	}
	.p4{
		height:0.3rem; 
		font-size:0.28rem;
		font-family:PingFangSC-Light;
		color:rgba(202,202,202,1);
		line-height:0.3rem;
		margin-bottom: 0.51rem;
	}
	.zhezhao{
		background:rgba(0,0,0,.3);
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		display: none;
	}
</style>