/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_MERCHANT_SHOP_GOODS_A3_Request =function () {
    this.api= "Api_MERCHANT_SHOP_GOODS_A3_Request";
	base.apply(this); //base 就是  TransformData
	this.gid;//全局统一编号
	this.maid;//商家平台帐号ID
	this.msaid;//门店平台帐号ID
	this.productid;//商品ID
	this.price;//价格
	this.pic;//图片
	this.state;//状态


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////全局统一编号
this.setGid    = function (c){this.data.gid    = c ; }
////商家平台帐号ID
this.setMaid    = function (c){this.data.maid    = c ; }
////门店平台帐号ID
this.setMsaid    = function (c){this.data.msaid    = c ; }
////商品ID
this.setProductid    = function (c){this.data.productid    = c ; }
////价格
this.setPrice    = function (c){this.data.price    = c ; }
////图片
this.setPic    = function (c){this.data.pic    = c ; }
////状态
this.setState    = function (c){this.data.state    = c ; }

}


//警告 : 不要写成 {Api_MERCHANT_SHOP_GOODS_A3_Request}
module.exports = Api_MERCHANT_SHOP_GOODS_A3_Request;
