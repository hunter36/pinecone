/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_CARD_TYPE_CONTRACT_A2_Request =function () {
    this.api= "Api_CARD_TYPE_CONTRACT_A2_Request";
	base.apply(this); //base 就是  TransformData
	this.sid;//合同文件编号
	this.caid;//发卡方
	this.caidname;//发卡方名称[冗余
	this.card_type_id;//卡种
	this.c1_billcalstart;//信用卡1_账单统计起日
	this.c2_billcalend;//信用卡2_账单统计止日
	this.c3_billcalleng;//信用卡3_账单统计期时长为几个月
	this.c4_billleng;//信用卡4_账单统计截止日到账单日之间的时长_不可小于8日
	this.c5_betweenleng;//信用卡5_账单日到账单到期日之间的时长
	this.cp6_grace;//信用卡或分期6_账单宽限期有几天
	this.cp7_splitmax;//信用卡或分期方案设置_可分期期数20180206目前应该作为分期方案总数暂时忽略
	this.cp8_splitrate;//信用卡或分期方案设置_分期费率_不可超过后台设置20180206目统计数暂时忽略
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
////信用卡1_账单统计起日
this.setC1_billcalstart    = function (c){this.data.c1_billcalstart    = c ; }
////信用卡2_账单统计止日
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
////信用卡或分期方案设置_分期费率_不可超过后台设置20180206目统计数暂时忽略
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
////最后更新时间
this.setLastupdatetime    = function (c){this.data.lastupdatetime    = c ; }
////更新人
this.setUpdater    = function (c){this.data.updater    = c ; }
////SQLCONDITION-无字典对应
this.setSqlcondition    = function (c){this.data.sqlcondition    = c ; }
////ORDEREXPR-无字典对应
this.setOrderexpr    = function (c){this.data.orderexpr    = c ; }

}


//警告 : 不要写成 {Api_CARD_TYPE_CONTRACT_A2_Request}
module.exports = Api_CARD_TYPE_CONTRACT_A2_Request;
