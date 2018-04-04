/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_ORDERDETAILS_A3_Request =function () {
    this.api= "Api_ORDERDETAILS_A3_Request";
	base.apply(this); //base 就是  TransformData
	this.sid;//SID
	this.ordernumber;//订单号
	this.productid;//商品ID
	this.price;//价格
	this.producttypes;//商品类型


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////SID
this.setSid    = function (c){this.data.sid    = c ; }
////订单号
this.setOrdernumber    = function (c){this.data.ordernumber    = c ; }
////商品ID
this.setProductid    = function (c){this.data.productid    = c ; }
////价格
this.setPrice    = function (c){this.data.price    = c ; }
////商品类型
this.setProducttypes    = function (c){this.data.producttypes    = c ; }

}


//警告 : 不要写成 {Api_ORDERDETAILS_A3_Request}
module.exports = Api_ORDERDETAILS_A3_Request;
