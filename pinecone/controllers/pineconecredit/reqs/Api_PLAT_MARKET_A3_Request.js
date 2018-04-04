/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_PLAT_MARKET_A3_Request =function () {
    this.api= "Api_PLAT_MARKET_A3_Request";
	base.apply(this); //base 就是  TransformData
	this.mid;//市场ID
	this.sid;//SID
	this.state;//是否关闭
	this.mname;//市场名称
	this.ctime;//创建时间
	this.opt;//创建者默认SYS


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////市场ID
this.setMid    = function (c){this.data.mid    = c ; }
////SID
this.setSid    = function (c){this.data.sid    = c ; }
////是否关闭
this.setState    = function (c){this.data.state    = c ; }
////市场名称
this.setMname    = function (c){this.data.mname    = c ; }
////创建时间
this.setCtime    = function (c){this.data.ctime    = c ; }
////创建者默认SYS
this.setOpt    = function (c){this.data.opt    = c ; }

}


//警告 : 不要写成 {Api_PLAT_MARKET_A3_Request}
module.exports = Api_PLAT_MARKET_A3_Request;
