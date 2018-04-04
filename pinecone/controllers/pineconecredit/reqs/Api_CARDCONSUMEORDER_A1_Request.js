/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_CARDCONSUMEORDER_A1_Request =function () {
    this.api= "Api_CARDCONSUMEORDER_A1_Request";
	base.apply(this); //base 就是  TransformData
	this.cardid;//卡号[卡库关联发卡方
	this.card_type_id;//卡种ID
	this.typename;//卡种产品名称
	this.clog;//[FILE]卡片Log
	this.aid;//用户账户ID关联用户
	this.aname;//APP卡用户姓名[已经实名认证][冗余
	this.cmid;//信用卡商户ID
	this.cmname;//信用卡商户名称[冗余一下缺点是怕改名称以后再取消做关联
	this.mid;//商户ID
	this.mname;//商户名称[冗余一下缺点是怕改名称以后再取消做关联
	this.shopid;//门店ID[关联商户
	this.shopname;//门店名称[冗余一下缺点是怕改名称以后再取消做关联
	this.shoptype;//门店类型
	this.salesmanagerid;//销售经理ID目前暂无
	this.orderamount;//订单总额
	this.creditcardamount;//信用卡消费总额
	this.ordertime;//订单时间
	this.warranty;//质保期期内可取消
	this.orderstate;//订单状态
	this.ordertype;//订单支付类型
	this.approver;//审批人
	this.auditopinion;//审核意见
	this.audittime;//审核时间
	this.sid;//订单号[PK]


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////卡号[卡库关联发卡方
this.setCardid    = function (c){this.data.cardid    = c ; }
////卡种ID
this.setCard_type_id    = function (c){this.data.card_type_id    = c ; }
////卡种产品名称
this.setTypename    = function (c){this.data.typename    = c ; }
////[FILE]卡片Log
this.setClog    = function (c){this.data.clog    = c ; }
////用户账户ID关联用户
this.setAid    = function (c){this.data.aid    = c ; }
////APP卡用户姓名[已经实名认证][冗余
this.setAname    = function (c){this.data.aname    = c ; }
////信用卡商户ID
this.setCmid    = function (c){this.data.cmid    = c ; }
////信用卡商户名称[冗余一下缺点是怕改名称以后再取消做关联
this.setCmname    = function (c){this.data.cmname    = c ; }
////商户ID
this.setMid    = function (c){this.data.mid    = c ; }
////商户名称[冗余一下缺点是怕改名称以后再取消做关联
this.setMname    = function (c){this.data.mname    = c ; }
////门店ID[关联商户
this.setShopid    = function (c){this.data.shopid    = c ; }
////门店名称[冗余一下缺点是怕改名称以后再取消做关联
this.setShopname    = function (c){this.data.shopname    = c ; }
////门店类型
this.setShoptype    = function (c){this.data.shoptype    = c ; }
////销售经理ID目前暂无
this.setSalesmanagerid    = function (c){this.data.salesmanagerid    = c ; }
////订单总额
this.setOrderamount    = function (c){this.data.orderamount    = c ; }
////信用卡消费总额
this.setCreditcardamount    = function (c){this.data.creditcardamount    = c ; }
////订单时间
this.setOrdertime    = function (c){this.data.ordertime    = c ; }
////质保期期内可取消
this.setWarranty    = function (c){this.data.warranty    = c ; }
////订单状态
this.setOrderstate    = function (c){this.data.orderstate    = c ; }
////订单支付类型
this.setOrdertype    = function (c){this.data.ordertype    = c ; }
////审批人
this.setApprover    = function (c){this.data.approver    = c ; }
////审核意见
this.setAuditopinion    = function (c){this.data.auditopinion    = c ; }
////审核时间
this.setAudittime    = function (c){this.data.audittime    = c ; }
////订单号[PK]
this.setSid    = function (c){this.data.sid    = c ; }

}


//警告 : 不要写成 {Api_CARDCONSUMEORDER_A1_Request}
module.exports = Api_CARDCONSUMEORDER_A1_Request;
