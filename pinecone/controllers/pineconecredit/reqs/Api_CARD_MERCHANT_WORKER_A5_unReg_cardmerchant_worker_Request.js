/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_CARD_MERCHANT_WORKER_A5_unReg_cardmerchant_worker_Request =function () {
    this.api= "Api_CARD_MERCHANT_WORKER_A5_unReg_cardmerchant_worker_Request";
	base.apply(this); //base 就是  TransformData
	this.aids;//AIDS-无字典对应


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////AIDS-无字典对应
this.setAids    = function (c){this.data.aids    = c ; }

}


//警告 : 不要写成 {Api_CARD_MERCHANT_WORKER_A5_unReg_cardmerchant_worker_Request}
module.exports = Api_CARD_MERCHANT_WORKER_A5_unReg_cardmerchant_worker_Request;
