/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_CARD_MERCHANT_A2_Request =function () {
    this.api= "Api_CARD_MERCHANT_A2_Request";
	base.apply(this); //base 就是  TransformData
	this.sid;//SID
	this.aid;//帐号
	this.accounttype;//账户类型
	this.citycode;//地区编码
	this.companyname;//企业名称
	this.address;//公司常驻办公地址
	this.settledagreement;//[FILE]入驻协议审核必填_
	this.lidcard_front;//[FILE]法人身份证正面扫描件
	this.lidcard_back;//[FILE]法人身份证反面扫描件
	this.adminname;//管理员姓名
	this.idnumber;//管理员身身份证号
	this.phonenumber;//管理员身手机号接收短信
	this.idcardfrontscan;//[FILE]管理员身份证正面扫描件
	this.idnegativescan;//[FILE]管理员身份证反面扫描件
	this.licensenumber;//营业执照编号
	this.licensephotos;//[FILE]营业执照照片
	this.openingpermit;//开户许可证编号
	this.openingpermitfile;//[FILE]开户许可证可证扫描件审核必填_
	this.othermaterials;//[FILE]其他材料审核选填_
	this.accountchange;//账户财务账户信息变更申请材料[如有
	this.etypeid;//商户类型[预留区分
	this.companytel;//企业联系电话审核必填_
	this.legalname;//企业法人姓名审核必填_
	this.appstate;//审核状态
	this.approver;//审批人
	this.auditopinion;//审核意见
	this.audittime;//审核时间
	this.sqlcondition;//SQLCONDITION-无字典对应
	this.orderexpr;//ORDEREXPR-无字典对应


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////SID
this.setSid    = function (c){this.data.sid    = c ; }
////帐号
this.setAid    = function (c){this.data.aid    = c ; }
////账户类型
this.setAccounttype    = function (c){this.data.accounttype    = c ; }
////地区编码
this.setCitycode    = function (c){this.data.citycode    = c ; }
////企业名称
this.setCompanyname    = function (c){this.data.companyname    = c ; }
////公司常驻办公地址
this.setAddress    = function (c){this.data.address    = c ; }
////[FILE]入驻协议审核必填_
this.setSettledagreement    = function (c){this.data.settledagreement    = c ; }
////[FILE]法人身份证正面扫描件
this.setLidcard_front    = function (c){this.data.lidcard_front    = c ; }
////[FILE]法人身份证反面扫描件
this.setLidcard_back    = function (c){this.data.lidcard_back    = c ; }
////管理员姓名
this.setAdminname    = function (c){this.data.adminname    = c ; }
////管理员身身份证号
this.setIdnumber    = function (c){this.data.idnumber    = c ; }
////管理员身手机号接收短信
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
////[FILE]其他材料审核选填_
this.setOthermaterials    = function (c){this.data.othermaterials    = c ; }
////账户财务账户信息变更申请材料[如有
this.setAccountchange    = function (c){this.data.accountchange    = c ; }
////商户类型[预留区分
this.setEtypeid    = function (c){this.data.etypeid    = c ; }
////企业联系电话审核必填_
this.setCompanytel    = function (c){this.data.companytel    = c ; }
////企业法人姓名审核必填_
this.setLegalname    = function (c){this.data.legalname    = c ; }
////审核状态
this.setAppstate    = function (c){this.data.appstate    = c ; }
////审批人
this.setApprover    = function (c){this.data.approver    = c ; }
////审核意见
this.setAuditopinion    = function (c){this.data.auditopinion    = c ; }
////审核时间
this.setAudittime    = function (c){this.data.audittime    = c ; }
////SQLCONDITION-无字典对应
this.setSqlcondition    = function (c){this.data.sqlcondition    = c ; }
////ORDEREXPR-无字典对应
this.setOrderexpr    = function (c){this.data.orderexpr    = c ; }

}


//警告 : 不要写成 {Api_CARD_MERCHANT_A2_Request}
module.exports = Api_CARD_MERCHANT_A2_Request;
