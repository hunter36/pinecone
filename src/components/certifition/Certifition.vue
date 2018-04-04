<template>
	<ul>
		<li class="guanxi" v-on:click="handleClick">
			<p>与本人关系</p>
			<span>请选择</span>
				<img src="../../assets/img/jinru.png" alt="" class="jinru">
			<popup
			v-model="popupVisible"
			position="bottom">
				<span>父母</span>
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
</template>

<script>
import { Popup } from 'mint-ui';
export default {
  components:{
	  Popup
  },
  data(){
	  return{
		  popupVisible:true
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
</style>