/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_T_OUTER_INTERFACE_A1_Request =function () {
    this.api= "Api_T_OUTER_INTERFACE_A1_Request";
	base.apply(this); //base 就是  TransformData
	this.interfacename;//接口名称
	this.interfaceparameters;//接口参数
	this.state;//接口状态
	this.ctiem;//创建时间
	this.utime;//修改时间
	this.optid;//最后修改人账户
	this.comm;//说明
	this.sid;//SID


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////接口名称
this.setInterfacename    = function (c){this.data.interfacename    = c ; }
////接口参数
this.setInterfaceparameters    = function (c){this.data.interfaceparameters    = c ; }
////接口状态
this.setState    = function (c){this.data.state    = c ; }
////创建时间
this.setCtiem    = function (c){this.data.ctiem    = c ; }
////修改时间
this.setUtime    = function (c){this.data.utime    = c ; }
////最后修改人账户
this.setOptid    = function (c){this.data.optid    = c ; }
////说明
this.setComm    = function (c){this.data.comm    = c ; }
////SID
this.setSid    = function (c){this.data.sid    = c ; }

}


//警告 : 不要写成 {Api_T_OUTER_INTERFACE_A1_Request}
module.exports = Api_T_OUTER_INTERFACE_A1_Request;
