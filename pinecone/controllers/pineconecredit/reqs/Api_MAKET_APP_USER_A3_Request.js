/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_MAKET_APP_USER_A3_Request =function () {
    this.api= "Api_MAKET_APP_USER_A3_Request";
	base.apply(this); //base 就是  TransformData
	this.sid;//SID
	this.appid;//APPID
	this.appver;//版本号
	this.aid;//用户ID
	this.cnt;//成功登陆次数
	this.lastlogintime;//最近一次登陆时间


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////SID
this.setSid    = function (c){this.data.sid    = c ; }
////APPID
this.setAppid    = function (c){this.data.appid    = c ; }
////版本号
this.setAppver    = function (c){this.data.appver    = c ; }
////用户ID
this.setAid    = function (c){this.data.aid    = c ; }
////成功登陆次数
this.setCnt    = function (c){this.data.cnt    = c ; }
////最近一次登陆时间
this.setLastlogintime    = function (c){this.data.lastlogintime    = c ; }

}


//警告 : 不要写成 {Api_MAKET_APP_USER_A3_Request}
module.exports = Api_MAKET_APP_USER_A3_Request;
