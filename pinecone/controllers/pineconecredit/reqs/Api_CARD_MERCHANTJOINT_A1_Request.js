/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_CARD_MERCHANTJOINT_A1_Request =function () {
    this.api= "Api_CARD_MERCHANTJOINT_A1_Request";
	base.apply(this); //base 就是  TransformData
	this.jointid;//联名ID
	this.merchant_aid;//联名商户
	this.card_merchan_aid;//卡商编号
	this.card_type_id;//卡种ID
	this.contractno;//合同编号
	this.sid;//SID


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////联名ID
this.setJointid    = function (c){this.data.jointid    = c ; }
////联名商户
this.setMerchant_aid    = function (c){this.data.merchant_aid    = c ; }
////卡商编号
this.setCard_merchan_aid    = function (c){this.data.card_merchan_aid    = c ; }
////卡种ID
this.setCard_type_id    = function (c){this.data.card_type_id    = c ; }
////合同编号
this.setContractno    = function (c){this.data.contractno    = c ; }
////SID
this.setSid    = function (c){this.data.sid    = c ; }

}


//警告 : 不要写成 {Api_CARD_MERCHANTJOINT_A1_Request}
module.exports = Api_CARD_MERCHANTJOINT_A1_Request;
