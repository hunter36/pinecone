/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_T_PAYLOG_A3_Request =function () {
    this.api= "Api_T_PAYLOG_A3_Request";
	base.apply(this); //base 就是  TransformData
	this.sid;//SID
	this.departid;//支付机构编号
	this.payid;//我方平台支付单号
	this.amount;//支付金额
	this.createtime;//支付订单创建时间
	this.resultcode;//支付结果
	this.resulttime;//支付时间
	this.depositid;//对应充值流水号对应于 T_DepositLog.SID
	this.oid;//订单号[支付机构订单号
	this.t3sysid;//三方系统ID[外部系统消费时
	this.t3userid;//三方用户ID[外部系统消费时
	this.userid;//我方用户ID
	this.pstate;//充值状态
	this.pmsg;//结果代码和信息


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////SID
this.setSid    = function (c){this.data.sid    = c ; }
////支付机构编号
this.setDepartid    = function (c){this.data.departid    = c ; }
////我方平台支付单号
this.setPayid    = function (c){this.data.payid    = c ; }
////支付金额
this.setAmount    = function (c){this.data.amount    = c ; }
////支付订单创建时间
this.setCreatetime    = function (c){this.data.createtime    = c ; }
////支付结果
this.setResultcode    = function (c){this.data.resultcode    = c ; }
////支付时间
this.setResulttime    = function (c){this.data.resulttime    = c ; }
////对应充值流水号对应于 T_DepositLog.SID
this.setDepositid    = function (c){this.data.depositid    = c ; }
////订单号[支付机构订单号
this.setOid    = function (c){this.data.oid    = c ; }
////三方系统ID[外部系统消费时
this.setT3sysid    = function (c){this.data.t3sysid    = c ; }
////三方用户ID[外部系统消费时
this.setT3userid    = function (c){this.data.t3userid    = c ; }
////我方用户ID
this.setUserid    = function (c){this.data.userid    = c ; }
////充值状态
this.setPstate    = function (c){this.data.pstate    = c ; }
////结果代码和信息
this.setPmsg    = function (c){this.data.pmsg    = c ; }

}


//警告 : 不要写成 {Api_T_PAYLOG_A3_Request}
module.exports = Api_T_PAYLOG_A3_Request;
