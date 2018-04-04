/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_PLAT_SERAREA_A3_Request =function () {
    this.api= "Api_PLAT_SERAREA_A3_Request";
	base.apply(this); //base 就是  TransformData
	this.sid;//SID
	this.cityid;//区域ID关联city
	this.aname;//区域名称
	this.pcityd;//父区域
	this.ctime;//创建时间
	this.comm;//说明


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////SID
this.setSid    = function (c){this.data.sid    = c ; }
////区域ID关联city
this.setCityid    = function (c){this.data.cityid    = c ; }
////区域名称
this.setAname    = function (c){this.data.aname    = c ; }
////父区域
this.setPcityd    = function (c){this.data.pcityd    = c ; }
////创建时间
this.setCtime    = function (c){this.data.ctime    = c ; }
////说明
this.setComm    = function (c){this.data.comm    = c ; }

}


//警告 : 不要写成 {Api_PLAT_SERAREA_A3_Request}
module.exports = Api_PLAT_SERAREA_A3_Request;
