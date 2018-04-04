/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_MSGINBOX_A5_ReadMsg_Request =function () {
    this.api= "Api_MSGINBOX_A5_ReadMsg_Request";
	base.apply(this); //base 就是  TransformData
	this.accountid;//ACCOUNTID-无字典对应


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////ACCOUNTID-无字典对应
this.setAccountid    = function (c){this.data.accountid    = c ; }

}


//警告 : 不要写成 {Api_MSGINBOX_A5_ReadMsg_Request}
module.exports = Api_MSGINBOX_A5_ReadMsg_Request;
