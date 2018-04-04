/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_ACCOUNT_PAYLOG_A1_Request =function () {
    this.api= "Api_ACCOUNT_PAYLOG_A1_Request";
	base.apply(this); //base 就是  TransformData
	this.aid;//记账账户
	this.debit;//借方
	this.credit;//贷方
	this.subject;//科目
	this.summary;//备注和摘要
	this.amount;//金额
	this.orderid;//我方订单单号
	this.paydepartid;//３方支付机构
	this.lastthridpayid;//最后一笔３方支付凭证流水号
	this.accsnapshot;//资金变动前钱包快照[预留
	this.wtime;//记账时间
	this.state;//成功标志
	this.financialaccountant;//财务记账人
	this.financialreviewer;//财务审核人
	this.auditopinion;//审核意见[预留
	this.sid;//SID流水号


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////记账账户
this.setAid    = function (c){this.data.aid    = c ; }
////借方
this.setDebit    = function (c){this.data.debit    = c ; }
////贷方
this.setCredit    = function (c){this.data.credit    = c ; }
////科目
this.setSubject    = function (c){this.data.subject    = c ; }
////备注和摘要
this.setSummary    = function (c){this.data.summary    = c ; }
////金额
this.setAmount    = function (c){this.data.amount    = c ; }
////我方订单单号
this.setOrderid    = function (c){this.data.orderid    = c ; }
////３方支付机构
this.setPaydepartid    = function (c){this.data.paydepartid    = c ; }
////最后一笔３方支付凭证流水号
this.setLastthridpayid    = function (c){this.data.lastthridpayid    = c ; }
////资金变动前钱包快照[预留
this.setAccsnapshot    = function (c){this.data.accsnapshot    = c ; }
////记账时间
this.setWtime    = function (c){this.data.wtime    = c ; }
////成功标志
this.setState    = function (c){this.data.state    = c ; }
////财务记账人
this.setFinancialaccountant    = function (c){this.data.financialaccountant    = c ; }
////财务审核人
this.setFinancialreviewer    = function (c){this.data.financialreviewer    = c ; }
////审核意见[预留
this.setAuditopinion    = function (c){this.data.auditopinion    = c ; }
////SID流水号
this.setSid    = function (c){this.data.sid    = c ; }

}


//警告 : 不要写成 {Api_ACCOUNT_PAYLOG_A1_Request}
module.exports = Api_ACCOUNT_PAYLOG_A1_Request;
