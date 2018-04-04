/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_CM_BINDAPPLY_A3_Request =function () {
    this.api= "Api_CM_BINDAPPLY_A3_Request";
	base.apply(this); //base 就是  TransformData
	this.sid;//SID
	this.contid;//合作编号目前简单编码为SYSDATE
	this.card_merchan_aid;//卡商ID卡商的对公帐号
	this.merchant_aid;//商户ID商户的对公帐号
	this.applicationtime;//邀约提出时间
	this.reqaid;//发起人的AID发起操作员
	this.apptype;//发起类型
	this.changsid;//变更邀约引起的话最后邀约变更的版本号对应Card_BindApply_Change的SID
	this.settletype;//货款结算方式
	this.settleperiod;//货款结算周期
	this.changerflag;//佣金流向
	this.changerrate;//佣金率
	this.appstatus;//状态
	this.appaid;//审批人AppType是0的话那么审批肯定是Merchant_AID的下属员工是1则相反
	this.approvalinfo;//原始邀约审批信息
	this.processingtime;//原始邀约审批时间


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////SID
this.setSid    = function (c){this.data.sid    = c ; }
////合作编号目前简单编码为SYSDATE
this.setContid    = function (c){this.data.contid    = c ; }
////卡商ID卡商的对公帐号
this.setCard_merchan_aid    = function (c){this.data.card_merchan_aid    = c ; }
////商户ID商户的对公帐号
this.setMerchant_aid    = function (c){this.data.merchant_aid    = c ; }
////邀约提出时间
this.setApplicationtime    = function (c){this.data.applicationtime    = c ; }
////发起人的AID发起操作员
this.setReqaid    = function (c){this.data.reqaid    = c ; }
////发起类型
this.setApptype    = function (c){this.data.apptype    = c ; }
////变更邀约引起的话最后邀约变更的版本号对应Card_BindApply_Change的SID
this.setChangsid    = function (c){this.data.changsid    = c ; }
////货款结算方式
this.setSettletype    = function (c){this.data.settletype    = c ; }
////货款结算周期
this.setSettleperiod    = function (c){this.data.settleperiod    = c ; }
////佣金流向
this.setChangerflag    = function (c){this.data.changerflag    = c ; }
////佣金率
this.setChangerrate    = function (c){this.data.changerrate    = c ; }
////状态
this.setAppstatus    = function (c){this.data.appstatus    = c ; }
////审批人AppType是0的话那么审批肯定是Merchant_AID的下属员工是1则相反
this.setAppaid    = function (c){this.data.appaid    = c ; }
////原始邀约审批信息
this.setApprovalinfo    = function (c){this.data.approvalinfo    = c ; }
////原始邀约审批时间
this.setProcessingtime    = function (c){this.data.processingtime    = c ; }

}


//警告 : 不要写成 {Api_CM_BINDAPPLY_A3_Request}
module.exports = Api_CM_BINDAPPLY_A3_Request;
