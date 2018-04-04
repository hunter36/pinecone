/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_MAKET_APP_A1_Request =function () {
    this.api= "Api_MAKET_APP_A1_Request";
	base.apply(this); //base 就是  TransformData
	this.appname;//名称
	this.appver;//最新版本号
	this.type;//类型
	this.state;//状态
	this.forceupgrade;//是否强制更新到该版本
	this.adate;//最后更新时间
	this.opt;//最后更新员工D
	this.converurl;//启动页面
	this.popurl;//APP弹窗资源
	this.startpage;//启动页
	this.refpage;//引导页预留应该APP内判断是否首次使用APP
	this.sid;//APPID 编号


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////名称
this.setAppname    = function (c){this.data.appname    = c ; }
////最新版本号
this.setAppver    = function (c){this.data.appver    = c ; }
////类型
this.setType    = function (c){this.data.type    = c ; }
////状态
this.setState    = function (c){this.data.state    = c ; }
////是否强制更新到该版本
this.setForceupgrade    = function (c){this.data.forceupgrade    = c ; }
////最后更新时间
this.setAdate    = function (c){this.data.adate    = c ; }
////最后更新员工D
this.setOpt    = function (c){this.data.opt    = c ; }
////启动页面
this.setConverurl    = function (c){this.data.converurl    = c ; }
////APP弹窗资源
this.setPopurl    = function (c){this.data.popurl    = c ; }
////启动页
this.setStartpage    = function (c){this.data.startpage    = c ; }
////引导页预留应该APP内判断是否首次使用APP
this.setRefpage    = function (c){this.data.refpage    = c ; }
////APPID 编号
this.setSid    = function (c){this.data.sid    = c ; }

}


//警告 : 不要写成 {Api_MAKET_APP_A1_Request}
module.exports = Api_MAKET_APP_A1_Request;
