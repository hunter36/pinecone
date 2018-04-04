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
//商户方员工--操作员
const express = require('express');
const router = express.Router();
const call = require('../controllers/common.js');
const r = require('../controllers/pineconecredit/reqs/Api_ACCOUNT_A2_Request.js');
var config = require('../config');
const HL1 = require('../controllers/pineconecredit/reqs/Api_MERCHANT_WORKER_A2_Request.js');//查询商户下所有操作员
const HL2 = require('../controllers/pineconecredit/reqs/Api_PLAT_ROLE_A2_Request.js')//查询可创建的操作员的类型
/*操作员账户管理*/
router.get('/czy_account', function (req, res) {
    var  loginaid= req.session.user.loginaid ? req.session.user.loginaid : '';
    const shID = req.session.user.pageList[0].COMPANY_AID;
    var Api_MERCHANT_WORKER_A2_Request =new HL1();
    //Api_MERCHANT_WORKER_A2_Request.setCardstate('0');
    Api_MERCHANT_WORKER_A2_Request.setLoginaid(loginaid);
    Api_MERCHANT_WORKER_A2_Request.setMaid(shID);
    Api_MERCHANT_WORKER_A2_Request.setRender('CZYlist');
    Api_MERCHANT_WORKER_A2_Request.setCallback(Callback);
    console.log(Api_MERCHANT_WORKER_A2_Request.setRender('CZYlist'));
    var rv = [
        Api_MERCHANT_WORKER_A2_Request
    ];
    call(req, res, rv);
    function Callback (rv ,req, res, success) {
        res.render('Store/intendant/czy_account', success)
    }
});
/*操作员账户管理 添加弹窗*/
router.get('/czy_addPopup', function (req, res) {
    const shID = req.session.user.pageList[0].COMPANY_AID;
    var  loginaid= req.session.user.loginaid ? req.session.user.loginaid : '';
    var Api_PLAT_ROLE_A2_Request =new HL2();
    Api_PLAT_ROLE_A2_Request.setLoginaid(loginaid);
    Api_PLAT_ROLE_A2_Request.setAccounttype('6');
    Api_PLAT_ROLE_A2_Request.setRolelevel('2');
    Api_PLAT_ROLE_A2_Request.setRender('qxlixt');
    Api_PLAT_ROLE_A2_Request.setCallback(Callback);
    var rv = [
        Api_PLAT_ROLE_A2_Request
    ];
    call(req, res, rv);
    function Callback (rv ,req, res, success) {
        success.shId = shID;
        res.render('Store/intendant/czy_addPopup', success)
    }
});
/*操作员账户管理 查看弹窗*/
router.get('/czy_CheckPopup', function (req, res) {
    var dzid = req.query.drft;
    const shID = req.session.user.pageList[0].COMPANY_AID;
    var  loginaid= req.session.user.loginaid ? req.session.user.loginaid : '';
    var Api_MERCHANT_WORKER_A2_Request =new HL1();
    Api_MERCHANT_WORKER_A2_Request.setLoginaid(loginaid);
    Api_MERCHANT_WORKER_A2_Request.setAid(dzid);
    Api_MERCHANT_WORKER_A2_Request.setMaid(shID);
    Api_MERCHANT_WORKER_A2_Request.setRender('ygdetail');
    Api_MERCHANT_WORKER_A2_Request.setCallback(Callback);
    var rv = [
        Api_MERCHANT_WORKER_A2_Request
    ];
    call(req, res, rv);
    function Callback (rv ,req, res, success) {
        res.render('Store/intendant/czy_CheckPopup', success)
    }
});

/*门店详情路由指向判定*/
module.exports = router;
