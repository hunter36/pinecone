/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_PLAT_PRI_A1_Request =function () {
    this.api= "Api_PLAT_PRI_A1_Request";
	base.apply(this); //base 就是  TransformData
	this.rid;//RID
	this.actid;//ACTID
	this.state;//权限状态
	this.sid;//SID


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////RID
this.setRid    = function (c){this.data.rid    = c ; }
////ACTID
this.setActid    = function (c){this.data.actid    = c ; }
////权限状态
this.setState    = function (c){this.data.state    = c ; }
////SID
this.setSid    = function (c){this.data.sid    = c ; }

}


//警告 : 不要写成 {Api_PLAT_PRI_A1_Request}
module.exports = Api_PLAT_PRI_A1_Request;
