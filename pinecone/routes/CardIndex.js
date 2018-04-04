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
const express = require('express');
const router = express.Router();
const call = require('../controllers/common.js');

const ST1 = require('../controllers/pineconecredit/reqs/Api_CARD_MARKET_TYPE_A2_Request.js');
const ST2 = require('../controllers/pineconecredit/reqs/Api_CARDMACKETAPPLY_A2_Request.js');
const ST3 = require('../controllers/pineconecredit/reqs/Api_CARD_TYPE_CONTRACT_A2_Request.js');
const ST4 = require('../controllers/pineconecredit/reqs/Api_CARD_TYPE_PERIOD_A2_Request.js');
const ST5 = require('../controllers/pineconecredit/reqs/Api_CARD_MARKET_TYPE_A5_qryCdocPdoc_Request.js');
const ST6 = require('../controllers/pineconecredit/reqs/Api_MERCHANT_SHOP_A2_Request.js');
const ST7 = require('../controllers/pineconecredit/reqs/Api_CM_BINDAPPLY_A2_Request.js');

//卡商首页
router.get('/', function (req, res) {
    res.render('Card/cardIndex');
});
//卡商登录
router.get('/sign_in', function (req, res) {
    res.render('Card/sign_in')
});
//卡商注册
router.get('/sign_up', function (req, res) {
    res.render('Card/sign_up')
});


module.exports = router;
