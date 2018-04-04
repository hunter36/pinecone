/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_BILLS_A2_Request =function () {
    this.api= "Api_BILLS_A2_Request";
	base.apply(this); //base 就是  TransformData
	this.sid;//SID
	this.billid;//分期账单ID
	this.aid;//用户账户ID关联用户
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
	this.shoptype;//[提高效率冗余]门店类型
	this.periodsnum;//总期数信用支付为1
	this.prate;//总额可分期比率[预留
	this.orderamout;//订单总额应还本金
	this.total;//应还总额_包含总服务费
	this.sertotal;//总服务费
	this.reamount;//已还总额
	this.leamount;//待还总额
	this.limitreturn;//最低还款额[预留
	this.batchtime;//跑批时间戳
	this.rate;//标准利率0
	this.erate;//逾期利率
	this.createtime;//生成日期
	this.billdetaildays;//天数计算分期还款单出帐日帐期
	this.expiredays;//天数出帐日到逾期的标记
	this.endtime;//关闭时间
	this.type;//账单类型
	this.status;//状态
	this.c1_billcalstart;//信用卡1_账单统计起日
	this.c2_billcalend;//信用卡2_账单统计止日_开始和停止日应该是一个所以这个字段应该忽略TODO确认
	this.c3_billcalleng;//信用卡3_账单统计期时长为几个月
	this.c4_billleng;//信用卡4_账单统计截止日到账单日之间的时长_不可小于8日
	this.c5_betweenleng;//信用卡5_账单日到账单到期日之间的时长
	this.cp6_grace;//信用卡或分期6_账单宽限期有几天
	this.cp7_splitmax;//信用卡或分期方案设置_可分期期数20180206目前应该作为分期方案总数暂时忽略
	this.cp8_splitrate;//信用卡或分期方案设置_分期费率_不可超过后台设置20180206统计数暂时忽略
	this.cp9_expirerate;//信用卡或分期方案设置_逾期费率
	this.cp10_loseexplen;//信用卡或分期方案设置_失效规则_有效期多久
	this.cp11_losemaxuse;//信用卡或分期方案设置_失效规则_可使用多少次
	this.cp12_minpay;//信用卡或分期方案设置_最低单笔消费不得低于xx元
	this.cp13_memberfee;//信用卡或分期方案设置_会员费金额
	this.p14_mf_type;//分期方案设置_会员费金额_收费方式
	this.p15_mf_counts;//会员费收取方式
	this.p16_mf_days;//或多少天后生成账单
	this.c17_mf_start;//会员费收取方式
	this.c18_mf_interval;//此后每隔多少个账单统计期收取一次
	this.cp19_risk;//信用卡或分期方案设置_风控策略配置_选择
	this.cp20_wid;//信用卡或分期方案设置_资金账户配置_选择进出资金的资金账户
	this.cp21_paymethod;//[预留]信用卡或分期方案设置_资金通道配置？？？？
	this.periodcount;//Card_TYPE_Period.PeriodCount期数_快照没有什么意义不参与计算只是快照
	this.periodservicerate;//Card_TYPE_Period.servicerate服务费_快照
	this.periodrate;//Card_TYPE_Period.Periodrate费率_快照
	this.sqlcondition;//SQLCONDITION-无字典对应
	this.orderexpr;//ORDEREXPR-无字典对应


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////SID
this.setSid    = function (c){this.data.sid    = c ; }
////分期账单ID
this.setBillid    = function (c){this.data.billid    = c ; }
////用户账户ID关联用户
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
////[提高效率冗余]门店类型
this.setShoptype    = function (c){this.data.shoptype    = c ; }
////总期数信用支付为1
this.setPeriodsnum    = function (c){this.data.periodsnum    = c ; }
////总额可分期比率[预留
this.setPrate    = function (c){this.data.prate    = c ; }
////订单总额应还本金
this.setOrderamout    = function (c){this.data.orderamout    = c ; }
////应还总额_包含总服务费
this.setTotal    = function (c){this.data.total    = c ; }
////总服务费
this.setSertotal    = function (c){this.data.sertotal    = c ; }
////已还总额
this.setReamount    = function (c){this.data.reamount    = c ; }
////待还总额
this.setLeamount    = function (c){this.data.leamount    = c ; }
////最低还款额[预留
this.setLimitreturn    = function (c){this.data.limitreturn    = c ; }
////跑批时间戳
this.setBatchtime    = function (c){this.data.batchtime    = c ; }
////标准利率0
this.setRate    = function (c){this.data.rate    = c ; }
////逾期利率
this.setErate    = function (c){this.data.erate    = c ; }
////生成日期
this.setCreatetime    = function (c){this.data.createtime    = c ; }
////天数计算分期还款单出帐日帐期
this.setBilldetaildays    = function (c){this.data.billdetaildays    = c ; }
////天数出帐日到逾期的标记
this.setExpiredays    = function (c){this.data.expiredays    = c ; }
////关闭时间
this.setEndtime    = function (c){this.data.endtime    = c ; }
////账单类型
this.setType    = function (c){this.data.type    = c ; }
////状态
this.setStatus    = function (c){this.data.status    = c ; }
////信用卡1_账单统计起日
this.setC1_billcalstart    = function (c){this.data.c1_billcalstart    = c ; }
////信用卡2_账单统计止日_开始和停止日应该是一个所以这个字段应该忽略TODO确认
this.setC2_billcalend    = function (c){this.data.c2_billcalend    = c ; }
////信用卡3_账单统计期时长为几个月
this.setC3_billcalleng    = function (c){this.data.c3_billcalleng    = c ; }
////信用卡4_账单统计截止日到账单日之间的时长_不可小于8日
this.setC4_billleng    = function (c){this.data.c4_billleng    = c ; }
////信用卡5_账单日到账单到期日之间的时长
this.setC5_betweenleng    = function (c){this.data.c5_betweenleng    = c ; }
////信用卡或分期6_账单宽限期有几天
this.setCp6_grace    = function (c){this.data.cp6_grace    = c ; }
////信用卡或分期方案设置_可分期期数20180206目前应该作为分期方案总数暂时忽略
this.setCp7_splitmax    = function (c){this.data.cp7_splitmax    = c ; }
////信用卡或分期方案设置_分期费率_不可超过后台设置20180206统计数暂时忽略
this.setCp8_splitrate    = function (c){this.data.cp8_splitrate    = c ; }
////信用卡或分期方案设置_逾期费率
this.setCp9_expirerate    = function (c){this.data.cp9_expirerate    = c ; }
////信用卡或分期方案设置_失效规则_有效期多久
this.setCp10_loseexplen    = function (c){this.data.cp10_loseexplen    = c ; }
////信用卡或分期方案设置_失效规则_可使用多少次
this.setCp11_losemaxuse    = function (c){this.data.cp11_losemaxuse    = c ; }
////信用卡或分期方案设置_最低单笔消费不得低于xx元
this.setCp12_minpay    = function (c){this.data.cp12_minpay    = c ; }
////信用卡或分期方案设置_会员费金额
this.setCp13_memberfee    = function (c){this.data.cp13_memberfee    = c ; }
////分期方案设置_会员费金额_收费方式
this.setP14_mf_type    = function (c){this.data.p14_mf_type    = c ; }
////会员费收取方式
this.setP15_mf_counts    = function (c){this.data.p15_mf_counts    = c ; }
////或多少天后生成账单
this.setP16_mf_days    = function (c){this.data.p16_mf_days    = c ; }
////会员费收取方式
this.setC17_mf_start    = function (c){this.data.c17_mf_start    = c ; }
////此后每隔多少个账单统计期收取一次
this.setC18_mf_interval    = function (c){this.data.c18_mf_interval    = c ; }
////信用卡或分期方案设置_风控策略配置_选择
this.setCp19_risk    = function (c){this.data.cp19_risk    = c ; }
////信用卡或分期方案设置_资金账户配置_选择进出资金的资金账户
this.setCp20_wid    = function (c){this.data.cp20_wid    = c ; }
////[预留]信用卡或分期方案设置_资金通道配置？？？？
this.setCp21_paymethod    = function (c){this.data.cp21_paymethod    = c ; }
////Card_TYPE_Period.PeriodCount期数_快照没有什么意义不参与计算只是快照
this.setPeriodcount    = function (c){this.data.periodcount    = c ; }
////Card_TYPE_Period.servicerate服务费_快照
this.setPeriodservicerate    = function (c){this.data.periodservicerate    = c ; }
////Card_TYPE_Period.Periodrate费率_快照
this.setPeriodrate    = function (c){this.data.periodrate    = c ; }
////SQLCONDITION-无字典对应
this.setSqlcondition    = function (c){this.data.sqlcondition    = c ; }
////ORDEREXPR-无字典对应
this.setOrderexpr    = function (c){this.data.orderexpr    = c ; }

}


//警告 : 不要写成 {Api_BILLS_A2_Request}
module.exports = Api_BILLS_A2_Request;
