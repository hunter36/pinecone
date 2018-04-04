/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_CARDMACKETAPPLY_A3_Request =function () {
    this.api= "Api_CARDMACKETAPPLY_A3_Request";
	base.apply(this); //base 就是  TransformData
	this.sid;//申请ID
	this.aid;//申请人发卡方
	this.apptime;//申请时间
	this.cancelaid;//申请撤销人
	this.canceltime;//申请撤销时间
	this.apptype;//申请类型
	this.card_type_id;//卡详细信息索引
	this.comm;//申请处理意见
	this.approval;//审批人
	this.approvetime;//审批时间
	this.approveresult;//是否批准
	this.platservice_rateid;//平台服务费征收标准选择编号ID
	this.additiondoc;//[FILE]平台要求追加上传的其他资料


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////申请ID
this.setSid    = function (c){this.data.sid    = c ; }
////申请人发卡方
this.setAid    = function (c){this.data.aid    = c ; }
////申请时间
this.setApptime    = function (c){this.data.apptime    = c ; }
////申请撤销人
this.setCancelaid    = function (c){this.data.cancelaid    = c ; }
////申请撤销时间
this.setCanceltime    = function (c){this.data.canceltime    = c ; }
////申请类型
this.setApptype    = function (c){this.data.apptype    = c ; }
////卡详细信息索引
this.setCard_type_id    = function (c){this.data.card_type_id    = c ; }
////申请处理意见
this.setComm    = function (c){this.data.comm    = c ; }
////审批人
this.setApproval    = function (c){this.data.approval    = c ; }
////审批时间
this.setApprovetime    = function (c){this.data.approvetime    = c ; }
////是否批准
this.setApproveresult    = function (c){this.data.approveresult    = c ; }
////平台服务费征收标准选择编号ID
this.setPlatservice_rateid    = function (c){this.data.platservice_rateid    = c ; }
////[FILE]平台要求追加上传的其他资料
this.setAdditiondoc    = function (c){this.data.additiondoc    = c ; }

}


//警告 : 不要写成 {Api_CARDMACKETAPPLY_A3_Request}
module.exports = Api_CARDMACKETAPPLY_A3_Request;
