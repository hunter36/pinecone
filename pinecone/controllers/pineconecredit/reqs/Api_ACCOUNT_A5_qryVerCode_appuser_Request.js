/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_ACCOUNT_A5_qryVerCode_appuser_Request =function () {
    this.api= "Api_ACCOUNT_A5_qryVerCode_appuser_Request";
	base.apply(this); //base 就是  TransformData
	this.regphonenumber;//注册手机号


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////注册手机号
this.setRegphonenumber    = function (c){this.data.regphonenumber    = c ; }

}


//警告 : 不要写成 {Api_ACCOUNT_A5_qryVerCode_appuser_Request}
module.exports = Api_ACCOUNT_A5_qryVerCode_appuser_Request;
