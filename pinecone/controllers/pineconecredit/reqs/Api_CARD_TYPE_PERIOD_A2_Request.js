/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_CARD_TYPE_PERIOD_A2_Request =function () {
    this.api= "Api_CARD_TYPE_PERIOD_A2_Request";
	base.apply(this); //base 就是  TransformData
	this.sid;//合同文件编号
	this.caid;//发卡方
	this.caidname;//发卡方名称[冗余
	this.card_type_id;//卡种
	this.periodcount;//期数
	this.servicerate;//服务费
	this.rate;//费率
	this.lastupdatetime;//最后更新时间
	this.updater;//更新人
	this.sqlcondition;//SQLCONDITION-无字典对应
	this.orderexpr;//ORDEREXPR-无字典对应


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////合同文件编号
this.setSid    = function (c){this.data.sid    = c ; }
////发卡方
this.setCaid    = function (c){this.data.caid    = c ; }
////发卡方名称[冗余
this.setCaidname    = function (c){this.data.caidname    = c ; }
////卡种
this.setCard_type_id    = function (c){this.data.card_type_id    = c ; }
////期数
this.setPeriodcount    = function (c){this.data.periodcount    = c ; }
////服务费
this.setServicerate    = function (c){this.data.servicerate    = c ; }
////费率
this.setRate    = function (c){this.data.rate    = c ; }
////最后更新时间
this.setLastupdatetime    = function (c){this.data.lastupdatetime    = c ; }
////更新人
this.setUpdater    = function (c){this.data.updater    = c ; }
////SQLCONDITION-无字典对应
this.setSqlcondition    = function (c){this.data.sqlcondition    = c ; }
////ORDEREXPR-无字典对应
this.setOrderexpr    = function (c){this.data.orderexpr    = c ; }

}


//警告 : 不要写成 {Api_CARD_TYPE_PERIOD_A2_Request}
module.exports = Api_CARD_TYPE_PERIOD_A2_Request;
