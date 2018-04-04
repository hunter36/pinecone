/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_ADDRESSBOOK_A1_Request =function () {
    this.api= "Api_ADDRESSBOOK_A1_Request";
	base.apply(this); //base 就是  TransformData
	this.gid;//所属的分组ID
	this.ownertype;//所属通讯录组的属主类型冗余为了查询方便
	this.aid;//平台帐号
	this.accounttype;//账户类型这个针对AID是固定的这里冗余
	this.ctime;//创建时间
	this.maid;//归属商户或者卡商的ID冗余字段
	this.maname;//归属的商户或者卡商的名称冗余字段
	this.roleid;//平台角色冗余字段
	this.rname;//角色名称冗余字段
	this.aname;//称呼对于用户是姓名对于商户等可能是企业名称冗余字段
	this.phonenumber;//注册手机号冗余字段
	this.acardid;//身份证号码冗余字段
	this.comm;//备注预留
	this.sid;//SID


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////所属的分组ID
this.setGid    = function (c){this.data.gid    = c ; }
////所属通讯录组的属主类型冗余为了查询方便
this.setOwnertype    = function (c){this.data.ownertype    = c ; }
////平台帐号
this.setAid    = function (c){this.data.aid    = c ; }
////账户类型这个针对AID是固定的这里冗余
this.setAccounttype    = function (c){this.data.accounttype    = c ; }
////创建时间
this.setCtime    = function (c){this.data.ctime    = c ; }
////归属商户或者卡商的ID冗余字段
this.setMaid    = function (c){this.data.maid    = c ; }
////归属的商户或者卡商的名称冗余字段
this.setManame    = function (c){this.data.maname    = c ; }
////平台角色冗余字段
this.setRoleid    = function (c){this.data.roleid    = c ; }
////角色名称冗余字段
this.setRname    = function (c){this.data.rname    = c ; }
////称呼对于用户是姓名对于商户等可能是企业名称冗余字段
this.setAname    = function (c){this.data.aname    = c ; }
////注册手机号冗余字段
this.setPhonenumber    = function (c){this.data.phonenumber    = c ; }
////身份证号码冗余字段
this.setAcardid    = function (c){this.data.acardid    = c ; }
////备注预留
this.setComm    = function (c){this.data.comm    = c ; }
////SID
this.setSid    = function (c){this.data.sid    = c ; }

}


//警告 : 不要写成 {Api_ADDRESSBOOK_A1_Request}
module.exports = Api_ADDRESSBOOK_A1_Request;
