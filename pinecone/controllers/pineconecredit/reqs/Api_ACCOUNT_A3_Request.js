/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_ACCOUNT_A3_Request =function () {
    this.api= "Api_ACCOUNT_A3_Request";
	base.apply(this); //base 就是  TransformData
	this.sid;//SID
	this.aid;//帐号_全系统唯一
	this.accounttype;//账户类型区分登陆系统
	this.paid;//父级帐号
	this.regphonenumber;//注册手机号
	this.password;//登陆密码
	this.paypassword;//支付密码
	this.paypwderrnum;//当日支付密码错误次数
	this.paypwdlock;//支付密码是否锁定
	this.vercode;//当前验证码[冗余
	this.vercodeexpiration;//验证码过期时间[冗余
	this.orgvercode;//原手机验证码[冗余
	this.orgvercodeexpiration;//原验证码过期时间[冗余
	this.state;//状态
	this.createtime;//创建时间
	this.marketpermission;//市场准入[预留
	this.tocken;//当前tocken
	this.disknumber;//系统磁盘分配号挂接磁盘管理
	this.qrcode_my;//[FILE]我的信息_系统文件ID
	this.qrcode_pay;//[FILE]我的付款码_系统文件ID
	this.qrcode_rec;//[FILE]我的收款码_系统文件ID
	this.qrcode_myurl;//我的信息_集成域名的链接_冗余快速检索
	this.qrcode_payurl;//我的付款码_集成域名的链接_冗余快速检索
	this.qrcode_recurl;//我的收款码_集成域名的链接_冗余快速检索后面加上/useraid可以支持APP请求信息


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////SID
this.setSid    = function (c){this.data.sid    = c ; }
////帐号_全系统唯一
this.setAid    = function (c){this.data.aid    = c ; }
////账户类型区分登陆系统
this.setAccounttype    = function (c){this.data.accounttype    = c ; }
////父级帐号
this.setPaid    = function (c){this.data.paid    = c ; }
////注册手机号
this.setRegphonenumber    = function (c){this.data.regphonenumber    = c ; }
////登陆密码
this.setPassword    = function (c){this.data.password    = c ; }
////支付密码
this.setPaypassword    = function (c){this.data.paypassword    = c ; }
////当日支付密码错误次数
this.setPaypwderrnum    = function (c){this.data.paypwderrnum    = c ; }
////支付密码是否锁定
this.setPaypwdlock    = function (c){this.data.paypwdlock    = c ; }
////当前验证码[冗余
this.setVercode    = function (c){this.data.vercode    = c ; }
////验证码过期时间[冗余
this.setVercodeexpiration    = function (c){this.data.vercodeexpiration    = c ; }
////原手机验证码[冗余
this.setOrgvercode    = function (c){this.data.orgvercode    = c ; }
////原验证码过期时间[冗余
this.setOrgvercodeexpiration    = function (c){this.data.orgvercodeexpiration    = c ; }
////状态
this.setState    = function (c){this.data.state    = c ; }
////创建时间
this.setCreatetime    = function (c){this.data.createtime    = c ; }
////市场准入[预留
this.setMarketpermission    = function (c){this.data.marketpermission    = c ; }
////当前tocken
this.setTocken    = function (c){this.data.tocken    = c ; }
////系统磁盘分配号挂接磁盘管理
this.setDisknumber    = function (c){this.data.disknumber    = c ; }
////[FILE]我的信息_系统文件ID
this.setQrcode_my    = function (c){this.data.qrcode_my    = c ; }
////[FILE]我的付款码_系统文件ID
this.setQrcode_pay    = function (c){this.data.qrcode_pay    = c ; }
////[FILE]我的收款码_系统文件ID
this.setQrcode_rec    = function (c){this.data.qrcode_rec    = c ; }
////我的信息_集成域名的链接_冗余快速检索
this.setQrcode_myurl    = function (c){this.data.qrcode_myurl    = c ; }
////我的付款码_集成域名的链接_冗余快速检索
this.setQrcode_payurl    = function (c){this.data.qrcode_payurl    = c ; }
////我的收款码_集成域名的链接_冗余快速检索后面加上/useraid可以支持APP请求信息
this.setQrcode_recurl    = function (c){this.data.qrcode_recurl    = c ; }

}


//警告 : 不要写成 {Api_ACCOUNT_A3_Request}
module.exports = Api_ACCOUNT_A3_Request;
