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
//商户-账户中心
const express = require('express');
const router = express.Router();
const call = require('../controllers/common.js');
const r = require('../controllers/pineconecredit/reqs/Api_ACCOUNT_A2_Request.js');
var config = require('../config');
const HL2 = require('../controllers/pineconecredit/reqs/Api_FUNDINGACCOUNT_A2_Request.js');//资金账户查询

/*资金账户管理*/
router.get('/zj_account', function (req, res) {
    var  loginaid= req.session.user.loginaid ? req.session.user.loginaid : '';
    var Api_FUNDINGACCOUNT_A2_Request =new HL2();
    const shID = req.session.user.pageList[0].COMPANY_AID;
    Api_FUNDINGACCOUNT_A2_Request.setAid(shID);
    Api_FUNDINGACCOUNT_A2_Request.setLoginaid(loginaid);
    Api_FUNDINGACCOUNT_A2_Request.setRender('zjList');
    Api_FUNDINGACCOUNT_A2_Request.setCallback(Callback);
    var rv = [
        Api_FUNDINGACCOUNT_A2_Request
    ];
    call(req, res, rv);
    function Callback (rv ,req, res, success) {
        res.render('Store/intendant/zj_account', success)
    }
});
/*门店详情路由指向判定*/
module.exports = router;
