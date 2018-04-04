/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_MSGINBOX_A1_Request =function () {
    this.api= "Api_MSGINBOX_A1_Request";
	base.apply(this); //base 就是  TransformData
	this.aid;//帐号ID
	this.msgid;//MsgId
	this.msg;//Msg
	this.ctime;//CTime T
	this.state;//state
	this.sid;//SID


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////帐号ID
this.setAid    = function (c){this.data.aid    = c ; }
////MsgId
this.setMsgid    = function (c){this.data.msgid    = c ; }
////Msg
this.setMsg    = function (c){this.data.msg    = c ; }
////CTime T
this.setCtime    = function (c){this.data.ctime    = c ; }
////state
this.setState    = function (c){this.data.state    = c ; }
////SID
this.setSid    = function (c){this.data.sid    = c ; }

}


//警告 : 不要写成 {Api_MSGINBOX_A1_Request}
module.exports = Api_MSGINBOX_A1_Request;
