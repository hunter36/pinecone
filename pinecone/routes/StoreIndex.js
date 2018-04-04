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
const r = require('../controllers/pineconecredit/reqs/Api_ACCOUNT_A2_Request.js');
const HL1 = require('../controllers/pineconecredit/reqs/Api_MSGINBOX_A2_Request.js');//查询消息
router.get('/', function (req, res) {
    res.render('Store/store_index');
})
router.get('/sign_up', function (req, res) {
    res.render('Store/sign_up')
})
router.get('/sign_in', function (req, res) {
    res.render('Store/sign_in')
})
/*修改绑定手机*/
router.get('store/storeBindPh', function (req, res) {
    res.render('Store/storeBindPh');
});
/*修改绑定密码*/
router.get('/storeBindPwd', function (req, res) {
    res.render('Store/storeBindPwd');
});
/*消息中心*/
router.get('/Storemessage', function (req, res) {
    var Api_MSGINBOX_A2_Request  = new HL1();//未读消息
    var Api_MSGINBOX_A2_Request_wd  = new HL1();//已读消息
    var  loginaid= req.session.user.loginaid ? req.session.user.loginaid : '';
    Api_MSGINBOX_A2_Request.setLoginaid(loginaid);
    Api_MSGINBOX_A2_Request.setSid(loginaid);
    Api_MSGINBOX_A2_Request.setState('0');
    Api_MSGINBOX_A2_Request.setRender('ydlist');
    Api_MSGINBOX_A2_Request.setCallback(Callback);

    Api_MSGINBOX_A2_Request_wd.setLoginaid(loginaid);
    Api_MSGINBOX_A2_Request_wd.setSid(loginaid);
    Api_MSGINBOX_A2_Request_wd.setState('0');
    Api_MSGINBOX_A2_Request_wd.setRender('wdlist');
    Api_MSGINBOX_A2_Request_wd.setCallback(Callback);
    var rv = [
        Api_MSGINBOX_A2_Request_wd,Api_MSGINBOX_A2_Request
    ];
    call(req, res, rv);
    function Callback (rv ,req, res, success) {
        res.render('Store/intendant/message',success)
    }
});
//修改绑定手机--未登录
router.get('/resetpassword', function (req, res) {
    res.render('Store/resetpassword')
})
/*门店详情路由指向判定*/
module.exports = router;
