/**
 * Created by lqf on 17-12-21.
 */

var TransformData= function ()  {
    var parent = this;

    this.data = {
        apiId : parent.api,
        page_info : {},
        regphonenumber : '',// 登陆手机号
        loginaid : '',  //20180118 登陆成功后,填写账户id
        appid : 'pcweb',//区分那个系统的调用
        tocken : '',
        pictype : "big_pic",// big_pic : 默认原图
        sign:'' // json data 做 Md5签名
    }
    this.field =[
        {key : 'requestjson' ,        value : parent.data}
        ////, {key : 'f2' ,        value : 'v2'}
    ]


    this.setCur_page    = function (c){this.data.page_info.cur_page    = c ; }
    this.setPage_size   = function (c){this.data.page_info.page_size   = c ; }
    this.setTotal_items = function (c){this.data.page_info.total_items = c ; }
    this.setTotal_pages = function (c){this.data.page_info.total_pages = c ; }
    this.setRegphonenumber 		 = function (c){this.data.regphonenumber= c ; } // 登陆手机号
    this.setLoginaid 			 = function (c){this.data.loginaid 		= c ; }
    this.setAppid 			 = function (c){this.data.appid 	= c ; } //区分那个系统的调用
    this.setTocken 			 = function (c){this.data.tocken 	= c ; }
    this.setPictype			 = function (c){this.data.pictype	= c ; } // big_pic : 默认原图
    this.setSign			 = function (c){this.data.sign		= c ; } // json data 做 Md5签名

    this.render;
    this.setRender = function (c) {this.render =c ;}

    this.callback;
    this.setCallback = function (c) {this.callback =c ;}

}


//警告,不要写为 {TransformData};
module.exports = TransformData;
