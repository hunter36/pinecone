/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_ZMEVENT_A3_Request =function () {
    this.api= "Api_ZMEVENT_A3_Request";
	base.apply(this); //base 就是  TransformData
	this.sid;//SID
	this.elevel;//事件级别
	this.type;//事件类型关系到判断路由
	this.routingkey;//事件路由,rsms,rpushrweb[1..8]#为广播同rabbitmq的routingkey定义
	this.body;//通知的报文短信的话填写MSGID
	this.params;//消息参数目前用来格式化短信
	this.addgroupid;//通讯录组ID对于短信如果有tellist该参数忽略.无addressID代表组群发
	this.addressid;//AddressBook的ID,对于短信如果有tellist该参数忽略.允许多个逗号分割
	this.tellist;//短信发送的接收方列表一次调用最多传入200个号码
	this.ctime;//消息创建时间
	this.cid;//创建人目前预留短信等填当前用户ID
	this.ret;//处理结果
	this.rcnt;//重新处理的次数
	this.rtime;//最后一次处理的时间戳
	this.rcomm;//预留消息审计备注


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////SID
this.setSid    = function (c){this.data.sid    = c ; }
////事件级别
this.setElevel    = function (c){this.data.elevel    = c ; }
////事件类型关系到判断路由
this.setType    = function (c){this.data.type    = c ; }
////事件路由,rsms,rpushrweb[1..8]#为广播同rabbitmq的routingkey定义
this.setRoutingkey    = function (c){this.data.routingkey    = c ; }
////通知的报文短信的话填写MSGID
this.setBody    = function (c){this.data.body    = c ; }
////消息参数目前用来格式化短信
this.setParams    = function (c){this.data.params    = c ; }
////通讯录组ID对于短信如果有tellist该参数忽略.无addressID代表组群发
this.setAddgroupid    = function (c){this.data.addgroupid    = c ; }
////AddressBook的ID,对于短信如果有tellist该参数忽略.允许多个逗号分割
this.setAddressid    = function (c){this.data.addressid    = c ; }
////短信发送的接收方列表一次调用最多传入200个号码
this.setTellist    = function (c){this.data.tellist    = c ; }
////消息创建时间
this.setCtime    = function (c){this.data.ctime    = c ; }
////创建人目前预留短信等填当前用户ID
this.setCid    = function (c){this.data.cid    = c ; }
////处理结果
this.setRet    = function (c){this.data.ret    = c ; }
////重新处理的次数
this.setRcnt    = function (c){this.data.rcnt    = c ; }
////最后一次处理的时间戳
this.setRtime    = function (c){this.data.rtime    = c ; }
////预留消息审计备注
this.setRcomm    = function (c){this.data.rcomm    = c ; }

}


//警告 : 不要写成 {Api_ZMEVENT_A3_Request}
module.exports = Api_ZMEVENT_A3_Request;
