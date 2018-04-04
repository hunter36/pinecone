/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_CALLINGCONFIGURATION_A3_Request =function () {
    this.api= "Api_CALLINGCONFIGURATION_A3_Request";
	base.apply(this); //base 就是  TransformData
	this.sid;//SID
	this.amount;//多少金额
	this.olevel;//什么类别
	this.dispatchroole;//分配给哪个级别的催缴员[角色


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////SID
this.setSid    = function (c){this.data.sid    = c ; }
////多少金额
this.setAmount    = function (c){this.data.amount    = c ; }
////什么类别
this.setOlevel    = function (c){this.data.olevel    = c ; }
////分配给哪个级别的催缴员[角色
this.setDispatchroole    = function (c){this.data.dispatchroole    = c ; }

}


//警告 : 不要写成 {Api_CALLINGCONFIGURATION_A3_Request}
module.exports = Api_CALLINGCONFIGURATION_A3_Request;
