/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_ACCOUNT_A5_checkVerCode_plat_Request =function () {
    this.api= "Api_ACCOUNT_A5_checkVerCode_plat_Request";
	base.apply(this); //base 就是  TransformData
	this.accounttype;//账户类型区分登陆系统
	this.regphonenumber;//注册手机号
	this.vercode;//当前验证码[冗余


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////账户类型区分登陆系统
this.setAccounttype    = function (c){this.data.accounttype    = c ; }
////注册手机号
this.setRegphonenumber    = function (c){this.data.regphonenumber    = c ; }
////当前验证码[冗余
this.setVercode    = function (c){this.data.vercode    = c ; }

}


//警告 : 不要写成 {Api_ACCOUNT_A5_checkVerCode_plat_Request}
module.exports = Api_ACCOUNT_A5_checkVerCode_plat_Request;
