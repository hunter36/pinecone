import ApiClient from '../ApiClient';
import {
    PIC_NEWS,
    PIC_ORGAN,
    PIC_DAILYSTAR,
    PIC_AD,
    FILE_USER,
    isNil,
    getFilePath,
    formatRequestParams,
    setDefaults,
    checkRetcode,
    NEWSTYPE_TEXT,
    NEWSTYPE_PIC,
    NEWSTYPE_VIDEO,
    isObjectEmpty,
    deleteTmpFile,
} from '../helper';
//商户-我的店铺
const express = require('express');
const router = express.Router();
const call = require('../controllers/common.js');
const r = require('../controllers/pineconecredit/reqs/Api_ACCOUNT_A2_Request.js');
var config = require('../config');
const HL1 = require('../controllers/pineconecredit/reqs/Api_MERCHANT_WORKER_A2_Request.js');//查询商户下所有操作员
const HL4 = require('../controllers/pineconecredit/reqs/Api_MERCHANT_SHOP_A2_Request.js')//查询门店
const HL7 = require('../controllers/pineconecredit/reqs/Api_SYS_E_SHOPSTYLE_A2_Request.js')//查询电商标签
const HL8 = require('../controllers/pineconecredit/reqs/Api_SYS_SHOPSTYLE_A2_Request.js')//查询电商标签
const HL9 = require('../controllers/pineconecredit/reqs/Api_ACCOUNT_A2_Request.js')//账户查询----用作提取门店二维码
const HL2 = require('../controllers/pineconecredit/reqs/Api_SYS_SHOPSTYLE_A2_Request.js')//查询门店标签对应名称

/*我的店铺--线下门店*/
router.get('/myshop', function (req, res) {
    var  loginaid= req.session.user.loginaid ? req.session.user.loginaid : '';
    const shID = req.session.user.pageList[0].COMPANY_AID;
    var Api_MERCHANT_SHOP_A2_Request =new HL4();
    Api_MERCHANT_SHOP_A2_Request.setEtypeid('0');
    Api_MERCHANT_SHOP_A2_Request.setLoginaid(loginaid);
    Api_MERCHANT_SHOP_A2_Request.setMaid(shID);
    Api_MERCHANT_SHOP_A2_Request.setSqlcondition("appstate in ('0', '1')");
    Api_MERCHANT_SHOP_A2_Request.setRender('Mdlist');
    Api_MERCHANT_SHOP_A2_Request.setCallback(Callback);
    var rv = [
        Api_MERCHANT_SHOP_A2_Request
    ];
    call(req, res, rv);
    function Callback (rv ,req, res, success) {
        //success.userType = usertype;
        const parameter = require('../yz_modules/parameter');
        parameter.getParameterName(["merchant_shop.appstate"],function (val) {
            for (var i=0;i<success.Mdlist.pageList.length;i++) {
                success.Mdlist.pageList[i].appstatename=val['merchant_shop.appstate'][success.Mdlist.pageList[i].appstate];
            }
            const authrole = require('../yz_modules/authrole');
            var prebuttons={'202010100':'<a class=\"tabtn orange add\" href=\"/store/tenant/publishMd\"><i class=\"addcz\"></i>发布门店</a>',
                '202010200':'<div class="tabtn danger kfz"><i class="remove"></i>删除</div>',
                '202010300':'<a class="tabtn" href="/store/tenant/myshopCg"><i class="cgx"></i>草稿箱</a>'
            };
            var buttons=authrole.buildAuthButton(prebuttons,JSON.parse(req.session.user.pageList[0].prijson));
            success["buttons"]=buttons;
            res.render('Store/intendant/myshop',success)
        })
    }
});
/*我的店铺--线下门店---草稿箱*/
router.get('/myshopCg', function (req, res) {
    var  loginaid= req.session.user.loginaid ? req.session.user.loginaid : '';
    const shID = req.session.user.pageList[0].COMPANY_AID;
    var Api_MERCHANT_SHOP_A2_Request =new HL4();
    Api_MERCHANT_SHOP_A2_Request.setLoginaid(loginaid);
    Api_MERCHANT_SHOP_A2_Request.setMaid(shID);
    Api_MERCHANT_SHOP_A2_Request.setEtypeid('0');
    Api_MERCHANT_SHOP_A2_Request.setRender('Mdlist');
    Api_MERCHANT_SHOP_A2_Request.setCallback(Callback);
    Api_MERCHANT_SHOP_A2_Request.setSqlcondition("appstate in ('2', '3')");
    var rv = [
        Api_MERCHANT_SHOP_A2_Request
    ];
    call(req, res, rv);

    function Callback (rv ,req, res, success) {
        const parameter = require('../yz_modules/parameter');
        parameter.getParameterName(["merchant_shop.appstate"],function (val) {
            for (var i=0;i<success.Mdlist.pageList.length;i++) {
                success.Mdlist.pageList[i].appstatename=val['merchant_shop.appstate'][success.Mdlist.pageList[i].appstate];
            }
            res.render('Store/intendant/myshopCg',success)
        })
    }
});
/*我的店铺--发布线下门店*/
router.get('/publishMd', function (req, res) {
    var  loginaid= req.session.user.loginaid ? req.session.user.loginaid : '';
    var Api_MERCHANT_WORKER_A2_Request =new HL1();
    const shID = req.session.user.pageList[0].COMPANY_AID;
    Api_MERCHANT_WORKER_A2_Request.setMaid(shID);
    Api_MERCHANT_WORKER_A2_Request.setLoginaid(loginaid);
    Api_MERCHANT_WORKER_A2_Request.setRender('CZYlist');
    Api_MERCHANT_WORKER_A2_Request.setCallback(Callback);

    var Api_SYS_SHOPSTYLE_A2_Request =new HL8();
    Api_SYS_SHOPSTYLE_A2_Request.setLoginaid(loginaid);
    Api_SYS_SHOPSTYLE_A2_Request.setRender('MdType');
    Api_SYS_SHOPSTYLE_A2_Request.setCallback(Callback);
    var rv = [
        Api_MERCHANT_WORKER_A2_Request,Api_SYS_SHOPSTYLE_A2_Request
    ];
    call(req, res, rv);
    function Callback (rv ,req, res, success) {
        if (success.CZYlist.status.resultcode=='0'){
            var renderData = {
                list: success.CZYlist.pageList,
                sid:req.query.sid
            };
            if(typeof(req.query.meg)!='undefined'&&req.query.meg=='1'){
                success.meg="提交成功!";
            }else if(typeof(req.query.meg)!='undefined'&&req.query.meg=='2'){
                success.meg="提交失败!";
            }
            res.render('Store/intendant/publishMd',success)
        }
        //res.render('Store/intendant/publishMd', success)
    }
});
/*我的店铺--电商平台*/
router.get('/onlineShop', function (req, res) {
    var  loginaid= req.session.user.loginaid ? req.session.user.loginaid : '';
    const shID = req.session.user.pageList[0].COMPANY_AID;
    var Api_MERCHANT_E_SHOP_A2_Request =new HL4();
    Api_MERCHANT_E_SHOP_A2_Request.setLoginaid(loginaid);
    Api_MERCHANT_E_SHOP_A2_Request.setMaid(shID);
    Api_MERCHANT_E_SHOP_A2_Request.setEtypeid('1');
    Api_MERCHANT_E_SHOP_A2_Request.setSqlcondition("appstate in ('0', '1')");
    Api_MERCHANT_E_SHOP_A2_Request.setRender('DSlist');
    Api_MERCHANT_E_SHOP_A2_Request.setCallback(Callback);
    var rv = [
        Api_MERCHANT_E_SHOP_A2_Request
    ];
    call(req, res, rv);
    function Callback (rv ,req, res, success) {
        const parameter = require('../yz_modules/parameter');
        parameter.getParameterName(["merchant_e_shop.appstate"],function (val) {
            for (var i=0;i<success.DSlist.pageList.length;i++) {
                success.DSlist.pageList[i].appstatename=val['merchant_e_shop.appstate'][success.DSlist.pageList[i].appstate];
            }
            res.render('Store/intendant/onlineShop',success)
        })
        //res.render('Store/intendant/onlineShop', success)
    }
});
/*我的店铺--电商平台---草稿箱*/
router.get('/onlineShopCg', function (req, res) {
    var  loginaid= req.session.user.loginaid ? req.session.user.loginaid : '';
    const shID = req.session.user.pageList[0].COMPANY_AID;
    var Api_MERCHANT_E_SHOP_A2_Request =new HL4();
    Api_MERCHANT_E_SHOP_A2_Request.setLoginaid(loginaid);
    Api_MERCHANT_E_SHOP_A2_Request.setMaid(shID);
    Api_MERCHANT_E_SHOP_A2_Request.setEtypeid('1');
    Api_MERCHANT_E_SHOP_A2_Request.setSqlcondition("appstate in ('2', '3')");
    Api_MERCHANT_E_SHOP_A2_Request.setRender('DSlist');
    Api_MERCHANT_E_SHOP_A2_Request.setCallback(Callback);
    var rv = [
        Api_MERCHANT_E_SHOP_A2_Request
    ];
    call(req, res, rv);
    function Callback (rv ,req, res, success) {
        const parameter = require('../yz_modules/parameter');
        parameter.getParameterName(["merchant_e_shop.appstate"],function (val) {
            for (var i=0;i<success.DSlist.pageList.length;i++) {
                success.DSlist.pageList[i].appstatename=val['merchant_e_shop.appstate'][success.DSlist.pageList[i].appstate];
            }
            res.render('Store/intendant/onlineShopCg',success)
        })
        //res.render('Store/intendant/onlineShop', success)
    }
});
/*我的店铺--发布电商平台*/
router.get('/publishDs', function (req, res) {
    var  loginaid= req.session.user.loginaid ? req.session.user.loginaid : '';
    var Api_SYS_E_SHOPSTYLE_A2_Request =new HL7();
    //Api_MERCHANT_WORKER_A2_Request.setCardstate('0');
    Api_SYS_E_SHOPSTYLE_A2_Request.setLoginaid(loginaid);
    Api_SYS_E_SHOPSTYLE_A2_Request.setRender('DStypelist');
    Api_SYS_E_SHOPSTYLE_A2_Request.setCallback(Callback);
    var rv = [
        Api_SYS_E_SHOPSTYLE_A2_Request
    ];
    call(req, res, rv);
    function Callback (rv ,req, res, success) {
        if (success.DStypelist.status.resultcode=='0'){
            var renderData = {
                list: success.DStypelist.pageList,
                sid:req.query.sid
            };
            if(typeof(req.query.meg)!='undefined'&&req.query.meg=='1'){
                success.meg="提交成功!";
            }else if(typeof(req.query.meg)!='undefined'&&req.query.meg=='2'){
                success.meg="提交失败!";
            }
            res.render('Store/intendant/publishDs',success)
        }
        //res.render('Store/intendant/publishMd', success)
    }
});
/*查看门店详情----等待审核*/
router.get('/viewMdWait', function (req, res) {
    const mdId = req.query.mdid;
    const shzt = req.query.tyzt;
    var Api_MERCHANT_SHOP_A2_Request = new HL4();
    var  loginaid= req.session.user.loginaid ? req.session.user.loginaid : '';
    const shID = req.session.user.pageList[0].COMPANY_AID;
    Api_MERCHANT_SHOP_A2_Request.setLoginaid(loginaid);
    Api_MERCHANT_SHOP_A2_Request.setAid(mdId);
    Api_MERCHANT_SHOP_A2_Request.setMaid(shID);
    Api_MERCHANT_SHOP_A2_Request.setShopphotos('256x256');
    Api_MERCHANT_SHOP_A2_Request.setLicensephotos('256x256');
    Api_MERCHANT_SHOP_A2_Request.setRender('Mddetail');

    var Api_SYS_SHOPSTYLE_A2_Request = new HL2();
    Api_SYS_SHOPSTYLE_A2_Request.setLoginaid(loginaid);
    Api_SYS_SHOPSTYLE_A2_Request.setRender('typelist');
    Api_MERCHANT_SHOP_A2_Request.setCallback(Callback);
    Api_SYS_SHOPSTYLE_A2_Request.setCallback(Callback);
    var rv = [
        Api_MERCHANT_SHOP_A2_Request,Api_SYS_SHOPSTYLE_A2_Request
    ];
    call(req, res, rv);
    function Callback (rv ,req, res, success) {
        success.shzt = shzt;
        success.shID = shID;
        success.imgUrl = config.imgUrl;
        var shopStyArr = success.Mddetail.pageList[0].shopstyle.split(',');
        shopStyArr instanceof Array;
        for(let i=0;i<shopStyArr.length; i++) {
            for(let j=0;j<success.typelist.pageList.length; j++)
                if(shopStyArr[i] == success.typelist.pageList[j].sid) {
                    console.log(i,j);
                    shopStyArr.splice(i,1,success.typelist.pageList[j].tagname);
                }
        }
        success.shopstylename = shopStyArr.join(';');
        res.render('Store/intendant/viewMdWait',success)

    }
});
/*查看门店详情----已经审核*/
router.get('/viewMdOn', function (req, res) {
    const mdId = req.query.mdid;
    var Api_MERCHANT_SHOP_A2_Request = new HL4();
    var Api_ACCOUNT_A2_Request = new HL9();
    var  loginaid= req.session.user.loginaid ? req.session.user.loginaid : '';
    const shID = req.session.user.pageList[0].COMPANY_AID;
    Api_MERCHANT_SHOP_A2_Request.setLoginaid(loginaid);
    Api_MERCHANT_SHOP_A2_Request.setAid(mdId);
    Api_MERCHANT_SHOP_A2_Request.setMaid(shID);
    Api_MERCHANT_SHOP_A2_Request.setShopphotos('256x256');
    Api_MERCHANT_SHOP_A2_Request.setLicensephotos('256x256');
    Api_MERCHANT_SHOP_A2_Request.setRender('Mddetail');
    Api_MERCHANT_SHOP_A2_Request.setCallback(Callback);

    Api_MERCHANT_SHOP_A2_Request.setCallback(Callback);
    Api_ACCOUNT_A2_Request.setLoginaid(loginaid);
    Api_ACCOUNT_A2_Request.setAid(mdId);
    Api_ACCOUNT_A2_Request.setQrcode_rec('256x256');
    Api_ACCOUNT_A2_Request.setRender('ewm');
    Api_ACCOUNT_A2_Request.setCallback(Callback);


    var Api_SYS_SHOPSTYLE_A2_Request = new HL2();
    Api_SYS_SHOPSTYLE_A2_Request.setLoginaid(loginaid);
    Api_SYS_SHOPSTYLE_A2_Request.setRender('typelist');
    Api_SYS_SHOPSTYLE_A2_Request.setCallback(Callback);
    var rv = [
        Api_MERCHANT_SHOP_A2_Request,Api_ACCOUNT_A2_Request,Api_SYS_SHOPSTYLE_A2_Request
    ];
    call(req, res, rv);
    function Callback (rv ,req, res, success) {
        success.shID = shID;
        success.imgUrl = config.imgUrl;
        var shopStyArr = success.Mddetail.pageList[0].shopstyle.split(',');
        console.log(success.typelist);
        shopStyArr instanceof Array;
        for(let i=0;i<shopStyArr.length; i++) {
            for(let j=0;j<success.typelist.pageList.length; j++)
                if(shopStyArr[i] == success.typelist.pageList[j].sid) {
                    shopStyArr.splice(i,1,success.typelist.pageList[j].tagname);
                }
        }
        success.shopstylename = shopStyArr.join(';');
        res.render('Store/intendant/viewMdDetail',success)
    }
});
/*查看电商详情----等待审核*/
router.get('/viewDsWait', function (req, res) {
    const mdId = req.query.mdid;
    const shzt = req.query.tyzt;
    var Api_MERCHANT_SHOP_A2_Request = new HL4();
    var  loginaid= req.session.user.loginaid ? req.session.user.loginaid : '';
    const shID = req.session.user.pageList[0].COMPANY_AID;
    Api_MERCHANT_SHOP_A2_Request.setLoginaid(loginaid);
    Api_MERCHANT_SHOP_A2_Request.setAid(mdId);
    Api_MERCHANT_SHOP_A2_Request.setMaid(shID);
    Api_MERCHANT_SHOP_A2_Request.setElog('256x256');
    Api_MERCHANT_SHOP_A2_Request.setEreginfo('256x256');
    Api_MERCHANT_SHOP_A2_Request.setRender('Dsdetail');
    console.log(Api_MERCHANT_SHOP_A2_Request.setRender('Dsdetail'));
    Api_MERCHANT_SHOP_A2_Request.setCallback(Callback);


    var Api_SYS_SHOPSTYLE_A2_Request = new HL7();
    Api_SYS_SHOPSTYLE_A2_Request.setLoginaid(loginaid);
    Api_SYS_SHOPSTYLE_A2_Request.setRender('typelist');
    Api_SYS_SHOPSTYLE_A2_Request.setCallback(Callback);
    var rv = [
        Api_MERCHANT_SHOP_A2_Request,Api_SYS_SHOPSTYLE_A2_Request
    ];
    call(req, res, rv);
    function Callback (rv ,req, res, success) {
        success.shzt = shzt;
        success.shID = shID;
        success.imgUrl = config.imgUrl;
        var shopStyArr = success.Dsdetail.pageList[0].shopstyle.split(',');
        console.log(success.typelist);
        shopStyArr instanceof Array;
        for(let i=0;i<shopStyArr.length; i++) {
            for(let j=0;j<success.typelist.pageList.length; j++)
                if(shopStyArr[i] == success.typelist.pageList[j].sid) {
                    shopStyArr.splice(i,1,success.typelist.pageList[j].tagname);
                }
        }
        success.shopstylename = shopStyArr.join(';');
        res.render('Store/intendant/viewDsWait',success)
    }
});
/*门店详情路由指向判定*/
module.exports = router;
