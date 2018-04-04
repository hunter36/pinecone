/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_CARDS_A5_activeCard_Request =function () {
    this.api= "Api_CARDS_A5_activeCard_Request";
	base.apply(this); //base 就是  TransformData
	this.cardid;//卡号全局唯一


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////卡号全局唯一
this.setCardid    = function (c){this.data.cardid    = c ; }

}


//警告 : 不要写成 {Api_CARDS_A5_activeCard_Request}
module.exports = Api_CARDS_A5_activeCard_Request;
