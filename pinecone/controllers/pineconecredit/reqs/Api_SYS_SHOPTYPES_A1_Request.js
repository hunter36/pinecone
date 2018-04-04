/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_SYS_SHOPTYPES_A1_Request =function () {
    this.api= "Api_SYS_SHOPTYPES_A1_Request";
	base.apply(this); //base 就是  TransformData
	this.typename;//TYPENAME
	this.sid;//SID


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////TYPENAME
this.setTypename    = function (c){this.data.typename    = c ; }
////SID
this.setSid    = function (c){this.data.sid    = c ; }

}


//警告 : 不要写成 {Api_SYS_SHOPTYPES_A1_Request}
module.exports = Api_SYS_SHOPTYPES_A1_Request;
