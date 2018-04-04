/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_CALLFORWORKORDERS_A1_Request =function () {
    this.api= "Api_CALLFORWORKORDERS_A1_Request";
	base.apply(this); //base 就是  TransformData
	this.reminderorderid;//催缴单号
	this.aid;//催缴员
	this.calllevel;//催缴级别
	this.calltherequest;//催缴要求
	this.customerinformation;//客户信息
	this.olevel;//催缴级别
	this.callstate;//催缴状态
	this.ctime;//工单生成时间
	this.extime;//催缴完成时间[预留
	this.sid;//SID


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////催缴单号
this.setReminderorderid    = function (c){this.data.reminderorderid    = c ; }
////催缴员
this.setAid    = function (c){this.data.aid    = c ; }
////催缴级别
this.setCalllevel    = function (c){this.data.calllevel    = c ; }
////催缴要求
this.setCalltherequest    = function (c){this.data.calltherequest    = c ; }
////客户信息
this.setCustomerinformation    = function (c){this.data.customerinformation    = c ; }
////催缴级别
this.setOlevel    = function (c){this.data.olevel    = c ; }
////催缴状态
this.setCallstate    = function (c){this.data.callstate    = c ; }
////工单生成时间
this.setCtime    = function (c){this.data.ctime    = c ; }
////催缴完成时间[预留
this.setExtime    = function (c){this.data.extime    = c ; }
////SID
this.setSid    = function (c){this.data.sid    = c ; }

}


//警告 : 不要写成 {Api_CALLFORWORKORDERS_A1_Request}
module.exports = Api_CALLFORWORKORDERS_A1_Request;
