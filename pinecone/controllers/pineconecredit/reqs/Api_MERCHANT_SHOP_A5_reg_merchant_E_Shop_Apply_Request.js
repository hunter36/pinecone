/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_MERCHANT_SHOP_A5_reg_merchant_E_Shop_Apply_Request =function () {
    this.api= "Api_MERCHANT_SHOP_A5_reg_merchant_E_Shop_Apply_Request";
	base.apply(this); //base 就是  TransformData
	this.maid;//归属的商家平台帐号ID
	this.eshopname;//ESHOPNAME-无字典对应
	this.eshopcomm;//ESHOPCOMM-无字典对应
	this.elog;//[FILE]E电商头图
	this.eip;//E电商IP
	this.eipno;//E电商IP备案编号
	this.etags;//ETAGS-无字典对应
	this.ereginfo;//[FILE]E电商备案登记信息
	this.commfile;//[FILE]上传备注材料选填*
	this.batchapprovenum;//BATCHAPPROVENUM-无字典对应
	this.approver;//审批人
	this.auditopinion;//审核意见
	this.audittime;//审核时间


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////归属的商家平台帐号ID
this.setMaid    = function (c){this.data.maid    = c ; }
////ESHOPNAME-无字典对应
this.setEshopname    = function (c){this.data.eshopname    = c ; }
////ESHOPCOMM-无字典对应
this.setEshopcomm    = function (c){this.data.eshopcomm    = c ; }
////[FILE]E电商头图
this.setElog    = function (c){this.data.elog    = c ; }
////E电商IP
this.setEip    = function (c){this.data.eip    = c ; }
////E电商IP备案编号
this.setEipno    = function (c){this.data.eipno    = c ; }
////ETAGS-无字典对应
this.setEtags    = function (c){this.data.etags    = c ; }
////[FILE]E电商备案登记信息
this.setEreginfo    = function (c){this.data.ereginfo    = c ; }
////[FILE]上传备注材料选填*
this.setCommfile    = function (c){this.data.commfile    = c ; }
////BATCHAPPROVENUM-无字典对应
this.setBatchapprovenum    = function (c){this.data.batchapprovenum    = c ; }
////审批人
this.setApprover    = function (c){this.data.approver    = c ; }
////审核意见
this.setAuditopinion    = function (c){this.data.auditopinion    = c ; }
////审核时间
this.setAudittime    = function (c){this.data.audittime    = c ; }

}


//警告 : 不要写成 {Api_MERCHANT_SHOP_A5_reg_merchant_E_Shop_Apply_Request}
module.exports = Api_MERCHANT_SHOP_A5_reg_merchant_E_Shop_Apply_Request;
