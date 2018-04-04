/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_MSGTMP_A3_Request =function () {
    this.api= "Api_MSGTMP_A3_Request";
	base.apply(this); //base 就是  TransformData
	this.sid;//SID
	this.type;//消息分类
	this.eventrouterkey;//消息在MQ中的默认路由key,rsmsrpushrweb1..8可以定制
	this.tmpname;//模板名称
	this.explain;//说明
	this.tmpexpr;//模板内容重要包含参数定义的表达式
	this.msgid;//消息编号,短信类为阿里大于分配的消息ID其他是系统编号强制编号唯一索引
	this.businesscomm;//业务场景说明
	this.etrigger;//触发方目前仅仅是产品说明文字
	this.eresponder;//收信方目前仅仅是产品说明文字
	this.excitetime;//触发时间说明目前仅仅是产品说明文字
	this.comm;//备注


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////SID
this.setSid    = function (c){this.data.sid    = c ; }
////消息分类
this.setType    = function (c){this.data.type    = c ; }
////消息在MQ中的默认路由key,rsmsrpushrweb1..8可以定制
this.setEventrouterkey    = function (c){this.data.eventrouterkey    = c ; }
////模板名称
this.setTmpname    = function (c){this.data.tmpname    = c ; }
////说明
this.setExplain    = function (c){this.data.explain    = c ; }
////模板内容重要包含参数定义的表达式
this.setTmpexpr    = function (c){this.data.tmpexpr    = c ; }
////消息编号,短信类为阿里大于分配的消息ID其他是系统编号强制编号唯一索引
this.setMsgid    = function (c){this.data.msgid    = c ; }
////业务场景说明
this.setBusinesscomm    = function (c){this.data.businesscomm    = c ; }
////触发方目前仅仅是产品说明文字
this.setEtrigger    = function (c){this.data.etrigger    = c ; }
////收信方目前仅仅是产品说明文字
this.setEresponder    = function (c){this.data.eresponder    = c ; }
////触发时间说明目前仅仅是产品说明文字
this.setExcitetime    = function (c){this.data.excitetime    = c ; }
////备注
this.setComm    = function (c){this.data.comm    = c ; }

}


//警告 : 不要写成 {Api_MSGTMP_A3_Request}
module.exports = Api_MSGTMP_A3_Request;
