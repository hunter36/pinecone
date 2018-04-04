/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_PLAT_DEPART_A2_Request =function () {
    this.api= "Api_PLAT_DEPART_A2_Request";
	base.apply(this); //base 就是  TransformData
	this.sid;//部门ID
	this.pid;//上级部门ID没有为NUL
	this.dname;//部门名称
	this.masterid;//主管ID对应员工表的SID
	this.opt;//创建人
	this.ctime;//创建时间
	this.sqlcondition;//SQLCONDITION-无字典对应
	this.orderexpr;//ORDEREXPR-无字典对应


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////部门ID
this.setSid    = function (c){this.data.sid    = c ; }
////上级部门ID没有为NUL
this.setPid    = function (c){this.data.pid    = c ; }
////部门名称
this.setDname    = function (c){this.data.dname    = c ; }
////主管ID对应员工表的SID
this.setMasterid    = function (c){this.data.masterid    = c ; }
////创建人
this.setOpt    = function (c){this.data.opt    = c ; }
////创建时间
this.setCtime    = function (c){this.data.ctime    = c ; }
////SQLCONDITION-无字典对应
this.setSqlcondition    = function (c){this.data.sqlcondition    = c ; }
////ORDEREXPR-无字典对应
this.setOrderexpr    = function (c){this.data.orderexpr    = c ; }

}


//警告 : 不要写成 {Api_PLAT_DEPART_A2_Request}
module.exports = Api_PLAT_DEPART_A2_Request;
