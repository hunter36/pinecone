/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_MAKET_APP_A5_AppCheakNewVer_Request =function () {
    this.api= "Api_MAKET_APP_A5_AppCheakNewVer_Request";
	base.apply(this); //base 就是  TransformData
	this.sid;//APPID 编号
	this.appver;//最新版本号


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////APPID 编号
this.setSid    = function (c){this.data.sid    = c ; }
////最新版本号
this.setAppver    = function (c){this.data.appver    = c ; }

}


//警告 : 不要写成 {Api_MAKET_APP_A5_AppCheakNewVer_Request}
module.exports = Api_MAKET_APP_A5_AppCheakNewVer_Request;
