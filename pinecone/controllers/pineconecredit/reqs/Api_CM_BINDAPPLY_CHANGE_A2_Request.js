/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_CM_BINDAPPLY_CHANGE_A2_Request =function () {
    this.api= "Api_CM_BINDAPPLY_CHANGE_A2_Request";
	base.apply(this); //base 就是  TransformData
	this.sid;//SID
	this.reqaid;//申请人
	this.bindsid;//对那份合同做的变更内部用SID关联
	this.settletype;//货款结算方式
	this.settleperiod;//货款结算周期
	this.changerflag;//佣金流向
	this.changerrate;//佣金率
	this.appstatus;//状态
	this.appaid;//审批人必须和合作的对方的有权限审批的人来审批
	this.approvalinfo;//变更审批信息
	this.processingtime;//变更审批时间
	this.sqlcondition;//SQLCONDITION-无字典对应
	this.orderexpr;//ORDEREXPR-无字典对应


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////SID
this.setSid    = function (c){this.data.sid    = c ; }
////申请人
this.setReqaid    = function (c){this.data.reqaid    = c ; }
////对那份合同做的变更内部用SID关联
this.setBindsid    = function (c){this.data.bindsid    = c ; }
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
////审批人必须和合作的对方的有权限审批的人来审批
this.setAppaid    = function (c){this.data.appaid    = c ; }
////变更审批信息
this.setApprovalinfo    = function (c){this.data.approvalinfo    = c ; }
////变更审批时间
this.setProcessingtime    = function (c){this.data.processingtime    = c ; }
////SQLCONDITION-无字典对应
this.setSqlcondition    = function (c){this.data.sqlcondition    = c ; }
////ORDEREXPR-无字典对应
this.setOrderexpr    = function (c){this.data.orderexpr    = c ; }

}


//警告 : 不要写成 {Api_CM_BINDAPPLY_CHANGE_A2_Request}
module.exports = Api_CM_BINDAPPLY_CHANGE_A2_Request;
