/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_PLAT_MENU_A5_qryMenuTree_Request =function () {
    this.api= "Api_PLAT_MENU_A5_qryMenuTree_Request";
	base.apply(this); //base 就是  TransformData
	this.actmod;//归属


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////归属
this.setActmod    = function (c){this.data.actmod    = c ; }

}


//警告 : 不要写成 {Api_PLAT_MENU_A5_qryMenuTree_Request}
module.exports = Api_PLAT_MENU_A5_qryMenuTree_Request;
