/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_CARDS_A2_Request =function () {
    this.api= "Api_CARDS_A2_Request";
	base.apply(this); //base 就是  TransformData
	this.sid;//SID
	this.card_type_id;//卡种[全局编码唯一43064307
	this.cardid;//卡号全局唯一
	this.caid;//发卡方
	this.cardstate;//卡状态
	this.stime;//最后状态切换时间
	this.expired;//有效期[天
	this.applicationtime;//办理时间
	this.expiredtime;//截止时间
	this.amount;//总额度
	this.used;//已用额度
	this.cleft;//剩余额度
	this.applyid;//关联申请单据合同表SID
	this.accid;//用户的账户ID信息
	this.comm;//备注
	this.sqlcondition;//SQLCONDITION-无字典对应
	this.orderexpr;//ORDEREXPR-无字典对应


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////SID
this.setSid    = function (c){this.data.sid    = c ; }
////卡种[全局编码唯一43064307
this.setCard_type_id    = function (c){this.data.card_type_id    = c ; }
////卡号全局唯一
this.setCardid    = function (c){this.data.cardid    = c ; }
////发卡方
this.setCaid    = function (c){this.data.caid    = c ; }
////卡状态
this.setCardstate    = function (c){this.data.cardstate    = c ; }
////最后状态切换时间
this.setStime    = function (c){this.data.stime    = c ; }
////有效期[天
this.setExpired    = function (c){this.data.expired    = c ; }
////办理时间
this.setApplicationtime    = function (c){this.data.applicationtime    = c ; }
////截止时间
this.setExpiredtime    = function (c){this.data.expiredtime    = c ; }
////总额度
this.setAmount    = function (c){this.data.amount    = c ; }
////已用额度
this.setUsed    = function (c){this.data.used    = c ; }
////剩余额度
this.setCleft    = function (c){this.data.cleft    = c ; }
////关联申请单据合同表SID
this.setApplyid    = function (c){this.data.applyid    = c ; }
////用户的账户ID信息
this.setAccid    = function (c){this.data.accid    = c ; }
////备注
this.setComm    = function (c){this.data.comm    = c ; }
////SQLCONDITION-无字典对应
this.setSqlcondition    = function (c){this.data.sqlcondition    = c ; }
////ORDEREXPR-无字典对应
this.setOrderexpr    = function (c){this.data.orderexpr    = c ; }

}


//警告 : 不要写成 {Api_CARDS_A2_Request}
module.exports = Api_CARDS_A2_Request;
