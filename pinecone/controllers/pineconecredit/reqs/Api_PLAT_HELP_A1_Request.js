/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_PLAT_HELP_A1_Request =function () {
    this.api= "Api_PLAT_HELP_A1_Request";
	base.apply(this); //base 就是  TransformData
	this.helptitle;//帮助标题
	this.helpcomm;//帮助说明
	this.url;//帮助URL
	this.version;//版本
	this.opt;//最后上传人
	this.udate;//最后上传时间
	this.sid;//SID


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////帮助标题
this.setHelptitle    = function (c){this.data.helptitle    = c ; }
////帮助说明
this.setHelpcomm    = function (c){this.data.helpcomm    = c ; }
////帮助URL
this.setUrl    = function (c){this.data.url    = c ; }
////版本
this.setVersion    = function (c){this.data.version    = c ; }
////最后上传人
this.setOpt    = function (c){this.data.opt    = c ; }
////最后上传时间
this.setUdate    = function (c){this.data.udate    = c ; }
////SID
this.setSid    = function (c){this.data.sid    = c ; }

}


//警告 : 不要写成 {Api_PLAT_HELP_A1_Request}
module.exports = Api_PLAT_HELP_A1_Request;
