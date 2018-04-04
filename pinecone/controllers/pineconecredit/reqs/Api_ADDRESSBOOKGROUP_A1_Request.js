/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_ADDRESSBOOKGROUP_A1_Request =function () {
    this.api= "Api_ADDRESSBOOKGROUP_A1_Request";
	base.apply(this); //base 就是  TransformData
	this.gname;//分组名称
	this.ownertype;//属主类型
	this.inorder;//统一个属主内部的通讯录组编号目前暂时忽略
	this.comm;//备注
	this.ctime;//创建时间
	this.itemcnt;//组内人数实际是统计数字暂时预留
	this.sid;//SID分组唯一编号


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////分组名称
this.setGname    = function (c){this.data.gname    = c ; }
////属主类型
this.setOwnertype    = function (c){this.data.ownertype    = c ; }
////统一个属主内部的通讯录组编号目前暂时忽略
this.setInorder    = function (c){this.data.inorder    = c ; }
////备注
this.setComm    = function (c){this.data.comm    = c ; }
////创建时间
this.setCtime    = function (c){this.data.ctime    = c ; }
////组内人数实际是统计数字暂时预留
this.setItemcnt    = function (c){this.data.itemcnt    = c ; }
////SID分组唯一编号
this.setSid    = function (c){this.data.sid    = c ; }

}


//警告 : 不要写成 {Api_ADDRESSBOOKGROUP_A1_Request}
module.exports = Api_ADDRESSBOOKGROUP_A1_Request;
