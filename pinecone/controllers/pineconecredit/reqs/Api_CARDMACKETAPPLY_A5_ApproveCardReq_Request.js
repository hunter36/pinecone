/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_CARDMACKETAPPLY_A5_ApproveCardReq_Request =function () {
    this.api= "Api_CARDMACKETAPPLY_A5_ApproveCardReq_Request";
	base.apply(this); //base 就是  TransformData
	this.sid;//申请ID
	this.approveresult;//是否批准
	this.platservice_rateid;//平台服务费征收标准选择编号ID
	this.comm;//申请处理意见
	this.additiondoc;//[FILE]平台要求追加上传的其他资料


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////申请ID
this.setSid    = function (c){this.data.sid    = c ; }
////是否批准
this.setApproveresult    = function (c){this.data.approveresult    = c ; }
////平台服务费征收标准选择编号ID
this.setPlatservice_rateid    = function (c){this.data.platservice_rateid    = c ; }
////申请处理意见
this.setComm    = function (c){this.data.comm    = c ; }
////[FILE]平台要求追加上传的其他资料
this.setAdditiondoc    = function (c){this.data.additiondoc    = c ; }

}


//警告 : 不要写成 {Api_CARDMACKETAPPLY_A5_ApproveCardReq_Request}
module.exports = Api_CARDMACKETAPPLY_A5_ApproveCardReq_Request;
