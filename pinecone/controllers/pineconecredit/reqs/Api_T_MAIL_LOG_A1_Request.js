/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_T_MAIL_LOG_A1_Request =function () {
    this.api= "Api_T_MAIL_LOG_A1_Request";
	base.apply(this); //base 就是  TransformData
	this.recipient;//接收方邮件地址
	this.title;//邮件标题
	this.msg;//邮件内容
	this.stime;//发送时间
	this.state;//发送结果
	this.errmsg;//结果代码和信息
	this.att1;//附件
	this.att2;//附件
	this.att3;//附件
	this.att4;//附件
	this.att5;//附件
	this.att6;//附件
	this.att7;//附件
	this.mtype;//邮件分类
	this.mtmpid;//邮件模板id[预留
	this.sid;//ID


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////接收方邮件地址
this.setRecipient    = function (c){this.data.recipient    = c ; }
////邮件标题
this.setTitle    = function (c){this.data.title    = c ; }
////邮件内容
this.setMsg    = function (c){this.data.msg    = c ; }
////发送时间
this.setStime    = function (c){this.data.stime    = c ; }
////发送结果
this.setState    = function (c){this.data.state    = c ; }
////结果代码和信息
this.setErrmsg    = function (c){this.data.errmsg    = c ; }
////附件
this.setAtt1    = function (c){this.data.att1    = c ; }
////附件
this.setAtt2    = function (c){this.data.att2    = c ; }
////附件
this.setAtt3    = function (c){this.data.att3    = c ; }
////附件
this.setAtt4    = function (c){this.data.att4    = c ; }
////附件
this.setAtt5    = function (c){this.data.att5    = c ; }
////附件
this.setAtt6    = function (c){this.data.att6    = c ; }
////附件
this.setAtt7    = function (c){this.data.att7    = c ; }
////邮件分类
this.setMtype    = function (c){this.data.mtype    = c ; }
////邮件模板id[预留
this.setMtmpid    = function (c){this.data.mtmpid    = c ; }
////ID
this.setSid    = function (c){this.data.sid    = c ; }

}


//警告 : 不要写成 {Api_T_MAIL_LOG_A1_Request}
module.exports = Api_T_MAIL_LOG_A1_Request;
