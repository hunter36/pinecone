/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_CM_BIND_CARDTYPES_A5_qryShop_support_cardtypes_with_Userhad_Request =function () {
    this.api= "Api_CM_BIND_CARDTYPES_A5_qryShop_support_cardtypes_with_Userhad_Request";
	base.apply(this); //base 就是  TransformData
	this.shopaid;//必填参数;门店主账户ID-无字典对应
	this.accid;//可选参数;用户ID-无字典对应


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////必填参数;门店主账户ID-无字典对应
this.setShopaid    = function (c){this.data.shopaid    = c ; }
////可选参数;用户ID-无字典对应
this.setAccid    = function (c){this.data.accid    = c ; }

}


//警告 : 不要写成 {Api_CM_BIND_CARDTYPES_A5_qryShop_support_cardtypes_with_Userhad_Request}
module.exports = Api_CM_BIND_CARDTYPES_A5_qryShop_support_cardtypes_with_Userhad_Request;
