/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_CARD_MARKET_TYPE_A5_EnableDisableCard_Request =function () {
    this.api= "Api_CARD_MARKET_TYPE_A5_EnableDisableCard_Request";
	base.apply(this); //base 就是  TransformData
	this.card_type_id;//卡种,注意由系统分配接口调用不设置[全局编码唯一43064307
	this.cardstate;//卡种审核状态


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////卡种,注意由系统分配接口调用不设置[全局编码唯一43064307
this.setCard_type_id    = function (c){this.data.card_type_id    = c ; }
////卡种审核状态
this.setCardstate    = function (c){this.data.cardstate    = c ; }

}


//警告 : 不要写成 {Api_CARD_MARKET_TYPE_A5_EnableDisableCard_Request}
module.exports = Api_CARD_MARKET_TYPE_A5_EnableDisableCard_Request;
