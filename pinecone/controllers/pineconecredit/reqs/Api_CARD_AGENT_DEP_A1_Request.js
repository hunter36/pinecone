/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_CARD_AGENT_DEP_A1_Request =function () {
    this.api= "Api_CARD_AGENT_DEP_A1_Request";
	base.apply(this); //base 就是  TransformData
	this.agtid;//所属代理公司ID
	this.name;//部门名称
	this.sid;//内部部门ID


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////所属代理公司ID
this.setAgtid    = function (c){this.data.agtid    = c ; }
////部门名称
this.setName    = function (c){this.data.name    = c ; }
////内部部门ID
this.setSid    = function (c){this.data.sid    = c ; }

}


//警告 : 不要写成 {Api_CARD_AGENT_DEP_A1_Request}
module.exports = Api_CARD_AGENT_DEP_A1_Request;
