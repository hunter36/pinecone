/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_ACCOUNT_A5_qrySubAccounts_Request =function () {
    this.api= "Api_ACCOUNT_A5_qrySubAccounts_Request";
	base.apply(this); //base 就是  TransformData


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request


}


//警告 : 不要写成 {Api_ACCOUNT_A5_qrySubAccounts_Request}
module.exports = Api_ACCOUNT_A5_qrySubAccounts_Request;
