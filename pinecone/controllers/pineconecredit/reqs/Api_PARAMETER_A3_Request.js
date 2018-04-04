/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_PARAMETER_A3_Request =function () {
    this.api= "Api_PARAMETER_A3_Request";
	base.apply(this); //base 就是  TransformData
	this.id;//ID
	this.ptype;//PTYPE V 50
	this.pname;//PNAME V 50
	this.isshow;//ISSHOW V 50
	this.porder;//PORDER V 50
	this.pcode;//PCODE V 50


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////ID
this.setId    = function (c){this.data.id    = c ; }
////PTYPE V 50
this.setPtype    = function (c){this.data.ptype    = c ; }
////PNAME V 50
this.setPname    = function (c){this.data.pname    = c ; }
////ISSHOW V 50
this.setIsshow    = function (c){this.data.isshow    = c ; }
////PORDER V 50
this.setPorder    = function (c){this.data.porder    = c ; }
////PCODE V 50
this.setPcode    = function (c){this.data.pcode    = c ; }

}


//警告 : 不要写成 {Api_PARAMETER_A3_Request}
module.exports = Api_PARAMETER_A3_Request;
