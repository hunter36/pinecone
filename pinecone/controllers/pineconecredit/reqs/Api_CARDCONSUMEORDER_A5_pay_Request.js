/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_CARDCONSUMEORDER_A5_pay_Request =function () {
    this.api= "Api_CARDCONSUMEORDER_A5_pay_Request";
	base.apply(this); //base 就是  TransformData
	this.sid;//订单号[PK]
	this.orderstate;//订单状态


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////订单号[PK]
this.setSid    = function (c){this.data.sid    = c ; }
////订单状态
this.setOrderstate    = function (c){this.data.orderstate    = c ; }

}


//警告 : 不要写成 {Api_CARDCONSUMEORDER_A5_pay_Request}
module.exports = Api_CARDCONSUMEORDER_A5_pay_Request;
