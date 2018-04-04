/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_CARD_JOINTCONTRACT_A3_Request =function () {
    this.api= "Api_CARD_JOINTCONTRACT_A3_Request";
	base.apply(this); //base 就是  TransformData
	this.sid;//SID
	this.contractno;//合同编号
	this.settleparameters;//卡商-商户结算参数
	this.contracttext;//合同文本
	this.versionnumber;//版本号
	this.lastupdatetime;//最后更新时间
	this.updater;//更新人


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////SID
this.setSid    = function (c){this.data.sid    = c ; }
////合同编号
this.setContractno    = function (c){this.data.contractno    = c ; }
////卡商-商户结算参数
this.setSettleparameters    = function (c){this.data.settleparameters    = c ; }
////合同文本
this.setContracttext    = function (c){this.data.contracttext    = c ; }
////版本号
this.setVersionnumber    = function (c){this.data.versionnumber    = c ; }
////最后更新时间
this.setLastupdatetime    = function (c){this.data.lastupdatetime    = c ; }
////更新人
this.setUpdater    = function (c){this.data.updater    = c ; }

}


//警告 : 不要写成 {Api_CARD_JOINTCONTRACT_A3_Request}
module.exports = Api_CARD_JOINTCONTRACT_A3_Request;
