/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_REPAYMENTRECORDS_A3_Request =function () {
    this.api= "Api_REPAYMENTRECORDS_A3_Request";
	base.apply(this); //base 就是  TransformData
	this.sid;//SID
	this.billid;//账单存根ID
	this.billdetails;//分期账单ID
	this.numberofperiods;//期数
	this.repaymenttime;//还款时间
	this.overdays;//逾期天数正数逾期负数提前
	this.repayment;//还款方式
	this.repaymentamount;//还款额度
	this.comm;//备注


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////SID
this.setSid    = function (c){this.data.sid    = c ; }
////账单存根ID
this.setBillid    = function (c){this.data.billid    = c ; }
////分期账单ID
this.setBilldetails    = function (c){this.data.billdetails    = c ; }
////期数
this.setNumberofperiods    = function (c){this.data.numberofperiods    = c ; }
////还款时间
this.setRepaymenttime    = function (c){this.data.repaymenttime    = c ; }
////逾期天数正数逾期负数提前
this.setOverdays    = function (c){this.data.overdays    = c ; }
////还款方式
this.setRepayment    = function (c){this.data.repayment    = c ; }
////还款额度
this.setRepaymentamount    = function (c){this.data.repaymentamount    = c ; }
////备注
this.setComm    = function (c){this.data.comm    = c ; }

}


//警告 : 不要写成 {Api_REPAYMENTRECORDS_A3_Request}
module.exports = Api_REPAYMENTRECORDS_A3_Request;
