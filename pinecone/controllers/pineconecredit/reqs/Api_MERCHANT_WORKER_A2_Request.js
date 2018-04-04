/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_MERCHANT_WORKER_A2_Request =function () {
    this.api= "Api_MERCHANT_WORKER_A2_Request";
	base.apply(this); //base 就是  TransformData
	this.sid;//SID
	this.maid;//归属商户id
	this.aid;//员工aid
	this.name;//姓名
	this.idcard;//身份证号
	this.wtype;//职位代码查询platrole的接口ACCOUNTTYPE=6 AND ROLELEVEL=2
	this.rname;//[冗余简化查询]角色名称platrole的RNAME
	this.phonenumber;//手机号码
	this.loginpwd;//登录密码警告需要同步到账户表代码该用户的密码被MAID控制
	this.rids;//[冗余简化查询]platrole的SID关联操作权限
	this.sqlcondition;//SQLCONDITION-无字典对应
	this.orderexpr;//ORDEREXPR-无字典对应


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////SID
this.setSid    = function (c){this.data.sid    = c ; }
////归属商户id
this.setMaid    = function (c){this.data.maid    = c ; }
////员工aid
this.setAid    = function (c){this.data.aid    = c ; }
////姓名
this.setName    = function (c){this.data.name    = c ; }
////身份证号
this.setIdcard    = function (c){this.data.idcard    = c ; }
////职位代码查询platrole的接口ACCOUNTTYPE=6 AND ROLELEVEL=2
this.setWtype    = function (c){this.data.wtype    = c ; }
////[冗余简化查询]角色名称platrole的RNAME
this.setRname    = function (c){this.data.rname    = c ; }
////手机号码
this.setPhonenumber    = function (c){this.data.phonenumber    = c ; }
////登录密码警告需要同步到账户表代码该用户的密码被MAID控制
this.setLoginpwd    = function (c){this.data.loginpwd    = c ; }
////[冗余简化查询]platrole的SID关联操作权限
this.setRids    = function (c){this.data.rids    = c ; }
////SQLCONDITION-无字典对应
this.setSqlcondition    = function (c){this.data.sqlcondition    = c ; }
////ORDEREXPR-无字典对应
this.setOrderexpr    = function (c){this.data.orderexpr    = c ; }

}


//警告 : 不要写成 {Api_MERCHANT_WORKER_A2_Request}
module.exports = Api_MERCHANT_WORKER_A2_Request;
