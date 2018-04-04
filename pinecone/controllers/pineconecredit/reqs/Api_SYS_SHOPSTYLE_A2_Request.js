/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_SYS_SHOPSTYLE_A2_Request =function () {
    this.api= "Api_SYS_SHOPSTYLE_A2_Request";
	base.apply(this); //base 就是  TransformData
	this.sid;//SID
	this.tagname;//TAGNAME
	this.initialization;//初始化[依据APP原型
	this.hipster;//潮人
	this.store3c;//门店3C
	this.sqlcondition;//SQLCONDITION-无字典对应
	this.orderexpr;//ORDEREXPR-无字典对应


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////SID
this.setSid    = function (c){this.data.sid    = c ; }
////TAGNAME
this.setTagname    = function (c){this.data.tagname    = c ; }
////初始化[依据APP原型
this.setInitialization    = function (c){this.data.initialization    = c ; }
////潮人
this.setHipster    = function (c){this.data.hipster    = c ; }
////门店3C
this.setStore3c    = function (c){this.data.store3c    = c ; }
////SQLCONDITION-无字典对应
this.setSqlcondition    = function (c){this.data.sqlcondition    = c ; }
////ORDEREXPR-无字典对应
this.setOrderexpr    = function (c){this.data.orderexpr    = c ; }

}


//警告 : 不要写成 {Api_SYS_SHOPSTYLE_A2_Request}
module.exports = Api_SYS_SHOPSTYLE_A2_Request;
