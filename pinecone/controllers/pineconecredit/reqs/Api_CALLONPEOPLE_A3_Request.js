/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_CALLONPEOPLE_A3_Request =function () {
    this.api= "Api_CALLONPEOPLE_A3_Request";
	base.apply(this); //base 就是  TransformData
	this.sid;//SID
	this.wview;//视图关联到运营员工


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////SID
this.setSid    = function (c){this.data.sid    = c ; }
////视图关联到运营员工
this.setWview    = function (c){this.data.wview    = c ; }

}


//警告 : 不要写成 {Api_CALLONPEOPLE_A3_Request}
module.exports = Api_CALLONPEOPLE_A3_Request;
