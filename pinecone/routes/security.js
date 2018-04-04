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









// ------------------安全中心------------------
router.get('/security_center', function (req, res) {
    res.render('Card/intendant/security_center');
});
//--------安全中心-->修改绑定手机-----------
router.get('/cardBindPh', function (req, res) {
    res.render('Card/cardBindPh');
});
//--------安全中心-->修改登录密码-----------
router.get('/cardBindPwd', function (req, res) {
    res.render('Card/cardBindPwd');
});


module.exports = router;