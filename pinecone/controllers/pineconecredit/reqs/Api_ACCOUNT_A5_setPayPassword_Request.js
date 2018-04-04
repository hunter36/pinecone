/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_ACCOUNT_A5_setPayPassword_Request =function () {
    this.api= "Api_ACCOUNT_A5_setPayPassword_Request";
	base.apply(this); //base 就是  TransformData
	this.aid;//帐号_全系统唯一
	this.paypassword;//支付密码


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////帐号_全系统唯一
this.setAid    = function (c){this.data.aid    = c ; }
////支付密码
this.setPaypassword    = function (c){this.data.paypassword    = c ; }

}


//警告 : 不要写成 {Api_ACCOUNT_A5_setPayPassword_Request}
module.exports = Api_ACCOUNT_A5_setPayPassword_Request;
