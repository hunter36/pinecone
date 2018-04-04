/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_MERCHANT_SHOP_GOODS_SKU_A3_Request =function () {
    this.api= "Api_MERCHANT_SHOP_GOODS_SKU_A3_Request";
	base.apply(this); //base 就是  TransformData
	this.sid;//SID
	this.gid;//全局统一编号
	this.sku;//SKU编码
	this.num;//库存


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////SID
this.setSid    = function (c){this.data.sid    = c ; }
////全局统一编号
this.setGid    = function (c){this.data.gid    = c ; }
////SKU编码
this.setSku    = function (c){this.data.sku    = c ; }
////库存
this.setNum    = function (c){this.data.num    = c ; }

}


//警告 : 不要写成 {Api_MERCHANT_SHOP_GOODS_SKU_A3_Request}
module.exports = Api_MERCHANT_SHOP_GOODS_SKU_A3_Request;
