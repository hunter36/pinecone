/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_WALLET_CARD_A2_Request =function () {
    this.api= "Api_WALLET_CARD_A2_Request";
	base.apply(this); //base 就是  TransformData
	this.sid;//SID
	this.accountid;//账户ID
	this.cardid;//卡号[全局编码唯一
	this.creditline;//受信额度[冗余
	this.ctime;//记录时间
	this.sqlcondition;//SQLCONDITION-无字典对应
	this.orderexpr;//ORDEREXPR-无字典对应


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////SID
this.setSid    = function (c){this.data.sid    = c ; }
////账户ID
this.setAccountid    = function (c){this.data.accountid    = c ; }
////卡号[全局编码唯一
this.setCardid    = function (c){this.data.cardid    = c ; }
////受信额度[冗余
this.setCreditline    = function (c){this.data.creditline    = c ; }
////记录时间
this.setCtime    = function (c){this.data.ctime    = c ; }
////SQLCONDITION-无字典对应
this.setSqlcondition    = function (c){this.data.sqlcondition    = c ; }
////ORDEREXPR-无字典对应
this.setOrderexpr    = function (c){this.data.orderexpr    = c ; }

}


//警告 : 不要写成 {Api_WALLET_CARD_A2_Request}
module.exports = Api_WALLET_CARD_A2_Request;
