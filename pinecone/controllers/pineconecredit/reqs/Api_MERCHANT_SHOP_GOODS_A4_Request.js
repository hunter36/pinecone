/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_MERCHANT_SHOP_GOODS_A4_Request =function () {
    this.api= "Api_MERCHANT_SHOP_GOODS_A4_Request";
	base.apply(this); //base 就是  TransformData
	this.gid;//全局统一编号


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////全局统一编号
this.setGid    = function (c){this.data.gid    = c ; }

}


//警告 : 不要写成 {Api_MERCHANT_SHOP_GOODS_A4_Request}
module.exports = Api_MERCHANT_SHOP_GOODS_A4_Request;
