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
var request = require('superagent');
const call = require('../controllers/common.js');
const ST1 = require('../controllers/pineconecredit/reqs/Api_PLAT_ROLE_A2_Request.js')
const ST2 = require('../controllers/pineconecredit/reqs/Api_CARD_MERCHANT_WORKER_A2_Request.js')
const ST3= require('../controllers/pineconecredit/reqs/Api_CARD_MERCHANT_WORKER_A3_Request.js')






//-------------------------操作员中心---------------------
router.get('/operator_center', function (req, res) {
    const ptype = req.query.ptype ? req.query.ptype : '';
    const name = req.query.name ? req.query.name : '';
    const regphonenumber = req.query.regphonenumber ? req.query.regphonenumber : '';
    const loginaid = req.session.user ? req.session.user.loginaid : '';
    const Api_CARD_MARKET_TYPE_A2_Request =new ST2();
    Api_CARD_MARKET_TYPE_A2_Request.setMeraid(loginaid);
    Api_CARD_MARKET_TYPE_A2_Request.setLoginaid(loginaid);
    Api_CARD_MARKET_TYPE_A2_Request.setRender('workerList');
    Api_CARD_MARKET_TYPE_A2_Request.setCallback(Callback);
    Api_CARD_MARKET_TYPE_A2_Request.setPtype(ptype);
    Api_CARD_MARKET_TYPE_A2_Request.setName(name);
    Api_CARD_MARKET_TYPE_A2_Request.setRegphonenumber(regphonenumber);



    const Api_PLAT_ROLE_A2_Request = new ST1();
    Api_PLAT_ROLE_A2_Request.setAccounttype(4);
    Api_PLAT_ROLE_A2_Request.setRolelevel(2);
    Api_PLAT_ROLE_A2_Request.setRender('addList');
    Api_PLAT_ROLE_A2_Request.setLoginaid(loginaid);
    const rv = [
        Api_CARD_MARKET_TYPE_A2_Request,
        Api_PLAT_ROLE_A2_Request
    ];
    call(req, res, rv);
    function Callback (rv ,req, res, success) {
        const parameter = require('../yz_modules/parameter');
        parameter.getParameterName(["account.state"],function (val) {
            for (let i=0;i<success.workerList.pageList.length;i++) {
                success.workerList.pageList[i].statename=val['account.state'][success.workerList.pageList[i].account.state];
            }
            res.render('Card/intendant/operator_center',Object.assign(success, {ptype : ptype, name : name, regphonenumber : regphonenumber}))
        })
    }
});




//-------------------------操作员中心-->添加操作员---------------------
router.get('/operator_c_add', function (req, res) {
    let loginaid = req.session.user ? req.session.user.loginaid : '';
    const Api_PLAT_ROLE_A2_Request = new ST1();

    Api_PLAT_ROLE_A2_Request.setAccounttype(4);
    Api_PLAT_ROLE_A2_Request.setRolelevel(2);
    Api_PLAT_ROLE_A2_Request.setRender('addList');
    Api_PLAT_ROLE_A2_Request.setLoginaid(loginaid);
    Api_PLAT_ROLE_A2_Request.setCallback(Callback);

    let rv = [
        Api_PLAT_ROLE_A2_Request
    ];
    call(req, res, rv);
    function Callback (rv ,req, res, success) {
        res.render('Card/intendant/operator_c_add', success)
    }
});

//-------------------------操作员中心-->操作员详情---------------------
router.get('/operator_c_detail', function (req, res) {
    const loginaid = req.session.user ? req.session.user.loginaid : '';
    const sid = req.query.sid;
    const aid = req.query.aid;
    const Api_CARD_MARKET_TYPE_A2_Request =new ST2();
    Api_CARD_MARKET_TYPE_A2_Request.setMeraid(loginaid);
    Api_CARD_MARKET_TYPE_A2_Request.setLoginaid(loginaid);
    Api_CARD_MARKET_TYPE_A2_Request.setRender('workerList');
    Api_CARD_MARKET_TYPE_A2_Request.setCallback(Callback);
    Api_CARD_MARKET_TYPE_A2_Request.setSid(sid);
    Api_CARD_MARKET_TYPE_A2_Request.setAid(aid);
    const rv = [
        Api_CARD_MARKET_TYPE_A2_Request,
    ];
    call(req, res, rv);
    function Callback (rv ,req, res, success) {
        res.render('Card/intendant/operator_c_detail',success)
    }
});
//-------------------------操作员中心-->操作员详情-->修改信息---------------------
router.get('/operator_edit_info', function (req, res) {
    const loginaid = req.session.user ? req.session.user.loginaid : '';
    const sid = req.query.sid;
    const aid = req.query.aid;
    const Api_CARD_MARKET_TYPE_A2_Request =new ST2();
    Api_CARD_MARKET_TYPE_A2_Request.setMeraid(loginaid);
    Api_CARD_MARKET_TYPE_A2_Request.setLoginaid(loginaid);
    Api_CARD_MARKET_TYPE_A2_Request.setRender('workerList');
    Api_CARD_MARKET_TYPE_A2_Request.setCallback(Callback);
    Api_CARD_MARKET_TYPE_A2_Request.setSid(sid);
    Api_CARD_MARKET_TYPE_A2_Request.setAid(aid);
    const Api_PLAT_ROLE_A2_Request = new ST1();

    Api_PLAT_ROLE_A2_Request.setAccounttype(4);
    Api_PLAT_ROLE_A2_Request.setRolelevel(2);
    Api_PLAT_ROLE_A2_Request.setRender('addList');
    Api_PLAT_ROLE_A2_Request.setLoginaid(loginaid);
    const rv = [
        Api_CARD_MARKET_TYPE_A2_Request,
        Api_PLAT_ROLE_A2_Request
    ];
    call(req, res, rv);
    function Callback (rv ,req, res, success) {
        res.render('Card/intendant/operator_edit_info',success)
    }
});
//-------------------------操作员中心-->操作员详情-->修改密码-------------------
router.get('/operator_edit_pwd', function (req, res) {
    const loginaid = req.session.user ? req.session.user.loginaid : '';
    const sid = req.query.sid;
    const aid = req.query.aid;
    const Api_CARD_MARKET_TYPE_A2_Request =new ST2();
    Api_CARD_MARKET_TYPE_A2_Request.setMeraid(loginaid);
    Api_CARD_MARKET_TYPE_A2_Request.setLoginaid(loginaid);
    Api_CARD_MARKET_TYPE_A2_Request.setRender('workerList');
    Api_CARD_MARKET_TYPE_A2_Request.setCallback(Callback);
    Api_CARD_MARKET_TYPE_A2_Request.setSid(sid);
    Api_CARD_MARKET_TYPE_A2_Request.setAid(aid);
    const Api_PLAT_ROLE_A2_Request = new ST1();

    Api_PLAT_ROLE_A2_Request.setAccounttype(4);
    Api_PLAT_ROLE_A2_Request.setRolelevel(2);
    Api_PLAT_ROLE_A2_Request.setRender('addList');
    Api_PLAT_ROLE_A2_Request.setLoginaid(loginaid);
    const rv = [
        Api_CARD_MARKET_TYPE_A2_Request,
        Api_PLAT_ROLE_A2_Request
    ];
    call(req, res, rv);
    function Callback (rv ,req, res, success) {
        res.render('Card/intendant/operator_edit_pwd',success)
    }
});
//-------------------------操作员中心-->日志-------------------
router.get('/operator_log', function (req, res) {
    res.render('Card/intendant/operator_log');
});
//卡商修改员工资料
router.post('/changecworker', function (req, res) {
    const Loginaid = req.session.user.loginaid;
    const name = req.body.name;
    const idnumber = req.body.idnumber;
    const regphonenumber = req.body.regphonenumber;
    const ptype = req.body.ptype;
    const rname = req.body.rname;
    const password = req.body.password;
    const sid = req.body.sid;
    const apiobj = new ST3();
    apiobj.setCallback(callback);
    apiobj.setMeraid(Loginaid);
    apiobj.setLoginaid(Loginaid);
    apiobj.setName(name);
    apiobj.setIdnumber(idnumber);
    apiobj.setRegphonenumber(regphonenumber);
    apiobj.setPtype(ptype);
    apiobj.setRname(rname);
    apiobj.setRids(ptype);
    apiobj.setPassword(password);
    apiobj.setSid(sid);


    const rv = [
        apiobj
    ];
    call(req, res, rv);
    function callback (rv ,req, res,  data) {
        res.send(data[0])
    }
});



module.exports = router;