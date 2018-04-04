/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_CITY_A5_appqrycity_Request =function () {
    this.api= "Api_CITY_A5_appqrycity_Request";
	base.apply(this); //base 就是  TransformData
	this.dm;//dm V 50
	this.mc;//mc V 50
	this.szm;//首字母-无字典对应


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////dm V 50
this.setDm    = function (c){this.data.dm    = c ; }
////mc V 50
this.setMc    = function (c){this.data.mc    = c ; }
////首字母-无字典对应
this.setSzm    = function (c){this.data.szm    = c ; }

}


//警告 : 不要写成 {Api_CITY_A5_appqrycity_Request}
module.exports = Api_CITY_A5_appqrycity_Request;
