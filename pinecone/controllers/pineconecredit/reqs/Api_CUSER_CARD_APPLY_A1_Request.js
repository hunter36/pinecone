/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_CUSER_CARD_APPLY_A1_Request =function () {
    this.api= "Api_CUSER_CARD_APPLY_A1_Request";
	base.apply(this); //base 就是  TransformData
	this.aid;//申请人账户ID
	this.card_type_id;//申请卡种
	this.applytime;//申请时间
	this.amount;//申请额度_预留
	this.comm;//审批处理意见
	this.approval;//审批人
	this.approvetime;//审批时间
	this.approvestate;//是否批准
	this.contractid;//依据合同范本合同文件编号
	this.sid;//SID


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////申请人账户ID
this.setAid    = function (c){this.data.aid    = c ; }
////申请卡种
this.setCard_type_id    = function (c){this.data.card_type_id    = c ; }
////申请时间
this.setApplytime    = function (c){this.data.applytime    = c ; }
////申请额度_预留
this.setAmount    = function (c){this.data.amount    = c ; }
////审批处理意见
this.setComm    = function (c){this.data.comm    = c ; }
////审批人
this.setApproval    = function (c){this.data.approval    = c ; }
////审批时间
this.setApprovetime    = function (c){this.data.approvetime    = c ; }
////是否批准
this.setApprovestate    = function (c){this.data.approvestate    = c ; }
////依据合同范本合同文件编号
this.setContractid    = function (c){this.data.contractid    = c ; }
////SID
this.setSid    = function (c){this.data.sid    = c ; }

}


//警告 : 不要写成 {Api_CUSER_CARD_APPLY_A1_Request}
module.exports = Api_CUSER_CARD_APPLY_A1_Request;
