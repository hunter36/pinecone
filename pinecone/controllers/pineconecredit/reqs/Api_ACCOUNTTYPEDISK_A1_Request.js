/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_ACCOUNTTYPEDISK_A1_Request =function () {
    this.api= "Api_ACCOUNTTYPEDISK_A1_Request";
	base.apply(this); //base 就是  TransformData
	this.platformname;//平台名称
	this.accounttype;//账户类型区分登陆系统
	this.disknumber;//系统磁盘分配号挂接磁盘管理
	this.sid;//SID


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////平台名称
this.setPlatformname    = function (c){this.data.platformname    = c ; }
////账户类型区分登陆系统
this.setAccounttype    = function (c){this.data.accounttype    = c ; }
////系统磁盘分配号挂接磁盘管理
this.setDisknumber    = function (c){this.data.disknumber    = c ; }
////SID
this.setSid    = function (c){this.data.sid    = c ; }

}


//警告 : 不要写成 {Api_ACCOUNTTYPEDISK_A1_Request}
module.exports = Api_ACCOUNTTYPEDISK_A1_Request;
