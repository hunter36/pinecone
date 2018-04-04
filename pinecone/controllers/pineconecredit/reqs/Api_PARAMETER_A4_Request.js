/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_PARAMETER_A4_Request =function () {
    this.api= "Api_PARAMETER_A4_Request";
	base.apply(this); //base 就是  TransformData
	this.id;//ID


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////ID
this.setId    = function (c){this.data.id    = c ; }

}


//警告 : 不要写成 {Api_PARAMETER_A4_Request}
module.exports = Api_PARAMETER_A4_Request;
