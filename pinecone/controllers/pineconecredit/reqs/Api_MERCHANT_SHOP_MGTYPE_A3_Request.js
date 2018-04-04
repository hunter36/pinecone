/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_MERCHANT_SHOP_MGTYPE_A3_Request =function () {
    this.api= "Api_MERCHANT_SHOP_MGTYPE_A3_Request";
	base.apply(this); //base 就是  TransformData
	this.sid;//SID
	this.maid;//商家平台帐号ID
	this.msaid;//门店平台帐号ID
	this.mgtype;//见 SYS_MGTYPE


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////SID
this.setSid    = function (c){this.data.sid    = c ; }
////商家平台帐号ID
this.setMaid    = function (c){this.data.maid    = c ; }
////门店平台帐号ID
this.setMsaid    = function (c){this.data.msaid    = c ; }
////见 SYS_MGTYPE
this.setMgtype    = function (c){this.data.mgtype    = c ; }

}


//警告 : 不要写成 {Api_MERCHANT_SHOP_MGTYPE_A3_Request}
module.exports = Api_MERCHANT_SHOP_MGTYPE_A3_Request;
