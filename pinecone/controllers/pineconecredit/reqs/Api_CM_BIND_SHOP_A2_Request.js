/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_CM_BIND_SHOP_A2_Request =function () {
    this.api= "Api_CM_BIND_SHOP_A2_Request";
	base.apply(this); //base 就是  TransformData
	this.sid;//SID
	this.bindid;//对应于CM_BIND的SID
	this.shopaid;//门店的AID注意对公帐号
	this.shoptype;//门店类型
	this.sqlcondition;//SQLCONDITION-无字典对应
	this.orderexpr;//ORDEREXPR-无字典对应


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////SID
this.setSid    = function (c){this.data.sid    = c ; }
////对应于CM_BIND的SID
this.setBindid    = function (c){this.data.bindid    = c ; }
////门店的AID注意对公帐号
this.setShopaid    = function (c){this.data.shopaid    = c ; }
////门店类型
this.setShoptype    = function (c){this.data.shoptype    = c ; }
////SQLCONDITION-无字典对应
this.setSqlcondition    = function (c){this.data.sqlcondition    = c ; }
////ORDEREXPR-无字典对应
this.setOrderexpr    = function (c){this.data.orderexpr    = c ; }

}


//警告 : 不要写成 {Api_CM_BIND_SHOP_A2_Request}
module.exports = Api_CM_BIND_SHOP_A2_Request;
