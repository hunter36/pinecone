/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_MERCHANT_A5_reg_merchant_Apply_Request =function () {
    this.api= "Api_MERCHANT_A5_reg_merchant_Apply_Request";
	base.apply(this); //base 就是  TransformData
	this.regphonenumber;//REGPHONENUMBER-无字典对应
	this.password;//PASSWORD-无字典对应
	this.vercode;//VERCODE-无字典对应
	this.citycode;//地区编码
	this.address;//商户地址
	this.accountname;//商户名称


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////REGPHONENUMBER-无字典对应
this.setRegphonenumber    = function (c){this.data.regphonenumber    = c ; }
////PASSWORD-无字典对应
this.setPassword    = function (c){this.data.password    = c ; }
////VERCODE-无字典对应
this.setVercode    = function (c){this.data.vercode    = c ; }
////地区编码
this.setCitycode    = function (c){this.data.citycode    = c ; }
////商户地址
this.setAddress    = function (c){this.data.address    = c ; }
////商户名称
this.setAccountname    = function (c){this.data.accountname    = c ; }

}


//警告 : 不要写成 {Api_MERCHANT_A5_reg_merchant_Apply_Request}
module.exports = Api_MERCHANT_A5_reg_merchant_Apply_Request;
