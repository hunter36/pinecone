/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_CARD_AGENT_A3_Request =function () {
    this.api= "Api_CARD_AGENT_A3_Request";
	base.apply(this); //base 就是  TransformData
	this.sid;//SID
	this.name;//NAME


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////SID
this.setSid    = function (c){this.data.sid    = c ; }
////NAME
this.setName    = function (c){this.data.name    = c ; }

}


//警告 : 不要写成 {Api_CARD_AGENT_A3_Request}
module.exports = Api_CARD_AGENT_A3_Request;
