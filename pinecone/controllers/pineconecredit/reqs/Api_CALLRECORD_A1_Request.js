/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_CALLRECORD_A1_Request =function () {
    this.api= "Api_CALLRECORD_A1_Request";
	base.apply(this); //base 就是  TransformData
	this.raid;//记录工号
	this.reminderorderid;//催缴单号
	this.recordcallsituation;//记录催缴情况
	this.sid;//SID


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////记录工号
this.setRaid    = function (c){this.data.raid    = c ; }
////催缴单号
this.setReminderorderid    = function (c){this.data.reminderorderid    = c ; }
////记录催缴情况
this.setRecordcallsituation    = function (c){this.data.recordcallsituation    = c ; }
////SID
this.setSid    = function (c){this.data.sid    = c ; }

}


//警告 : 不要写成 {Api_CALLRECORD_A1_Request}
module.exports = Api_CALLRECORD_A1_Request;
