/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_MAKET_APP_A5_qryAppState_Request =function () {
    this.api= "Api_MAKET_APP_A5_qryAppState_Request";
	base.apply(this); //base 就是  TransformData
	this.appid;//APPID-无字典对应


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////APPID-无字典对应
this.setAppid    = function (c){this.data.appid    = c ; }

}


//警告 : 不要写成 {Api_MAKET_APP_A5_qryAppState_Request}
module.exports = Api_MAKET_APP_A5_qryAppState_Request;
