/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_CM_BIND_SHOP_CHANGE_A1_Request =function () {
    this.api= "Api_CM_BIND_SHOP_CHANGE_A1_Request";
	base.apply(this); //base 就是  TransformData
	this.changeid;//对应于Card_BindApply_Change的SID
	this.shopaid;//门店的AID注意对公帐号
	this.shoptype;//门店类型
	this.sid;//SID


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////对应于Card_BindApply_Change的SID
this.setChangeid    = function (c){this.data.changeid    = c ; }
////门店的AID注意对公帐号
this.setShopaid    = function (c){this.data.shopaid    = c ; }
////门店类型
this.setShoptype    = function (c){this.data.shoptype    = c ; }
////SID
this.setSid    = function (c){this.data.sid    = c ; }

}


//警告 : 不要写成 {Api_CM_BIND_SHOP_CHANGE_A1_Request}
module.exports = Api_CM_BIND_SHOP_CHANGE_A1_Request;
