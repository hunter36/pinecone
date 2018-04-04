/**
 * Created by lqf on 17-12-21.
 * 业务数据请求对象
 */
const base = require('../TransformData.js');

var Api_CALLONPEOPLE_A1_Request =function () {
    this.api= "Api_CALLONPEOPLE_A1_Request";
	base.apply(this); //base 就是  TransformData
	this.wview;//视图关联到运营员工
	this.sid;//SID


	this.prototype = base.prototype; //base 就是  TransformData       // Set prototype to TransformData's
	this.prototype.constructor = this;   // Set constructor back to Api_ACCOUNT_A2_Request

////视图关联到运营员工
this.setWview    = function (c){this.data.wview    = c ; }
////SID
this.setSid    = function (c){this.data.sid    = c ; }

}


//警告 : 不要写成 {Api_CALLONPEOPLE_A1_Request}
module.exports = Api_CALLONPEOPLE_A1_Request;
