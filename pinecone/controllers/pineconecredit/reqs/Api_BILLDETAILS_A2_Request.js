/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_BILLDETAILS_A2_Request =function () {
    this.api= "Api_BILLDETAILS_A2_Request";
	base.apply(this); //base 就是  TransformData
	this.sid;//分期还款条目ID
	this.aid;//消费用户账户ID关联用户
	this.ordernumber;//订单号
	this.cardid;//[提高效率冗余]卡号[卡库关联发卡方
	this.card_type_id;//[提高效率冗余]卡种ID
	this.typename;//[提高效率冗余]卡种产品名称
	this.clog;//[FILE][提高效率冗余]卡片Log
	this.aname;//[提高效率冗余]APP卡用户姓名[已经实名认证
	this.cmid;//[提高效率冗余]信用卡商户ID
	this.cmname;//[提高效率冗余]信用卡商户名称[冗余一下缺点是怕改名称以后再取消做关联
	this.mid;//[提高效率冗余]商户ID
	this.mname;//[提高效率冗余]商户名称[冗余一下缺点是怕改名称以后再取消做关联
	this.shopid;//[提高效率冗余]门店ID[关联商户
	this.shopname;//[提高效率冗余]门店名称[冗余一下缺点是怕改名称以后再取消做关联
	this.billid;//分期账单ID 关联 账单存根
	this.prerefdetailid;//上期账单ID
	this.splitrefdetailid;//引用被分期的DetaiID
	this.orderamout;//[汇总信息冗余]订单总额应还本金
	this.total;//[汇总信息冗余]应还总额_包含总服务费
	this.sertotal;//[汇总信息冗余]总服务费
	this.periodall;//总期数
	this.periodcount;//第几期
	this.createtime;//生成日期[冗余BILLS
	this.billstart;//记账启始日如每月5号出账日
	this.reimbursed;//本期应还额本金
	this.cp8_splitrate;//[冗余当前参数]信用卡或分期方案分期费率分期账单是存的分期方案中配置的费率
	this.fee;//本期手续费服务费2018目前未找到配置用cp8_SplitRate*总额作服务费
	this.overduedate;//逾期计算日
	this.cp6_grace;//[冗余当前参数]信用卡或分期6_账单宽限期有几天
	this.daysoverdue;//已逾期天数
	this.latefees;//逾期总额作为本期滞纳金未超过cp6_grace不收取
	this.ramount;//本期总额逾期总额+本期手续费+本期应还额本金
	this.status;//状态
	this.repaymentid;//还款ID
	this.repaymenttime;//还款时间
	this.expirationdate;//超期计算日目前无
	this.recall;//*催还标记 是作为计算字段虚拟
	this.seramountoneday;//汇总信息_总服务费按天平均总服务费除总天数
	this.p1;//预留参数1
	this.p2;//预留参数2
	this.p3;//预留参数3
	this.sqlcondition;//SQLCONDITION-无字典对应
	this.orderexpr;//ORDEREXPR-无字典对应


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////分期还款条目ID
this.setSid    = function (c){this.data.sid    = c ; }
////消费用户账户ID关联用户
this.setAid    = function (c){this.data.aid    = c ; }
////订单号
this.setOrdernumber    = function (c){this.data.ordernumber    = c ; }
////[提高效率冗余]卡号[卡库关联发卡方
this.setCardid    = function (c){this.data.cardid    = c ; }
////[提高效率冗余]卡种ID
this.setCard_type_id    = function (c){this.data.card_type_id    = c ; }
////[提高效率冗余]卡种产品名称
this.setTypename    = function (c){this.data.typename    = c ; }
////[FILE][提高效率冗余]卡片Log
this.setClog    = function (c){this.data.clog    = c ; }
////[提高效率冗余]APP卡用户姓名[已经实名认证
this.setAname    = function (c){this.data.aname    = c ; }
////[提高效率冗余]信用卡商户ID
this.setCmid    = function (c){this.data.cmid    = c ; }
////[提高效率冗余]信用卡商户名称[冗余一下缺点是怕改名称以后再取消做关联
this.setCmname    = function (c){this.data.cmname    = c ; }
////[提高效率冗余]商户ID
this.setMid    = function (c){this.data.mid    = c ; }
////[提高效率冗余]商户名称[冗余一下缺点是怕改名称以后再取消做关联
this.setMname    = function (c){this.data.mname    = c ; }
////[提高效率冗余]门店ID[关联商户
this.setShopid    = function (c){this.data.shopid    = c ; }
////[提高效率冗余]门店名称[冗余一下缺点是怕改名称以后再取消做关联
this.setShopname    = function (c){this.data.shopname    = c ; }
////分期账单ID 关联 账单存根
this.setBillid    = function (c){this.data.billid    = c ; }
////上期账单ID
this.setPrerefdetailid    = function (c){this.data.prerefdetailid    = c ; }
////引用被分期的DetaiID
this.setSplitrefdetailid    = function (c){this.data.splitrefdetailid    = c ; }
////[汇总信息冗余]订单总额应还本金
this.setOrderamout    = function (c){this.data.orderamout    = c ; }
////[汇总信息冗余]应还总额_包含总服务费
this.setTotal    = function (c){this.data.total    = c ; }
////[汇总信息冗余]总服务费
this.setSertotal    = function (c){this.data.sertotal    = c ; }
////总期数
this.setPeriodall    = function (c){this.data.periodall    = c ; }
////第几期
this.setPeriodcount    = function (c){this.data.periodcount    = c ; }
////生成日期[冗余BILLS
this.setCreatetime    = function (c){this.data.createtime    = c ; }
////记账启始日如每月5号出账日
this.setBillstart    = function (c){this.data.billstart    = c ; }
////本期应还额本金
this.setReimbursed    = function (c){this.data.reimbursed    = c ; }
////[冗余当前参数]信用卡或分期方案分期费率分期账单是存的分期方案中配置的费率
this.setCp8_splitrate    = function (c){this.data.cp8_splitrate    = c ; }
////本期手续费服务费2018目前未找到配置用cp8_SplitRate*总额作服务费
this.setFee    = function (c){this.data.fee    = c ; }
////逾期计算日
this.setOverduedate    = function (c){this.data.overduedate    = c ; }
////[冗余当前参数]信用卡或分期6_账单宽限期有几天
this.setCp6_grace    = function (c){this.data.cp6_grace    = c ; }
////已逾期天数
this.setDaysoverdue    = function (c){this.data.daysoverdue    = c ; }
////逾期总额作为本期滞纳金未超过cp6_grace不收取
this.setLatefees    = function (c){this.data.latefees    = c ; }
////本期总额逾期总额+本期手续费+本期应还额本金
this.setRamount    = function (c){this.data.ramount    = c ; }
////状态
this.setStatus    = function (c){this.data.status    = c ; }
////还款ID
this.setRepaymentid    = function (c){this.data.repaymentid    = c ; }
////还款时间
this.setRepaymenttime    = function (c){this.data.repaymenttime    = c ; }
////超期计算日目前无
this.setExpirationdate    = function (c){this.data.expirationdate    = c ; }
////*催还标记 是作为计算字段虚拟
this.setRecall    = function (c){this.data.recall    = c ; }
////汇总信息_总服务费按天平均总服务费除总天数
this.setSeramountoneday    = function (c){this.data.seramountoneday    = c ; }
////预留参数1
this.setP1    = function (c){this.data.p1    = c ; }
////预留参数2
this.setP2    = function (c){this.data.p2    = c ; }
////预留参数3
this.setP3    = function (c){this.data.p3    = c ; }
////SQLCONDITION-无字典对应
this.setSqlcondition    = function (c){this.data.sqlcondition    = c ; }
////ORDEREXPR-无字典对应
this.setOrderexpr    = function (c){this.data.orderexpr    = c ; }

}


//警告 : 不要写成 {Api_BILLDETAILS_A2_Request}
module.exports = Api_BILLDETAILS_A2_Request;
