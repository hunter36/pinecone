/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_CARD_AGENT_EMP_A2_Request =function () {
    this.api= "Api_CARD_AGENT_EMP_A2_Request";
	base.apply(this); //base 就是  TransformData
	this.sid;//内部工号
	this.agtid;//冗余部门id
	this.did;//所属部门id
	this.accid;//平台公共帐号
	this.name;//员工姓名
	this.rids;//销售公司类角色列表
	this.sqlcondition;//SQLCONDITION-无字典对应
	this.orderexpr;//ORDEREXPR-无字典对应


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////内部工号
this.setSid    = function (c){this.data.sid    = c ; }
////冗余部门id
this.setAgtid    = function (c){this.data.agtid    = c ; }
////所属部门id
this.setDid    = function (c){this.data.did    = c ; }
////平台公共帐号
this.setAccid    = function (c){this.data.accid    = c ; }
////员工姓名
this.setName    = function (c){this.data.name    = c ; }
////销售公司类角色列表
this.setRids    = function (c){this.data.rids    = c ; }
////SQLCONDITION-无字典对应
this.setSqlcondition    = function (c){this.data.sqlcondition    = c ; }
////ORDEREXPR-无字典对应
this.setOrderexpr    = function (c){this.data.orderexpr    = c ; }

}


//警告 : 不要写成 {Api_CARD_AGENT_EMP_A2_Request}
module.exports = Api_CARD_AGENT_EMP_A2_Request;
