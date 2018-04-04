/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_WALLET_BANKCARDACCOUNT_A1_Request =function () {
    this.api= "Api_WALLET_BANKCARDACCOUNT_A1_Request";
	base.apply(this); //base 就是  TransformData
	this.aid;//账户ID
	this.cardnumber;//卡号
	this.bankcardtype;//银行卡类型
	this.expire;//银行信用卡有效期哦卡面有效期月份年份如0219
	this.cvv2;//银行信用卡签名栏目后3位数字
	this.name;//持卡人姓名
	this.idnumber;//持卡人身份证号
	this.bindphone;//银行预留手机号
	this.cardauthstate;//银行卡认证状态
	this.isbind;//是否绑卡目前只允许唯一绑
	this.bindtime;//绑卡时间
	this.sid;//SID


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////账户ID
this.setAid    = function (c){this.data.aid    = c ; }
////卡号
this.setCardnumber    = function (c){this.data.cardnumber    = c ; }
////银行卡类型
this.setBankcardtype    = function (c){this.data.bankcardtype    = c ; }
////银行信用卡有效期哦卡面有效期月份年份如0219
this.setExpire    = function (c){this.data.expire    = c ; }
////银行信用卡签名栏目后3位数字
this.setCvv2    = function (c){this.data.cvv2    = c ; }
////持卡人姓名
this.setName    = function (c){this.data.name    = c ; }
////持卡人身份证号
this.setIdnumber    = function (c){this.data.idnumber    = c ; }
////银行预留手机号
this.setBindphone    = function (c){this.data.bindphone    = c ; }
////银行卡认证状态
this.setCardauthstate    = function (c){this.data.cardauthstate    = c ; }
////是否绑卡目前只允许唯一绑
this.setIsbind    = function (c){this.data.isbind    = c ; }
////绑卡时间
this.setBindtime    = function (c){this.data.bindtime    = c ; }
////SID
this.setSid    = function (c){this.data.sid    = c ; }

}


//警告 : 不要写成 {Api_WALLET_BANKCARDACCOUNT_A1_Request}
module.exports = Api_WALLET_BANKCARDACCOUNT_A1_Request;
