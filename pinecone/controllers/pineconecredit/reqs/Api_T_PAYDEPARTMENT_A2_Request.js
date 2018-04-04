/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_T_PAYDEPARTMENT_A2_Request =function () {
    this.api= "Api_T_PAYDEPARTMENT_A2_Request";
	base.apply(this); //base 就是  TransformData
	this.departid;//三方支付机构编号
	this.sid;//SID
	this.departname;//机构名称
	this.account;//我方支付帐号
	this.paypwd;//支付密码
	this.deskey;//支付机构的证书或key
	this.cbackurl;//我方支付结果回调接收地址
	this.payurl;//支付接口
	this.qryurl;//查询接口
	this.pikupurl;//pickup回调页面地址
	this.refundurl;//退款接口[要加order表里面要加上一个提交3方支付的时间字段
	this.purl1;//预留接口地址1
	this.purl2;//预留接口地址1
	this.purl3;//预留接口地址1
	this.purl4;//预留接口地址1
	this.purl5;//预留接口地址1
	this.comm;//预留
	this.initialization;//初始化[依据APP原型
	this.lianlian;//连连
	this.sqlcondition;//SQLCONDITION-无字典对应
	this.orderexpr;//ORDEREXPR-无字典对应


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////三方支付机构编号
this.setDepartid    = function (c){this.data.departid    = c ; }
////SID
this.setSid    = function (c){this.data.sid    = c ; }
////机构名称
this.setDepartname    = function (c){this.data.departname    = c ; }
////我方支付帐号
this.setAccount    = function (c){this.data.account    = c ; }
////支付密码
this.setPaypwd    = function (c){this.data.paypwd    = c ; }
////支付机构的证书或key
this.setDeskey    = function (c){this.data.deskey    = c ; }
////我方支付结果回调接收地址
this.setCbackurl    = function (c){this.data.cbackurl    = c ; }
////支付接口
this.setPayurl    = function (c){this.data.payurl    = c ; }
////查询接口
this.setQryurl    = function (c){this.data.qryurl    = c ; }
////pickup回调页面地址
this.setPikupurl    = function (c){this.data.pikupurl    = c ; }
////退款接口[要加order表里面要加上一个提交3方支付的时间字段
this.setRefundurl    = function (c){this.data.refundurl    = c ; }
////预留接口地址1
this.setPurl1    = function (c){this.data.purl1    = c ; }
////预留接口地址1
this.setPurl2    = function (c){this.data.purl2    = c ; }
////预留接口地址1
this.setPurl3    = function (c){this.data.purl3    = c ; }
////预留接口地址1
this.setPurl4    = function (c){this.data.purl4    = c ; }
////预留接口地址1
this.setPurl5    = function (c){this.data.purl5    = c ; }
////预留
this.setComm    = function (c){this.data.comm    = c ; }
////初始化[依据APP原型
this.setInitialization    = function (c){this.data.initialization    = c ; }
////连连
this.setLianlian    = function (c){this.data.lianlian    = c ; }
////SQLCONDITION-无字典对应
this.setSqlcondition    = function (c){this.data.sqlcondition    = c ; }
////ORDEREXPR-无字典对应
this.setOrderexpr    = function (c){this.data.orderexpr    = c ; }

}


//警告 : 不要写成 {Api_T_PAYDEPARTMENT_A2_Request}
module.exports = Api_T_PAYDEPARTMENT_A2_Request;
