/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_ACCOUNT_VERCODE_A3_Request =function () {
    this.api= "Api_ACCOUNT_VERCODE_A3_Request";
	base.apply(this); //base 就是  TransformData
	this.sid;//SID
	this.phonenumber;//手机号
	this.accounttype;//账户类型区分登陆系统
	this.vercode;//验证码
	this.vercodeexpiration;//验证码过期时间
	this.ctime;//创建时间
	this.aid;//帐号ID可以为


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////SID
this.setSid    = function (c){this.data.sid    = c ; }
////手机号
this.setPhonenumber    = function (c){this.data.phonenumber    = c ; }
////账户类型区分登陆系统
this.setAccounttype    = function (c){this.data.accounttype    = c ; }
////验证码
this.setVercode    = function (c){this.data.vercode    = c ; }
////验证码过期时间
this.setVercodeexpiration    = function (c){this.data.vercodeexpiration    = c ; }
////创建时间
this.setCtime    = function (c){this.data.ctime    = c ; }
////帐号ID可以为
this.setAid    = function (c){this.data.aid    = c ; }

}


//警告 : 不要写成 {Api_ACCOUNT_VERCODE_A3_Request}
module.exports = Api_ACCOUNT_VERCODE_A3_Request;
