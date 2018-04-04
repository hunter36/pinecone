/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_CM_BIND_CARDTYPES_A1_Request =function () {
    this.api= "Api_CM_BIND_CARDTYPES_A1_Request";
	base.apply(this); //base 就是  TransformData
	this.bindid;//对应于CM_BIND的SID
	this.card_type_id;//合作的卡种ID
	this.sid;//SID


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////对应于CM_BIND的SID
this.setBindid    = function (c){this.data.bindid    = c ; }
////合作的卡种ID
this.setCard_type_id    = function (c){this.data.card_type_id    = c ; }
////SID
this.setSid    = function (c){this.data.sid    = c ; }

}


//警告 : 不要写成 {Api_CM_BIND_CARDTYPES_A1_Request}
module.exports = Api_CM_BIND_CARDTYPES_A1_Request;
