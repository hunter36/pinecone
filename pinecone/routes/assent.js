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




//--------资金账户管理-----------
router.get('/asset_account', function (req, res) {
    res.render('Card/intendant/asset_account');
});
//--------资金账户管理-->弹窗-----------
router.get('/asset_acc_popup', function (req, res) {
    res.render('Card/intendant/asset_acc_popup');
});


module.exports = router;