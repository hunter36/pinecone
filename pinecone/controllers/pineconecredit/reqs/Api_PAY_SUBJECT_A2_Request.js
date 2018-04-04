/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_PAY_SUBJECT_A2_Request =function () {
    this.api= "Api_PAY_SUBJECT_A2_Request";
	base.apply(this); //base 就是  TransformData
	this.subid;//科目编号
	this.sid;//SID
	this.subname;//科目名称
	this.sqlcondition;//SQLCONDITION-无字典对应
	this.orderexpr;//ORDEREXPR-无字典对应


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////科目编号
this.setSubid    = function (c){this.data.subid    = c ; }
////SID
this.setSid    = function (c){this.data.sid    = c ; }
////科目名称
this.setSubname    = function (c){this.data.subname    = c ; }
////SQLCONDITION-无字典对应
this.setSqlcondition    = function (c){this.data.sqlcondition    = c ; }
////ORDEREXPR-无字典对应
this.setOrderexpr    = function (c){this.data.orderexpr    = c ; }

}


//警告 : 不要写成 {Api_PAY_SUBJECT_A2_Request}
module.exports = Api_PAY_SUBJECT_A2_Request;
