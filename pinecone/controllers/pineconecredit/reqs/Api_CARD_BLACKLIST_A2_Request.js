/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_CARD_BLACKLIST_A2_Request =function () {
    this.api= "Api_CARD_BLACKLIST_A2_Request";
	base.apply(this); //base 就是  TransformData
	this.sid;//SID
	this.carmer_aid;//卡商账户ID
	this.black_aid;//黑名单用户ID
	this.sqlcondition;//SQLCONDITION-无字典对应
	this.orderexpr;//ORDEREXPR-无字典对应


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////SID
this.setSid    = function (c){this.data.sid    = c ; }
////卡商账户ID
this.setCarmer_aid    = function (c){this.data.carmer_aid    = c ; }
////黑名单用户ID
this.setBlack_aid    = function (c){this.data.black_aid    = c ; }
////SQLCONDITION-无字典对应
this.setSqlcondition    = function (c){this.data.sqlcondition    = c ; }
////ORDEREXPR-无字典对应
this.setOrderexpr    = function (c){this.data.orderexpr    = c ; }

}


//警告 : 不要写成 {Api_CARD_BLACKLIST_A2_Request}
module.exports = Api_CARD_BLACKLIST_A2_Request;
