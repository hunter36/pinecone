/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_MERCHANT_SHOP_A5_browserShopWithApplyCnt_Request =function () {
    this.api= "Api_MERCHANT_SHOP_A5_browserShopWithApplyCnt_Request";
	base.apply(this); //base 就是  TransformData
	this.merchant_aid;//商户AID;指定某个商户下属门店-无字典对应
	this.card_merchan_aid;//卡商ID;查询和某个卡商有合作的门店-无字典对应
	this.shop_aid;//明确指定门店AID-无字典对应
	this.appstate;//审核状态


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////商户AID;指定某个商户下属门店-无字典对应
this.setMerchant_aid    = function (c){this.data.merchant_aid    = c ; }
////卡商ID;查询和某个卡商有合作的门店-无字典对应
this.setCard_merchan_aid    = function (c){this.data.card_merchan_aid    = c ; }
////明确指定门店AID-无字典对应
this.setShop_aid    = function (c){this.data.shop_aid    = c ; }
////审核状态
this.setAppstate    = function (c){this.data.appstate    = c ; }

}


//警告 : 不要写成 {Api_MERCHANT_SHOP_A5_browserShopWithApplyCnt_Request}
module.exports = Api_MERCHANT_SHOP_A5_browserShopWithApplyCnt_Request;
