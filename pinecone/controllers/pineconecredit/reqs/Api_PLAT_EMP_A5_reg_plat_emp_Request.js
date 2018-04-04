/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_PLAT_EMP_A5_reg_plat_emp_Request =function () {
    this.api= "Api_PLAT_EMP_A5_reg_plat_emp_Request";
	base.apply(this); //base 就是  TransformData
	this.name;//姓名
	this.cid;//身份证号
	this.rids;//平台类角色列表
	this.pid;//直接上级的SID
	this.did;//归属部门ID
	this.hasarea;//是否有服务区域指定
	this.regphonenumber;//REGPHONENUMBER-无字典对应
	this.password;//PASSWORD-无字典对应


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////姓名
this.setName    = function (c){this.data.name    = c ; }
////身份证号
this.setCid    = function (c){this.data.cid    = c ; }
////平台类角色列表
this.setRids    = function (c){this.data.rids    = c ; }
////直接上级的SID
this.setPid    = function (c){this.data.pid    = c ; }
////归属部门ID
this.setDid    = function (c){this.data.did    = c ; }
////是否有服务区域指定
this.setHasarea    = function (c){this.data.hasarea    = c ; }
////REGPHONENUMBER-无字典对应
this.setRegphonenumber    = function (c){this.data.regphonenumber    = c ; }
////PASSWORD-无字典对应
this.setPassword    = function (c){this.data.password    = c ; }

}


//警告 : 不要写成 {Api_PLAT_EMP_A5_reg_plat_emp_Request}
module.exports = Api_PLAT_EMP_A5_reg_plat_emp_Request;
