/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_SYS_MERCHANTSTYLE_A3_Request =function () {
    this.api= "Api_SYS_MERCHANTSTYLE_A3_Request";
	base.apply(this); //base 就是  TransformData
	this.sid;//SID
	this.initialization;//初始化[依据APP原型
	this.big;//大牌
	this.comprehensive;//综合型


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////SID
this.setSid    = function (c){this.data.sid    = c ; }
////初始化[依据APP原型
this.setInitialization    = function (c){this.data.initialization    = c ; }
////大牌
this.setBig    = function (c){this.data.big    = c ; }
////综合型
this.setComprehensive    = function (c){this.data.comprehensive    = c ; }

}


//警告 : 不要写成 {Api_SYS_MERCHANTSTYLE_A3_Request}
module.exports = Api_SYS_MERCHANTSTYLE_A3_Request;
