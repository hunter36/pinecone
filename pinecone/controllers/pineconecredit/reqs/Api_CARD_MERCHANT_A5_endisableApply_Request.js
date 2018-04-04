/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_CARD_MERCHANT_A5_endisableApply_Request =function () {
    this.api= "Api_CARD_MERCHANT_A5_endisableApply_Request";
	base.apply(this); //base 就是  TransformData
	this.aid;//帐号
	this.appstate;//审核状态
	this.auditopinion;//审核意见


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////帐号
this.setAid    = function (c){this.data.aid    = c ; }
////审核状态
this.setAppstate    = function (c){this.data.appstate    = c ; }
////审核意见
this.setAuditopinion    = function (c){this.data.auditopinion    = c ; }

}


//警告 : 不要写成 {Api_CARD_MERCHANT_A5_endisableApply_Request}
module.exports = Api_CARD_MERCHANT_A5_endisableApply_Request;
