/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_CARD_MARKET_TYPE_A3_Request =function () {
    this.api= "Api_CARD_MARKET_TYPE_A3_Request";
	base.apply(this); //base 就是  TransformData
	this.sid;//SID
	this.card_type_id;//卡种,注意由系统分配接口调用不设置[全局编码唯一43064307
	this.aid;//申请人发卡方
	this.maintype;//卡类型
	this.aidname;//发卡方名称注意系统自动填充不需要输入
	this.clog;//[FILE]卡片Log
	this.typename;//卡种名称
	this.predict;//预估额度
	this.condition;//申请条件
	this.range;//应用范围
	this.card_tags;//简介卡片标签 多个标签用逗号分割增加CRAD_TAGS表
	this.profiles;//卡片简介
	this.cinfo;//卡片详细介绍
	this.cdoc;//需要替换的用户姓名请用标签替换{$NAME}《征信授权协议》协议中涉及用户姓名等字段用特殊标签代替
	this.pdoc;//需要替换的用户姓名请用标签替换{$NAME}《用户虚拟卡服务协议》协议中涉及用户姓名等字段用特殊标签代替
	this.cardstate;//卡种审核状态
	this.onlinestate;//上下架状态
	this.stime;//最后状态切换时间
	this.applyid;//关联申请表SID
	this.platservice_rateid;//[冗余审批表的]平台服务费征收标准选择编号ID
	this.additiondoc;//[FILE][冗余审批表的]平台要求追加上传的其他资料


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////SID
this.setSid    = function (c){this.data.sid    = c ; }
////卡种,注意由系统分配接口调用不设置[全局编码唯一43064307
this.setCard_type_id    = function (c){this.data.card_type_id    = c ; }
////申请人发卡方
this.setAid    = function (c){this.data.aid    = c ; }
////卡类型
this.setMaintype    = function (c){this.data.maintype    = c ; }
////发卡方名称注意系统自动填充不需要输入
this.setAidname    = function (c){this.data.aidname    = c ; }
////[FILE]卡片Log
this.setClog    = function (c){this.data.clog    = c ; }
////卡种名称
this.setTypename    = function (c){this.data.typename    = c ; }
////预估额度
this.setPredict    = function (c){this.data.predict    = c ; }
////申请条件
this.setCondition    = function (c){this.data.condition    = c ; }
////应用范围
this.setRange    = function (c){this.data.range    = c ; }
////简介卡片标签 多个标签用逗号分割增加CRAD_TAGS表
this.setCard_tags    = function (c){this.data.card_tags    = c ; }
////卡片简介
this.setProfiles    = function (c){this.data.profiles    = c ; }
////卡片详细介绍
this.setCinfo    = function (c){this.data.cinfo    = c ; }
////需要替换的用户姓名请用标签替换{$NAME}《征信授权协议》协议中涉及用户姓名等字段用特殊标签代替
this.setCdoc    = function (c){this.data.cdoc    = c ; }
////需要替换的用户姓名请用标签替换{$NAME}《用户虚拟卡服务协议》协议中涉及用户姓名等字段用特殊标签代替
this.setPdoc    = function (c){this.data.pdoc    = c ; }
////卡种审核状态
this.setCardstate    = function (c){this.data.cardstate    = c ; }
////上下架状态
this.setOnlinestate    = function (c){this.data.onlinestate    = c ; }
////最后状态切换时间
this.setStime    = function (c){this.data.stime    = c ; }
////关联申请表SID
this.setApplyid    = function (c){this.data.applyid    = c ; }
////[冗余审批表的]平台服务费征收标准选择编号ID
this.setPlatservice_rateid    = function (c){this.data.platservice_rateid    = c ; }
////[FILE][冗余审批表的]平台要求追加上传的其他资料
this.setAdditiondoc    = function (c){this.data.additiondoc    = c ; }

}


//警告 : 不要写成 {Api_CARD_MARKET_TYPE_A3_Request}
module.exports = Api_CARD_MARKET_TYPE_A3_Request;
