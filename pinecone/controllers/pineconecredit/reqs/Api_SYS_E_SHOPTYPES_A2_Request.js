/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_SYS_E_SHOPTYPES_A2_Request =function () {
    this.api= "Api_SYS_E_SHOPTYPES_A2_Request";
	base.apply(this); //base 就是  TransformData
	this.sid;//SID
	this.typename;//TYPENAME
	this.sqlcondition;//SQLCONDITION-无字典对应
	this.orderexpr;//ORDEREXPR-无字典对应


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////SID
this.setSid    = function (c){this.data.sid    = c ; }
////TYPENAME
this.setTypename    = function (c){this.data.typename    = c ; }
////SQLCONDITION-无字典对应
this.setSqlcondition    = function (c){this.data.sqlcondition    = c ; }
////ORDEREXPR-无字典对应
this.setOrderexpr    = function (c){this.data.orderexpr    = c ; }

}


//警告 : 不要写成 {Api_SYS_E_SHOPTYPES_A2_Request}
module.exports = Api_SYS_E_SHOPTYPES_A2_Request;
