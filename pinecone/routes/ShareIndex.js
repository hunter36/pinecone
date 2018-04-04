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
const ST1 = require('../controllers/pineconecredit/reqs/Api_ACCOUNT_VERCODE_A2_Request.js')
const svgCaptcha = require('svg-captcha');


router.post('/verify', function (req,res) {
    const verifyText = req.body.data;
    if(verifyText === captchaText) {
        res.send({resdata : '1'})
    } else {
        res.send({resdata : '2'})
    }
});
router.get('/', function (req, res) {
    const renderData = {avc : '123123123123123'}
    res.render('index', renderData)
});
router.get('/message', function (req, res) {
    const user = req.session.user
    res.render('include/message')
});
let captchaText
router.get('/captcha', function (req, res) {
    const captcha = svgCaptcha.createMathExpr({
        height : 42,
        width : 122,
        background : '#191970',
        noise : 3,
    });
    res.setHeader('Content-Type', 'image/svg+xml');
    res.write(captcha.data);
    captchaText = captcha.text;
    res.end();
});

router.get('/bindPhone', function (req, res) {
    res.render('include/bindPhone')
});
router.get('/bindPassword', function (req, res) {
    const setRegphonenumber = req.body.phonenum
    const setPassword = req.body.phonenum
    const setSid = req.body.phonenum
    const Api_ACCOUNT_VERCODE_A2_Request =new ST1();
    Api_ACCOUNT_VERCODE_A2_Request.setRegphonenumber(setRegphonenumber);
    Api_ACCOUNT_VERCODE_A2_Request.setPassword(setPassword);
    Api_ACCOUNT_VERCODE_A2_Request.setSid(setSid);
    Api_ACCOUNT_VERCODE_A2_Request.setAccounttype('3');
    Api_ACCOUNT_VERCODE_A2_Request.setRender('bindPassword');
    const rv = [
        Api_ACCOUNT_VERCODE_A2_Request
    ];
    call('/include/bindPassword', req, res, rv);

});
router.get('/bindPassword', function (req, res) {
    res.render('include/bindPassword')
});



module.exports = router;