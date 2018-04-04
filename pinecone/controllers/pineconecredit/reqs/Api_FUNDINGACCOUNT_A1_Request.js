/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_FUNDINGACCOUNT_A1_Request =function () {
    this.api= "Api_FUNDINGACCOUNT_A1_Request";
	base.apply(this); //base 就是  TransformData
	this.aid;//账户ID
	this.cashaccount;//现金账户
	this.freezeaccount;//冻结账户
	this.commissionaccount;//佣金账户
	this.bankcardnumber;//统计银行卡张数
	this.creditcardnumber;//统计信用卡张数
	this.thirdpaymentaccount;//3方支付账户
	this.cmp_name;//对公公司名称
	this.cmp_taxnumber;//对公税号
	this.cmp_address;//对公地址
	this.cmp_telephone;//对公电话
	this.cmp_accountbank;//对公开户行
	this.cmp_accountname;//对公账户名
	this.cmp_accountnumber;//对公账号
	this.sid;//SID


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////账户ID
this.setAid    = function (c){this.data.aid    = c ; }
////现金账户
this.setCashaccount    = function (c){this.data.cashaccount    = c ; }
////冻结账户
this.setFreezeaccount    = function (c){this.data.freezeaccount    = c ; }
////佣金账户
this.setCommissionaccount    = function (c){this.data.commissionaccount    = c ; }
////统计银行卡张数
this.setBankcardnumber    = function (c){this.data.bankcardnumber    = c ; }
////统计信用卡张数
this.setCreditcardnumber    = function (c){this.data.creditcardnumber    = c ; }
////3方支付账户
this.setThirdpaymentaccount    = function (c){this.data.thirdpaymentaccount    = c ; }
////对公公司名称
this.setCmp_name    = function (c){this.data.cmp_name    = c ; }
////对公税号
this.setCmp_taxnumber    = function (c){this.data.cmp_taxnumber    = c ; }
////对公地址
this.setCmp_address    = function (c){this.data.cmp_address    = c ; }
////对公电话
this.setCmp_telephone    = function (c){this.data.cmp_telephone    = c ; }
////对公开户行
this.setCmp_accountbank    = function (c){this.data.cmp_accountbank    = c ; }
////对公账户名
this.setCmp_accountname    = function (c){this.data.cmp_accountname    = c ; }
////对公账号
this.setCmp_accountnumber    = function (c){this.data.cmp_accountnumber    = c ; }
////SID
this.setSid    = function (c){this.data.sid    = c ; }

}


//警告 : 不要写成 {Api_FUNDINGACCOUNT_A1_Request}
module.exports = Api_FUNDINGACCOUNT_A1_Request;
