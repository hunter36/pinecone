/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_MAKETRULE_A3_Request =function () {
    this.api= "Api_MAKETRULE_A3_Request";
	base.apply(this); //base 就是  TransformData
	this.sid;//SID
	this.mid;//市场编号
	this.pid;//协议编号
	this.purl;//市场协议资源URL
	this.pname;//协议名称


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////SID
this.setSid    = function (c){this.data.sid    = c ; }
////市场编号
this.setMid    = function (c){this.data.mid    = c ; }
////协议编号
this.setPid    = function (c){this.data.pid    = c ; }
////市场协议资源URL
this.setPurl    = function (c){this.data.purl    = c ; }
////协议名称
this.setPname    = function (c){this.data.pname    = c ; }

}


//警告 : 不要写成 {Api_MAKETRULE_A3_Request}
module.exports = Api_MAKETRULE_A3_Request;
