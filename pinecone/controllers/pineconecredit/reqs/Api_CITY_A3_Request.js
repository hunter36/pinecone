/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_CITY_A3_Request =function () {
    this.api= "Api_CITY_A3_Request";
	base.apply(this); //base 就是  TransformData
	this.sid;//SID
	this.dm;//dm V 50
	this.mc;//mc V 50
	this.yxzt;//yxzt V 2
	this.isleaf;//isleaf V 2
	this.described;//described V 50


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////SID
this.setSid    = function (c){this.data.sid    = c ; }
////dm V 50
this.setDm    = function (c){this.data.dm    = c ; }
////mc V 50
this.setMc    = function (c){this.data.mc    = c ; }
////yxzt V 2
this.setYxzt    = function (c){this.data.yxzt    = c ; }
////isleaf V 2
this.setIsleaf    = function (c){this.data.isleaf    = c ; }
////described V 50
this.setDescribed    = function (c){this.data.described    = c ; }

}


//警告 : 不要写成 {Api_CITY_A3_Request}
module.exports = Api_CITY_A3_Request;
