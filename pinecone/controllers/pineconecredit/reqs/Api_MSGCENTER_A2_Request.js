/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_MSGCENTER_A2_Request =function () {
    this.api= "Api_MSGCENTER_A2_Request";
	base.apply(this); //base 就是  TransformData
	this.sid;//SID
	this.msgid;//MsgId
	this.templateid;//TMPID模板ID
	this.templateparam;//模板参数
	this.recipient;//接收者*是全部该类用户
	this.ctime;//CTime T
	this.sqlcondition;//SQLCONDITION-无字典对应
	this.orderexpr;//ORDEREXPR-无字典对应


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////SID
this.setSid    = function (c){this.data.sid    = c ; }
////MsgId
this.setMsgid    = function (c){this.data.msgid    = c ; }
////TMPID模板ID
this.setTemplateid    = function (c){this.data.templateid    = c ; }
////模板参数
this.setTemplateparam    = function (c){this.data.templateparam    = c ; }
////接收者*是全部该类用户
this.setRecipient    = function (c){this.data.recipient    = c ; }
////CTime T
this.setCtime    = function (c){this.data.ctime    = c ; }
////SQLCONDITION-无字典对应
this.setSqlcondition    = function (c){this.data.sqlcondition    = c ; }
////ORDEREXPR-无字典对应
this.setOrderexpr    = function (c){this.data.orderexpr    = c ; }

}


//警告 : 不要写成 {Api_MSGCENTER_A2_Request}
module.exports = Api_MSGCENTER_A2_Request;
