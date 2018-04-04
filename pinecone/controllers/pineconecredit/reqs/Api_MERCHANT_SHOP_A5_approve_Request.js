/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_MERCHANT_SHOP_A5_approve_Request =function () {
    this.api= "Api_MERCHANT_SHOP_A5_approve_Request";
	base.apply(this); //base 就是  TransformData
	this.aid;//门店或者 E电商虚拟门店平台帐号ID后台隐藏生成对公AID预防计算Account加新的类型
	this.appstate;//审核状态
	this.shopphotos;//[FILE]门店封面实景图
	this.mgridcardfront;//[FILE]管理员身份证正面扫描件[冗余]按照需求审核时上传应该同步到员工表
	this.mgridcardback;//[FILE]管理员身份证反面扫描件[冗余]按照需求审核时上传应该同步到员工表
	this.mgridphoto;//[FILE]店长手持身份证站在门店门前的照片
	this.othermaterials;//[FILE]其他材料[选填项
	this.etypeid;//门店类型
	this.auditopinion;//审核意见


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////门店或者 E电商虚拟门店平台帐号ID后台隐藏生成对公AID预防计算Account加新的类型
this.setAid    = function (c){this.data.aid    = c ; }
////审核状态
this.setAppstate    = function (c){this.data.appstate    = c ; }
////[FILE]门店封面实景图
this.setShopphotos    = function (c){this.data.shopphotos    = c ; }
////[FILE]管理员身份证正面扫描件[冗余]按照需求审核时上传应该同步到员工表
this.setMgridcardfront    = function (c){this.data.mgridcardfront    = c ; }
////[FILE]管理员身份证反面扫描件[冗余]按照需求审核时上传应该同步到员工表
this.setMgridcardback    = function (c){this.data.mgridcardback    = c ; }
////[FILE]店长手持身份证站在门店门前的照片
this.setMgridphoto    = function (c){this.data.mgridphoto    = c ; }
////[FILE]其他材料[选填项
this.setOthermaterials    = function (c){this.data.othermaterials    = c ; }
////门店类型
this.setEtypeid    = function (c){this.data.etypeid    = c ; }
////审核意见
this.setAuditopinion    = function (c){this.data.auditopinion    = c ; }

}


//警告 : 不要写成 {Api_MERCHANT_SHOP_A5_approve_Request}
module.exports = Api_MERCHANT_SHOP_A5_approve_Request;
