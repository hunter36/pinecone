/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_CREDITCARDENCODERULES_A1_Request =function () {
    this.api= "Api_CREDITCARDENCODERULES_A1_Request";
	base.apply(this); //base 就是  TransformData
	this.r;//编码RegExpr


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////编码RegExpr
this.setR    = function (c){this.data.r    = c ; }

}


//警告 : 不要写成 {Api_CREDITCARDENCODERULES_A1_Request}
module.exports = Api_CREDITCARDENCODERULES_A1_Request;
