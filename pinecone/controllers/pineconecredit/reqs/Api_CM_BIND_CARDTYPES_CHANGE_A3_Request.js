/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_CM_BIND_CARDTYPES_CHANGE_A3_Request =function () {
    this.api= "Api_CM_BIND_CARDTYPES_CHANGE_A3_Request";
	base.apply(this); //base 就是  TransformData
	this.sid;//SID
	this.changeid;//对应于Card_BindApply_Change的SID
	this.card_type_id;//合作的卡种ID


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////SID
this.setSid    = function (c){this.data.sid    = c ; }
////对应于Card_BindApply_Change的SID
this.setChangeid    = function (c){this.data.changeid    = c ; }
////合作的卡种ID
this.setCard_type_id    = function (c){this.data.card_type_id    = c ; }

}


//警告 : 不要写成 {Api_CM_BIND_CARDTYPES_CHANGE_A3_Request}
module.exports = Api_CM_BIND_CARDTYPES_CHANGE_A3_Request;
