/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_MYLOG_A1_Request =function () {
    this.api= "Api_MYLOG_A1_Request";
	base.apply(this); //base 就是  TransformData
	this.appid;//系统默认是app
	this.aid;//帐号AID
	this.logid;//登录手机号
	this.opttype;//操作级别
	this.opt;//操作功能项
	this.comm;//结果保存异常
	this.stime;//操作开始时间
	this.etime;//操作结束时间
	this.loglevel;//日志级别
	this.sid;//SID


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////系统默认是app
this.setAppid    = function (c){this.data.appid    = c ; }
////帐号AID
this.setAid    = function (c){this.data.aid    = c ; }
////登录手机号
this.setLogid    = function (c){this.data.logid    = c ; }
////操作级别
this.setOpttype    = function (c){this.data.opttype    = c ; }
////操作功能项
this.setOpt    = function (c){this.data.opt    = c ; }
////结果保存异常
this.setComm    = function (c){this.data.comm    = c ; }
////操作开始时间
this.setStime    = function (c){this.data.stime    = c ; }
////操作结束时间
this.setEtime    = function (c){this.data.etime    = c ; }
////日志级别
this.setLoglevel    = function (c){this.data.loglevel    = c ; }
////SID
this.setSid    = function (c){this.data.sid    = c ; }

}


//警告 : 不要写成 {Api_MYLOG_A1_Request}
module.exports = Api_MYLOG_A1_Request;
