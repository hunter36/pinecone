/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_PLAT_SERVICERATE_A1_Request =function () {
    this.api= "Api_PLAT_SERVICERATE_A1_Request";
	base.apply(this); //base 就是  TransformData
	this.sertype;//服务对象类型
	this.seritem;//服务项目
	this.srate;//服务费率_暂时这样等详细需求
	this.scondition;//其他条件预留可能按照时间或者其他条件关联到计算
	this.p1;//预留参数1
	this.p2;//预留参数2
	this.p3;//预留参数3
	this.ctime;//CTime T
	this.sid;//SID


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////服务对象类型
this.setSertype    = function (c){this.data.sertype    = c ; }
////服务项目
this.setSeritem    = function (c){this.data.seritem    = c ; }
////服务费率_暂时这样等详细需求
this.setSrate    = function (c){this.data.srate    = c ; }
////其他条件预留可能按照时间或者其他条件关联到计算
this.setScondition    = function (c){this.data.scondition    = c ; }
////预留参数1
this.setP1    = function (c){this.data.p1    = c ; }
////预留参数2
this.setP2    = function (c){this.data.p2    = c ; }
////预留参数3
this.setP3    = function (c){this.data.p3    = c ; }
////CTime T
this.setCtime    = function (c){this.data.ctime    = c ; }
////SID
this.setSid    = function (c){this.data.sid    = c ; }

}


//警告 : 不要写成 {Api_PLAT_SERVICERATE_A1_Request}
module.exports = Api_PLAT_SERVICERATE_A1_Request;
