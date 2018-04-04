/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_PLAT_MENU_A3_Request =function () {
    this.api= "Api_PLAT_MENU_A3_Request";
	base.apply(this); //base 就是  TransformData
	this.sid;//SID
	this.actid;//功能编号
	this.actmod;//归属
	this.actname;//功能名称
	this.actorder;//在同一级菜单中的序号
	this.acttype;//功能类型
	this.acturl;//功能URL
	this.pactid;//父级功能ID
	this.valid;//是否有效
	this.icon;//图标


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////SID
this.setSid    = function (c){this.data.sid    = c ; }
////功能编号
this.setActid    = function (c){this.data.actid    = c ; }
////归属
this.setActmod    = function (c){this.data.actmod    = c ; }
////功能名称
this.setActname    = function (c){this.data.actname    = c ; }
////在同一级菜单中的序号
this.setActorder    = function (c){this.data.actorder    = c ; }
////功能类型
this.setActtype    = function (c){this.data.acttype    = c ; }
////功能URL
this.setActurl    = function (c){this.data.acturl    = c ; }
////父级功能ID
this.setPactid    = function (c){this.data.pactid    = c ; }
////是否有效
this.setValid    = function (c){this.data.valid    = c ; }
////图标
this.setIcon    = function (c){this.data.icon    = c ; }

}


//警告 : 不要写成 {Api_PLAT_MENU_A3_Request}
module.exports = Api_PLAT_MENU_A3_Request;
