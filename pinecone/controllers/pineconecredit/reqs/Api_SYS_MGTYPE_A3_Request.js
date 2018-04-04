/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_SYS_MGTYPE_A3_Request =function () {
    this.api= "Api_SYS_MGTYPE_A3_Request";
	base.apply(this); //base 就是  TransformData
	this.sid;//SID
	this.type;//type
	this.name;//name
	this.initialization;//初始化[依据APP原型
	this.apparel;//服饰
	this.watch;//手表
	this.hat;//帽子
	this.bag;//包包
	this.skincareproducts;//护肤品
	this.make_up;//彩妆
	this.glasses;//眼镜


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////SID
this.setSid    = function (c){this.data.sid    = c ; }
////type
this.setType    = function (c){this.data.type    = c ; }
////name
this.setName    = function (c){this.data.name    = c ; }
////初始化[依据APP原型
this.setInitialization    = function (c){this.data.initialization    = c ; }
////服饰
this.setApparel    = function (c){this.data.apparel    = c ; }
////手表
this.setWatch    = function (c){this.data.watch    = c ; }
////帽子
this.setHat    = function (c){this.data.hat    = c ; }
////包包
this.setBag    = function (c){this.data.bag    = c ; }
////护肤品
this.setSkincareproducts    = function (c){this.data.skincareproducts    = c ; }
////彩妆
this.setMake_up    = function (c){this.data.make_up    = c ; }
////眼镜
this.setGlasses    = function (c){this.data.glasses    = c ; }

}


//警告 : 不要写成 {Api_SYS_MGTYPE_A3_Request}
module.exports = Api_SYS_MGTYPE_A3_Request;
