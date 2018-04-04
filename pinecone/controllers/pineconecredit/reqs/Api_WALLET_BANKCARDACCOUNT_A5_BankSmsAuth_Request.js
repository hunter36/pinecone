/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_WALLET_BANKCARDACCOUNT_A5_BankSmsAuth_Request =function () {
    this.api= "Api_WALLET_BANKCARDACCOUNT_A5_BankSmsAuth_Request";
	base.apply(this); //base 就是  TransformData
	this.rphone;//RPHONE-无字典对应
	this.cardnumber;//卡号
	this.sid;//SID


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////RPHONE-无字典对应
this.setRphone    = function (c){this.data.rphone    = c ; }
////卡号
this.setCardnumber    = function (c){this.data.cardnumber    = c ; }
////SID
this.setSid    = function (c){this.data.sid    = c ; }

}


//警告 : 不要写成 {Api_WALLET_BANKCARDACCOUNT_A5_BankSmsAuth_Request}
module.exports = Api_WALLET_BANKCARDACCOUNT_A5_BankSmsAuth_Request;
