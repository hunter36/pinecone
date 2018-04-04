/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_CARD_BLACKLIST_A1_Request =function () {
    this.api= "Api_CARD_BLACKLIST_A1_Request";
	base.apply(this); //base 就是  TransformData
	this.carmer_aid;//卡商账户ID
	this.black_aid;//黑名单用户ID
	this.sid;//SID


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////卡商账户ID
this.setCarmer_aid    = function (c){this.data.carmer_aid    = c ; }
////黑名单用户ID
this.setBlack_aid    = function (c){this.data.black_aid    = c ; }
////SID
this.setSid    = function (c){this.data.sid    = c ; }

}


//警告 : 不要写成 {Api_CARD_BLACKLIST_A1_Request}
module.exports = Api_CARD_BLACKLIST_A1_Request;
