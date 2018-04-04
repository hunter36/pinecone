/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_MYPRIVILEGE_A1_Request =function () {
    this.api= "Api_MYPRIVILEGE_A1_Request";
	base.apply(this); //base 就是  TransformData
	this.cardid;//卡号
	this.aid;//用户编号
	this.pid;//特权ID
	this.pname;//特权名称
	this.state;//状态
	this.sid;//SID


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////卡号
this.setCardid    = function (c){this.data.cardid    = c ; }
////用户编号
this.setAid    = function (c){this.data.aid    = c ; }
////特权ID
this.setPid    = function (c){this.data.pid    = c ; }
////特权名称
this.setPname    = function (c){this.data.pname    = c ; }
////状态
this.setState    = function (c){this.data.state    = c ; }
////SID
this.setSid    = function (c){this.data.sid    = c ; }

}


//警告 : 不要写成 {Api_MYPRIVILEGE_A1_Request}
module.exports = Api_MYPRIVILEGE_A1_Request;
