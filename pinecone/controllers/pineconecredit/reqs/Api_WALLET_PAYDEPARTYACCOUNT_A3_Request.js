/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_WALLET_PAYDEPARTYACCOUNT_A3_Request =function () {
    this.api= "Api_WALLET_PAYDEPARTYACCOUNT_A3_Request";
	base.apply(this); //base 就是  TransformData
	this.sid;//SID
	this.aid;//平台账号
	this.accounttype;//3方账户类型
	this.username;//3方支付机构的用户名
	this.auth;//3方支付机构的授权
	this.params;//其他参数
	this.bindtime;//绑定时间


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////SID
this.setSid    = function (c){this.data.sid    = c ; }
////平台账号
this.setAid    = function (c){this.data.aid    = c ; }
////3方账户类型
this.setAccounttype    = function (c){this.data.accounttype    = c ; }
////3方支付机构的用户名
this.setUsername    = function (c){this.data.username    = c ; }
////3方支付机构的授权
this.setAuth    = function (c){this.data.auth    = c ; }
////其他参数
this.setParams    = function (c){this.data.params    = c ; }
////绑定时间
this.setBindtime    = function (c){this.data.bindtime    = c ; }

}


//警告 : 不要写成 {Api_WALLET_PAYDEPARTYACCOUNT_A3_Request}
module.exports = Api_WALLET_PAYDEPARTYACCOUNT_A3_Request;
