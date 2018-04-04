/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_CM_BINDAPPLY_A5_rejectApply_Request =function () {
    this.api= "Api_CM_BINDAPPLY_A5_rejectApply_Request";
	base.apply(this); //base 就是  TransformData
	this.sid;//SID
	this.approvalinfo;//原始邀约审批信息


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////SID
this.setSid    = function (c){this.data.sid    = c ; }
////原始邀约审批信息
this.setApprovalinfo    = function (c){this.data.approvalinfo    = c ; }

}


//警告 : 不要写成 {Api_CM_BINDAPPLY_A5_rejectApply_Request}
module.exports = Api_CM_BINDAPPLY_A5_rejectApply_Request;
