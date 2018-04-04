/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_CUSER_A3_Request =function () {
    this.api= "Api_CUSER_A3_Request";
	base.apply(this); //base 就是  TransformData
	this.sid;//SID
	this.aid;//帐号
	this.name;//姓名
	this.idnum;//身份证号码
	this.photo;//[FILE]照片
	this.idcardfrontscan;//[FILE]管理员身份证正面扫描件
	this.idnegativescan;//[FILE]管理员身份证反面扫描件
	this.realnameauthstate;//实名认证状态
	this.alipayauth;//支付宝授权认证状态
	this.telecomauth;//运营商授权认证状态
	this.zimaauth;//芝麻信用授权认证状态
	this.emcontact1;//紧急联系人1
	this.emcontact1phone;//紧急联系人1电话
	this.emcontact1type;//紧急联系人1关系
	this.emcontact2;//紧急联系人2
	this.emcontact2phone;//紧急联系人2电话
	this.emcontact2type;//紧急联系人2关系
	this.emcontact3;//紧急联系人3
	this.emcontact3phone;//紧急联系人3电话


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////SID
this.setSid    = function (c){this.data.sid    = c ; }
////帐号
this.setAid    = function (c){this.data.aid    = c ; }
////姓名
this.setName    = function (c){this.data.name    = c ; }
////身份证号码
this.setIdnum    = function (c){this.data.idnum    = c ; }
////[FILE]照片
this.setPhoto    = function (c){this.data.photo    = c ; }
////[FILE]管理员身份证正面扫描件
this.setIdcardfrontscan    = function (c){this.data.idcardfrontscan    = c ; }
////[FILE]管理员身份证反面扫描件
this.setIdnegativescan    = function (c){this.data.idnegativescan    = c ; }
////实名认证状态
this.setRealnameauthstate    = function (c){this.data.realnameauthstate    = c ; }
////支付宝授权认证状态
this.setAlipayauth    = function (c){this.data.alipayauth    = c ; }
////运营商授权认证状态
this.setTelecomauth    = function (c){this.data.telecomauth    = c ; }
////芝麻信用授权认证状态
this.setZimaauth    = function (c){this.data.zimaauth    = c ; }
////紧急联系人1
this.setEmcontact1    = function (c){this.data.emcontact1    = c ; }
////紧急联系人1电话
this.setEmcontact1phone    = function (c){this.data.emcontact1phone    = c ; }
////紧急联系人1关系
this.setEmcontact1type    = function (c){this.data.emcontact1type    = c ; }
////紧急联系人2
this.setEmcontact2    = function (c){this.data.emcontact2    = c ; }
////紧急联系人2电话
this.setEmcontact2phone    = function (c){this.data.emcontact2phone    = c ; }
////紧急联系人2关系
this.setEmcontact2type    = function (c){this.data.emcontact2type    = c ; }
////紧急联系人3
this.setEmcontact3    = function (c){this.data.emcontact3    = c ; }
////紧急联系人3电话
this.setEmcontact3phone    = function (c){this.data.emcontact3phone    = c ; }

}


//警告 : 不要写成 {Api_CUSER_A3_Request}
module.exports = Api_CUSER_A3_Request;
