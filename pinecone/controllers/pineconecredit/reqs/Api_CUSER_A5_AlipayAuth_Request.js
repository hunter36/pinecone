/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_CUSER_A5_AlipayAuth_Request =function () {
    this.api= "Api_CUSER_A5_AlipayAuth_Request";
	base.apply(this); //base 就是  TransformData


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request


}


//警告 : 不要写成 {Api_CUSER_A5_AlipayAuth_Request}
module.exports = Api_CUSER_A5_AlipayAuth_Request;
