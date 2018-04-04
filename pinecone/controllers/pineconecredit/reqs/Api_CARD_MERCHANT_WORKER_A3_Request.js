/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_CARD_MERCHANT_WORKER_A3_Request =function () {
    this.api= "Api_CARD_MERCHANT_WORKER_A3_Request";
	base.apply(this); //base 就是  TransformData
	this.sid;//SID
	this.meraid;//归属商户id
	this.aid;//员工ID
	this.name;//姓名
	this.idnumber;//身份证号
	this.regphonenumber;//手机号
	this.password;//登陆密码
	this.ptype;//职位代码查询platrole的接口ACCOUNTTYPE=4 AND ROLELEVEL=2
	this.rname;//[冗余简化查询]角色名称platrole的RNAME
	this.rids;//[冗余简化查询]platrole的SID


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////SID
this.setSid    = function (c){this.data.sid    = c ; }
////归属商户id
this.setMeraid    = function (c){this.data.meraid    = c ; }
////员工ID
this.setAid    = function (c){this.data.aid    = c ; }
////姓名
this.setName    = function (c){this.data.name    = c ; }
////身份证号
this.setIdnumber    = function (c){this.data.idnumber    = c ; }
////手机号
this.setRegphonenumber    = function (c){this.data.regphonenumber    = c ; }
////登陆密码
this.setPassword    = function (c){this.data.password    = c ; }
////职位代码查询platrole的接口ACCOUNTTYPE=4 AND ROLELEVEL=2
this.setPtype    = function (c){this.data.ptype    = c ; }
////[冗余简化查询]角色名称platrole的RNAME
this.setRname    = function (c){this.data.rname    = c ; }
////[冗余简化查询]platrole的SID
this.setRids    = function (c){this.data.rids    = c ; }

}


//警告 : 不要写成 {Api_CARD_MERCHANT_WORKER_A3_Request}
module.exports = Api_CARD_MERCHANT_WORKER_A3_Request;
