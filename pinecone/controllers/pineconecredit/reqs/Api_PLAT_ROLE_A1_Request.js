/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_PLAT_ROLE_A1_Request =function () {
    this.api= "Api_PLAT_ROLE_A1_Request";
	base.apply(this); //base 就是  TransformData
	this.rname;//机构角色名称
	this.accounttype;//映射和关联Account表角色大类
	this.proleid;//[20180210 Add]父级角色ID顶级机构为
	this.rolelevel;//[20180210 Add]角色层级
	this.state;//状态
	this.comm;//角色说明
	this.prijson;//角色权限配置JSON格式
	this.sid;//角色ID


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////机构角色名称
this.setRname    = function (c){this.data.rname    = c ; }
////映射和关联Account表角色大类
this.setAccounttype    = function (c){this.data.accounttype    = c ; }
////[20180210 Add]父级角色ID顶级机构为
this.setProleid    = function (c){this.data.proleid    = c ; }
////[20180210 Add]角色层级
this.setRolelevel    = function (c){this.data.rolelevel    = c ; }
////状态
this.setState    = function (c){this.data.state    = c ; }
////角色说明
this.setComm    = function (c){this.data.comm    = c ; }
////角色权限配置JSON格式
this.setPrijson    = function (c){this.data.prijson    = c ; }
////角色ID
this.setSid    = function (c){this.data.sid    = c ; }

}


//警告 : 不要写成 {Api_PLAT_ROLE_A1_Request}
module.exports = Api_PLAT_ROLE_A1_Request;
