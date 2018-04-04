/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_MERCHANT_A5_reg_approve_Request =function () {
    this.api= "Api_MERCHANT_A5_reg_approve_Request";
	base.apply(this); //base 就是  TransformData
	this.aid;//帐号
	this.appstate;//审核状态
	this.auditopinion;//审核意见
	this.companytel;//企业联系电话审核必填_
	this.legalname;//企业法人姓名审核必填_
	this.lidcard_front;//[FILE]法人身份证正面扫描件
	this.lidcard_back;//[FILE]法人身份证反面扫描件
	this.adminname;//管理员姓名
	this.idnumber;//管理员身身份证号
	this.phonenumber;//管理员身手机号
	this.idcardfrontscan;//[FILE]管理员身份证正面扫描件
	this.idnegativescan;//[FILE]管理员身份证反面扫描件
	this.licensenumber;//营业执照编号
	this.licensephotos;//[FILE]营业执照照片
	this.openingpermit;//开户许可证编号
	this.openingpermitfile;//[FILE]开户许可证可证扫描件审核必填_
	this.settledagreement;//[FILE]商户入驻协议
	this.othermaterials;//[FILE]其他材料[选填项


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////帐号
this.setAid    = function (c){this.data.aid    = c ; }
////审核状态
this.setAppstate    = function (c){this.data.appstate    = c ; }
////审核意见
this.setAuditopinion    = function (c){this.data.auditopinion    = c ; }
////企业联系电话审核必填_
this.setCompanytel    = function (c){this.data.companytel    = c ; }
////企业法人姓名审核必填_
this.setLegalname    = function (c){this.data.legalname    = c ; }
////[FILE]法人身份证正面扫描件
this.setLidcard_front    = function (c){this.data.lidcard_front    = c ; }
////[FILE]法人身份证反面扫描件
this.setLidcard_back    = function (c){this.data.lidcard_back    = c ; }
////管理员姓名
this.setAdminname    = function (c){this.data.adminname    = c ; }
////管理员身身份证号
this.setIdnumber    = function (c){this.data.idnumber    = c ; }
////管理员身手机号
this.setPhonenumber    = function (c){this.data.phonenumber    = c ; }
////[FILE]管理员身份证正面扫描件
this.setIdcardfrontscan    = function (c){this.data.idcardfrontscan    = c ; }
////[FILE]管理员身份证反面扫描件
this.setIdnegativescan    = function (c){this.data.idnegativescan    = c ; }
////营业执照编号
this.setLicensenumber    = function (c){this.data.licensenumber    = c ; }
////[FILE]营业执照照片
this.setLicensephotos    = function (c){this.data.licensephotos    = c ; }
////开户许可证编号
this.setOpeningpermit    = function (c){this.data.openingpermit    = c ; }
////[FILE]开户许可证可证扫描件审核必填_
this.setOpeningpermitfile    = function (c){this.data.openingpermitfile    = c ; }
////[FILE]商户入驻协议
this.setSettledagreement    = function (c){this.data.settledagreement    = c ; }
////[FILE]其他材料[选填项
this.setOthermaterials    = function (c){this.data.othermaterials    = c ; }

}


//警告 : 不要写成 {Api_MERCHANT_A5_reg_approve_Request}
module.exports = Api_MERCHANT_A5_reg_approve_Request;
