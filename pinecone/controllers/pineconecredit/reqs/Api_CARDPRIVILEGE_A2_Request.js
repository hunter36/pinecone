/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_CARDPRIVILEGE_A2_Request =function () {
    this.api= "Api_CARDPRIVILEGE_A2_Request";
	base.apply(this); //base 就是  TransformData
	this.sid;//SID
	this.pname;//特权名称
	this.pcondition;//特权条件
	this.sqlcondition;//SQLCONDITION-无字典对应
	this.orderexpr;//ORDEREXPR-无字典对应


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////SID
this.setSid    = function (c){this.data.sid    = c ; }
////特权名称
this.setPname    = function (c){this.data.pname    = c ; }
////特权条件
this.setPcondition    = function (c){this.data.pcondition    = c ; }
////SQLCONDITION-无字典对应
this.setSqlcondition    = function (c){this.data.sqlcondition    = c ; }
////ORDEREXPR-无字典对应
this.setOrderexpr    = function (c){this.data.orderexpr    = c ; }

}


//警告 : 不要写成 {Api_CARDPRIVILEGE_A2_Request}
module.exports = Api_CARDPRIVILEGE_A2_Request;
