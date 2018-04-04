/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_REPAYMENTRECORDS_A4_Request =function () {
    this.api= "Api_REPAYMENTRECORDS_A4_Request";
	base.apply(this); //base 就是  TransformData
	this.sid;//SID


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////SID
this.setSid    = function (c){this.data.sid    = c ; }

}


//警告 : 不要写成 {Api_REPAYMENTRECORDS_A4_Request}
module.exports = Api_REPAYMENTRECORDS_A4_Request;
