/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_MERCHANT_SHOP_A2_Request =function () {
    this.api= "Api_MERCHANT_SHOP_A2_Request";
	base.apply(this); //base 就是  TransformData
	this.aid;//门店或者 E电商虚拟门店平台帐号ID后台隐藏生成对公AID预防计算Account加新的类型
	this.sid;//SID
	this.maid;//归属的商家平台帐号ID
	this.shopname;//门店或者E电商名称
	this.shopcomm;//门店简介或者E电商简介
	this.elog;//[FILE]E电商头图
	this.eip;//E电商IP
	this.eipno;//E电商IP备案编号
	this.ereginfo;//[FILE]E电商备案登记信息
	this.ebatchapprovenum;//E电商自动审批次数
	this.areas;//所属区域*没有区域无法控制
	this.address;//详细地址
	this.tel;//门店联系电话
	this.licensenumber;//营业执照编号
	this.licensephotos;//[FILE]营业执照照片或扫描件
	this.shopphotos;//[FILE]门店封面实景图
	this.brand;//门店品牌信息
	this.othermaterials;//[FILE]其他材料[选填项
	this.shoptypes;//门店类型实体店见SYS_SHOPTYPES电商类见SYS_E_SHOPTYPES**
	this.shopstyle;//名店经营风格标签实体店见SYS_SHOPSTYLE电商类见SYS_E_SHOPSTYLE*
	this.goodscode;//经营大类多选见SYS_GOODSCODE
	this.mantype;//经营类型
	this.mgraid;//店长平台帐号按照需求发布门店时已经指定
	this.mgrname;//店长姓名[冗余
	this.mgridcardfront;//[FILE]管理员身份证正面扫描件[冗余]按照需求审核时上传应该同步到员工表
	this.mgridcardback;//[FILE]管理员身份证反面扫描件[冗余]按照需求审核时上传应该同步到员工表
	this.mgridphoto;//[FILE]店长手持身份证站在门店门前的照片
	this.gpscoordinates;//门店GPS坐标
	this.etypeid;//门店类型
	this.appstate;//审核状态
	this.shopstate;//门店经营状态
	this.approver;//审批人
	this.auditopinion;//审核意见
	this.audittime;//审核时间
	this.commfile;//[FILE]上传备注材料选填*
	this.sqlcondition;//SQLCONDITION-无字典对应
	this.orderexpr;//ORDEREXPR-无字典对应


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////门店或者 E电商虚拟门店平台帐号ID后台隐藏生成对公AID预防计算Account加新的类型
this.setAid    = function (c){this.data.aid    = c ; }
////SID
this.setSid    = function (c){this.data.sid    = c ; }
////归属的商家平台帐号ID
this.setMaid    = function (c){this.data.maid    = c ; }
////门店或者E电商名称
this.setShopname    = function (c){this.data.shopname    = c ; }
////门店简介或者E电商简介
this.setShopcomm    = function (c){this.data.shopcomm    = c ; }
////[FILE]E电商头图
this.setElog    = function (c){this.data.elog    = c ; }
////E电商IP
this.setEip    = function (c){this.data.eip    = c ; }
////E电商IP备案编号
this.setEipno    = function (c){this.data.eipno    = c ; }
////[FILE]E电商备案登记信息
this.setEreginfo    = function (c){this.data.ereginfo    = c ; }
////E电商自动审批次数
this.setEbatchapprovenum    = function (c){this.data.ebatchapprovenum    = c ; }
////所属区域*没有区域无法控制
this.setAreas    = function (c){this.data.areas    = c ; }
////详细地址
this.setAddress    = function (c){this.data.address    = c ; }
////门店联系电话
this.setTel    = function (c){this.data.tel    = c ; }
////营业执照编号
this.setLicensenumber    = function (c){this.data.licensenumber    = c ; }
////[FILE]营业执照照片或扫描件
this.setLicensephotos    = function (c){this.data.licensephotos    = c ; }
////[FILE]门店封面实景图
this.setShopphotos    = function (c){this.data.shopphotos    = c ; }
////门店品牌信息
this.setBrand    = function (c){this.data.brand    = c ; }
////[FILE]其他材料[选填项
this.setOthermaterials    = function (c){this.data.othermaterials    = c ; }
////门店类型实体店见SYS_SHOPTYPES电商类见SYS_E_SHOPTYPES**
this.setShoptypes    = function (c){this.data.shoptypes    = c ; }
////名店经营风格标签实体店见SYS_SHOPSTYLE电商类见SYS_E_SHOPSTYLE*
this.setShopstyle    = function (c){this.data.shopstyle    = c ; }
////经营大类多选见SYS_GOODSCODE
this.setGoodscode    = function (c){this.data.goodscode    = c ; }
////经营类型
this.setMantype    = function (c){this.data.mantype    = c ; }
////店长平台帐号按照需求发布门店时已经指定
this.setMgraid    = function (c){this.data.mgraid    = c ; }
////店长姓名[冗余
this.setMgrname    = function (c){this.data.mgrname    = c ; }
////[FILE]管理员身份证正面扫描件[冗余]按照需求审核时上传应该同步到员工表
this.setMgridcardfront    = function (c){this.data.mgridcardfront    = c ; }
////[FILE]管理员身份证反面扫描件[冗余]按照需求审核时上传应该同步到员工表
this.setMgridcardback    = function (c){this.data.mgridcardback    = c ; }
////[FILE]店长手持身份证站在门店门前的照片
this.setMgridphoto    = function (c){this.data.mgridphoto    = c ; }
////门店GPS坐标
this.setGpscoordinates    = function (c){this.data.gpscoordinates    = c ; }
////门店类型
this.setEtypeid    = function (c){this.data.etypeid    = c ; }
////审核状态
this.setAppstate    = function (c){this.data.appstate    = c ; }
////门店经营状态
this.setShopstate    = function (c){this.data.shopstate    = c ; }
////审批人
this.setApprover    = function (c){this.data.approver    = c ; }
////审核意见
this.setAuditopinion    = function (c){this.data.auditopinion    = c ; }
////审核时间
this.setAudittime    = function (c){this.data.audittime    = c ; }
////[FILE]上传备注材料选填*
this.setCommfile    = function (c){this.data.commfile    = c ; }
////SQLCONDITION-无字典对应
this.setSqlcondition    = function (c){this.data.sqlcondition    = c ; }
////ORDEREXPR-无字典对应
this.setOrderexpr    = function (c){this.data.orderexpr    = c ; }

}


//警告 : 不要写成 {Api_MERCHANT_SHOP_A2_Request}
module.exports = Api_MERCHANT_SHOP_A2_Request;
