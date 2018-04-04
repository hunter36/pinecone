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
//商户-订单中心
const express = require('express');
const router = express.Router();
const call = require('../controllers/common.js');
const r = require('../controllers/pineconecredit/reqs/Api_ACCOUNT_A2_Request.js');
var config = require('../config');
const HL1 = require('../controllers/pineconecredit/reqs/Api_CARDCONSUMEORDER_A2_Request.js')//查询订单

/*待收款订单*/
router.get('/receivables_order', function (req, res) {
    var  loginaid= req.session.user.loginaid ? req.session.user.loginaid : '';
    const shID = req.session.user.pageList[0].COMPANY_AID;
    var Api_CARDCONSUMEORDER_A2_Request = new HL1();
    Api_CARDCONSUMEORDER_A2_Request.setLoginaid(loginaid);
    Api_CARDCONSUMEORDER_A2_Request.setMid(shID);
    Api_CARDCONSUMEORDER_A2_Request.setRender('orderWait');
    Api_CARDCONSUMEORDER_A2_Request.setSqlcondition("orderstate in ('2','5')");
    Api_CARDCONSUMEORDER_A2_Request.setCallback(Callback);
    var rv = [
        Api_CARDCONSUMEORDER_A2_Request
    ];
    call(req, res, rv);
    function Callback (rv ,req, res, success) {
        const parameter = require('../yz_modules/parameter');
        parameter.getParameterName(["cardconsumeorder.orderstate"],function (val) {
            for (var i=0;i<success.orderWait.pageList.length;i++) {
                success.orderWait.pageList[i].orderstate=val['cardconsumeorder.orderstate'][success.orderWait.pageList[i].orderstate];
            }
            res.render('Store/intendant/receivables_order',success)
        })
    }
});
/*待收款订单详情*/
router.get('/orderDetail', function (req, res) {
    const mdId = req.query.mdid;
    var  loginaid= req.session.user.loginaid ? req.session.user.loginaid : '';
    const shID = req.session.user.pageList[0].COMPANY_AID;
    var Api_CARDCONSUMEORDER_A2_Request = new HL1();
    Api_CARDCONSUMEORDER_A2_Request.setLoginaid(loginaid);
    Api_CARDCONSUMEORDER_A2_Request.setMid(shID);
    Api_CARDCONSUMEORDER_A2_Request.setSid(mdId);
    Api_CARDCONSUMEORDER_A2_Request.setRender('orderDerail');
    Api_CARDCONSUMEORDER_A2_Request.setCallback(Callback);
    var rv = [
        Api_CARDCONSUMEORDER_A2_Request
    ];
    call(req, res, rv);
    function Callback (rv ,req, res, success) {
        res.render('Store/intendant/orderDetail',success)
    }
});
/*待收款订单详情*/
router.get('/re_detail', function (req, res) {
    res.render('Store/intendant/re_detail')
});
/*已完成订单*/
router.get('/complete_order', function (req, res) {
    var  loginaid= req.session.user.loginaid ? req.session.user.loginaid : '';
    const shID = req.session.user.pageList[0].COMPANY_AID;
    var Api_CARDCONSUMEORDER_A2_Request = new HL1();
    Api_CARDCONSUMEORDER_A2_Request.setLoginaid(loginaid);
    Api_CARDCONSUMEORDER_A2_Request.setMid(shID);
    Api_CARDCONSUMEORDER_A2_Request.setRender('orderWait');
    Api_CARDCONSUMEORDER_A2_Request.setSqlcondition("orderstate in ('4')");
    Api_CARDCONSUMEORDER_A2_Request.setCallback(Callback);
    var rv = [
        Api_CARDCONSUMEORDER_A2_Request
    ];
    call(req, res, rv);
    function Callback (rv ,req, res, success) {
        res.render('Store/intendant/complete_order',success)
    }
});
/*已完成订单详情*/
router.get('/co_detail', function (req, res) {
    res.render('Store/intendant/co_detail')
});
/*退款中订单*/
router.get('/tkz_order', function (req, res) {
    var  loginaid= req.session.user.loginaid ? req.session.user.loginaid : '';
    const shID = req.session.user.pageList[0].COMPANY_AID;
    var Api_CARDCONSUMEORDER_A2_Request = new HL1();
    Api_CARDCONSUMEORDER_A2_Request.setLoginaid(loginaid);
    Api_CARDCONSUMEORDER_A2_Request.setMid(shID);
    Api_CARDCONSUMEORDER_A2_Request.setRender('orderWait');
    Api_CARDCONSUMEORDER_A2_Request.setSqlcondition("orderstate in ('7')");
    Api_CARDCONSUMEORDER_A2_Request.setCallback(Callback);
    var rv = [
        Api_CARDCONSUMEORDER_A2_Request
    ];
    call(req, res, rv);
    function Callback (rv ,req, res, success) {
        res.render('Store/intendant/tkz_order',success)
    }
});
/*退款中订单详情*/
router.get('/tkz_detail', function (req, res) {
    res.render('Store/intendant/tkz_detail')
});
/*已退款订单*/
router.get('/ytk_order', function (req, res) {
    var  loginaid= req.session.user.loginaid ? req.session.user.loginaid : '';
    const shID = req.session.user.pageList[0].COMPANY_AID;
    var Api_CARDCONSUMEORDER_A2_Request = new HL1();
    Api_CARDCONSUMEORDER_A2_Request.setLoginaid(loginaid);
    Api_CARDCONSUMEORDER_A2_Request.setMid(shID);
    Api_CARDCONSUMEORDER_A2_Request.setRender('orderWait');
    Api_CARDCONSUMEORDER_A2_Request.setSqlcondition("orderstate in ('6','8')");
    Api_CARDCONSUMEORDER_A2_Request.setCallback(Callback);
    var rv = [
        Api_CARDCONSUMEORDER_A2_Request
    ];
    call(req, res, rv);
    function Callback (rv ,req, res, success) {
        res.render('Store/intendant/ytk_order',success)
    }
});
/*已退款订单详情*/
router.get('/ytk_detail', function (req, res) {
    res.render('Store/intendant/ytk_detail')
});
/*门店详情路由指向判定*/
module.exports = router;
