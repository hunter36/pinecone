/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_T_SMS_LOG_A3_Request =function () {
    this.api= "Api_T_SMS_LOG_A3_Request";
	base.apply(this); //base 就是  TransformData
	this.sid;//SID
	this.recipient;//接收方手机号一次调用最多传入200个号码
	this.msg;//短信模板
	this.param;//短信模板参数JSON格式如{"reseaon"．．"需交定金"}
	this.stime;//发送时间
	this.state;//发送结果
	this.errmsg;//结果代码和信息


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////SID
this.setSid    = function (c){this.data.sid    = c ; }
////接收方手机号一次调用最多传入200个号码
this.setRecipient    = function (c){this.data.recipient    = c ; }
////短信模板
this.setMsg    = function (c){this.data.msg    = c ; }
////短信模板参数JSON格式如{"reseaon"．．"需交定金"}
this.setParam    = function (c){this.data.param    = c ; }
////发送时间
this.setStime    = function (c){this.data.stime    = c ; }
////发送结果
this.setState    = function (c){this.data.state    = c ; }
////结果代码和信息
this.setErrmsg    = function (c){this.data.errmsg    = c ; }

}


//警告 : 不要写成 {Api_T_SMS_LOG_A3_Request}
module.exports = Api_T_SMS_LOG_A3_Request;
