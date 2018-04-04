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

//-------------------------账单中心---------------------
//-------账单中心-->未到期账单管理---------------
router.get('/bill_wdq', function (req, res) {
    res.render('Card/intendant/bill_wdq');
});
//-------账单中心-->未到期账单管理-->详情---------------
router.get('/bill_wdq_detail', function (req, res) {
    res.render('Card/intendant/bill_wdq_detail');
});

//-------账单中心-->已到期账单管理---------------
router.get('/bill_ydq', function (req, res) {
    res.render('Card/intendant/bill_ydq');
});
//-------账单中心-->已到期账单管理-->详情---------------
router.get('/bill_ydq_detail', function (req, res) {
    res.render('Card/intendant/bill_ydq_detail');
});

//-------账单中心-->已逾期账单管理---------------
router.get('/bill_yyq', function (req, res) {
    res.render('Card/intendant/bill_yyq');
});
//-------账单中心-->已逾期账单管理-->详情---------------
router.get('/bill_yyq_detail', function (req, res) {
    res.render('Card/intendant/bill_yyq_detail');
});

//-------账单中心-->已还款账单管理---------------
router.get('/bill_yhk', function (req, res) {
    res.render('Card/intendant/bill_yhk');
});
//-------账单中心-->已还款账单管理-->详情---------------
router.get('/bill_yhk_detail', function (req, res) {
    res.render('Card/intendant/bill_yhk_detail');
});

module.exports = router;