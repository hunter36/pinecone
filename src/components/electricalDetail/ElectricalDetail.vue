<template>
  <div class="electrity">
      <img src="../../assets/img/返回.png" class="fanhui">
	  <div class="flower">
		  <img src="../../assets/img/LOGO.png" class="logo">
		  <div class="flowerRight">
			  <h3>花花公子</h3>
			  <p>运营方名称：捷富集团</p>
			  <p>备案登记号：23432453546</p>
		  </div>
	  </div>
	  <div class="detail">
		  <span>
			  捷富商城主要经营服饰、包袋、配饰、鞋靴、生活用品、轻奢品等等，欧蓝商城于2015年上线至今已有2000万...
		  </span>
		  <a href="#">详情</a>
	  </div>
	  <div class="titleBar">门店可用虚拟卡</div>
        <div class="possess">
            <div class="possess-title">
                <div class="float-left"><span><img src="../../assets/img/success@2x.png" alt="已拥有"></span>已拥有的卡片</div>
                <div class="float-right">查看更多<span><img src="../../assets/img/gengduo@2x.png" alt="查看更多"></span></div>
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
                <div class="float-right">查看更多<span><img src="../../assets/img/gengduo@2x.png" alt="查看更多"></span></div>
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
// export default {
//   name:"ElectricalDatail",
//   data(){
//     return {
//       title:"花花公子",
//       ps:[
//         "运营方名称：捷富集团",
//         "备案登记号：23432453546",
//         "捷富商城主要经营服饰、包袋、配饰、鞋靴、生活用品、轻奢品等等，欧蓝商城于2015年上线至今已有2000万...",
//         "详情"
//       ],
//     }
//   }
// }
</script>

<style scoped>
	*{
	padding: 0;
	margin: 0;
	}
	.electrity{
		width: 100%;
		height: 4.39rem;
		background:rgba(97,97,97,1);
		/* padding-left: 0.3rem; */
	}
	img.fanhui{
		width: 0.22rem;
		height: 0.37rem;
		margin-left: 0.3rem;
	}
	.flower{
		height: 1.35rem;
		width: 100%;
		display: flex;
		margin-top: 0.1rem
	}
	.flower .logo{
		height: 1.35rem;
		width: 1.35rem;
		margin-left: 0.3rem;
	}
	.flower .flowerRight{
		height: 1.35rem;
		width: auto;
		margin-left: 0.39rem;
	}
	.flower .flowerRight h3{
		height:0.34rem; 
		font-size:0.36rem;
		font-family:PingFangSC-Regular;
		color:rgba(255,255,255,1);
		line-height:0.42rem;
		margin-bottom: 0.18rem;
		margin-top: 0.04rem;
		font-weight: 500
	}
	.flower .flowerRight p{
		height:0.24rem; 
		font-size:0.24rem;
		font-family:PingFangSC-Regular;
		color:rgba(255,255,255,1);
		line-height:0.42rem;
		margin-top: 0.15rem;
	}
	.detail{
		width: 100%;
		height: 1.2rem;
		background:rgba(0,0,0,0.2);
		margin-top: 0.44rem;
	}
	.detail span{
		margin-left: 0.3rem;
		height:0.57rem; 
		font-size:0.2rem;
		font-family:PingFangSC-Light;
		color:rgba(255,255,255,1);
		line-height:0.34rem;
		display: inline;
		display: block;
		width: 6rem;
		float: left;
		margin-top: 0.31rem;
	}
	.detail a{
		float: right;
		display: inline;
		display: block;
		text-align: center;
		width: 0.82rem;
		height: 0.4rem;
		border: 0.01rem solid #fff;
		border-radius: 0.1rem; 
		font-size:0.24rem;
		font-family:PingFangSC-Light;
		color:rgba(255,255,255,1);
		line-height:0.4rem;
		text-decoration: none;
		margin-right: 0.3rem;
		margin-top: 0.4rem;
	}
	.titleBar{
		height: .8rem;
		font-size: .26rem;
		color: #666666;
		line-height: .8rem;
		text-align: center;
		border-bottom: 1px solid #ECECEC;
		background: url(../../assets/img/top-line@2x.png) no-repeat center center;
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