/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_CUSER_A5_fillEmContacts_Request =function () {
    this.api= "Api_CUSER_A5_fillEmContacts_Request";
	base.apply(this); //base 就是  TransformData
	this.aid;//帐号
	this.emcontact1;//紧急联系人1
	this.emcontact1phone;//紧急联系人1电话
	this.emcontact1type;//紧急联系人1关系


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////帐号
this.setAid    = function (c){this.data.aid    = c ; }
////紧急联系人1
this.setEmcontact1    = function (c){this.data.emcontact1    = c ; }
////紧急联系人1电话
this.setEmcontact1phone    = function (c){this.data.emcontact1phone    = c ; }
////紧急联系人1关系
this.setEmcontact1type    = function (c){this.data.emcontact1type    = c ; }

}


//警告 : 不要写成 {Api_CUSER_A5_fillEmContacts_Request}
module.exports = Api_CUSER_A5_fillEmContacts_Request;
