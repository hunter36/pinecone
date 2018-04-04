/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_ACCOUNT_A5_login_plat_byaid_Request =function () {
    this.api= "Api_ACCOUNT_A5_login_plat_byaid_Request";
	base.apply(this); //base 就是  TransformData
	this.aid;//帐号_全系统唯一
	this.password;//登陆密码
	this.accounttype;//账户类型区分登陆系统


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////帐号_全系统唯一
this.setAid    = function (c){this.data.aid    = c ; }
////登陆密码
this.setPassword    = function (c){this.data.password    = c ; }
////账户类型区分登陆系统
this.setAccounttype    = function (c){this.data.accounttype    = c ; }

}


//警告 : 不要写成 {Api_ACCOUNT_A5_login_plat_byaid_Request}
module.exports = Api_ACCOUNT_A5_login_plat_byaid_Request;
