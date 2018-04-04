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
const ST1 = require('../controllers/pineconecredit/reqs/Api_CARDCONSUMEORDER_A2_Request.js');
const ST2 = require('../controllers/pineconecredit/reqs/Api_BILLS_A2_Request.js');
const ST3 = require('../controllers/pineconecredit/reqs/Api_BILLDETAILS_A2_Request.js');
const ST4 = require('../controllers/pineconecredit/reqs/Api_CUSER_A2_Request.js');



//------------------订单中心--------------------
//--------征信授权协议-----------
router.get('/zx_agreement', function (req, res) {
    res.render('Card/intendant/zx_agreement');
});


//--------授信申请订单-->审核中订单 -----------
router.get('/credit_shz', function (req, res) {
    res.render('Card/intendant/credit_shz');
});

//--------授信申请订单-->审核中订单--> 詳情 -----------
router.get('/credit_shz_detail', function (req, res) {
    res.render('Card/intendant/credit_shz_detail');
});

//--------授信申请订单-->已通过订单 -----------
router.get('/credit_ytg', function (req, res) {
    res.render('Card/intendant/credit_ytg');
});

//--------授信申请订单-->已通过订单--> 詳情 -----------
router.get('/credit_ytg_detail', function (req, res) {
    res.render('Card/intendant/credit_ytg_detail');
});

//--------授信申请订单-->未通过订单 -----------
router.get('/credit_wtg', function (req, res) {
    res.render('Card/intendant/credit_wtg',);
});

//--------授信申请订单-->未通过订单--> 詳情 -----------
router.get('/credit_wtg_detail', function (req, res) {
    res.render('Card/intendant/credit_wtg_detail');
});


//---------消费订单中心-->审核中订单管理---------------
router.get('/consum_shz', function (req, res) {
    const sid = req.query.sid ? req.query.sid : '';
    const aname = req.query.aname ? req.query.aname : '';
    const regphonenumber = req.query.regphonenumber ? req.query.regphonenumber : '';
    const mname = req.query.mname ? req.query.mname : '';
    const shopname = req.query.shopname ? req.query.shopname : '';
    const typename = req.query.typename ? req.query.typename : '';
    var loginaid = req.session.user ? req.session.user.loginaid : '';
    var Api_CARDCONSUMEORDER_A2_Request =new ST1();
    Api_CARDCONSUMEORDER_A2_Request.setLoginaid(loginaid);
    Api_CARDCONSUMEORDER_A2_Request.setRender('orderList');
    Api_CARDCONSUMEORDER_A2_Request.setCallback(Callback);
    Api_CARDCONSUMEORDER_A2_Request.setCmid(loginaid)
    Api_CARDCONSUMEORDER_A2_Request.setSqlcondition("orderstate in ('0', '1')");
    Api_CARDCONSUMEORDER_A2_Request.setSid(sid)
    Api_CARDCONSUMEORDER_A2_Request.setAname(aname)
    Api_CARDCONSUMEORDER_A2_Request.setRegphonenumber(regphonenumber)
    Api_CARDCONSUMEORDER_A2_Request.setMname(mname)
    Api_CARDCONSUMEORDER_A2_Request.setShopname(shopname)
    Api_CARDCONSUMEORDER_A2_Request.setTypename(typename)
    var rv = [
        Api_CARDCONSUMEORDER_A2_Request,
    ];
    call(req, res, rv);
    function Callback (rv ,req, res, success) {
        const parameter = require('../yz_modules/parameter');
        parameter.getParameterName(["cardconsumeorder.ordertype"],function (val) {
            for (var i=0;i<success.orderList.pageList.length;i++) {
                success.orderList.pageList[i].ordertype=val['cardconsumeorder.ordertype'][success.orderList.pageList[i].ordertype];
            }
            res.render('Card/intendant/consum_shz',Object.assign(success, {sid : sid, aname : aname, regphonenumber : regphonenumber, mname : mname, shopname : shopname, typename : typename}))
        })

    }
});

//---------消费订单中心-->审核中订单管理-->详情---------------
router.get('/consum_shz_f_detail', function (req, res) {
    const sid = req.query.sid;

    const loginaid = req.session.user ? req.session.user.loginaid : '';
    const Api_CARDCONSUMEORDER_A2_Request =new ST1();
    const Api_BILLS_A2_Request =new ST2();

    Api_CARDCONSUMEORDER_A2_Request.setLoginaid(loginaid);
    Api_CARDCONSUMEORDER_A2_Request.setRender('orderList');
    Api_CARDCONSUMEORDER_A2_Request.setCallback(Callback);
    Api_CARDCONSUMEORDER_A2_Request.setSid(sid);
    Api_BILLS_A2_Request.setSid(sid);
    Api_BILLS_A2_Request.setLoginaid(loginaid);
    Api_BILLS_A2_Request.setRender('billsList');



    const rv = [
        Api_CARDCONSUMEORDER_A2_Request,
        Api_BILLS_A2_Request
    ];
    call(req, res, rv);
    function Callback (rv ,req, res, success) {
        const parameter = require('../yz_modules/parameter');
        parameter.getParameterName(["cardconsumeorder.ordertype"],function (val) {
            for (var i=0;i<success.orderList.pageList.length;i++) {
                success.orderList.pageList[i].ordertype = val['cardconsumeorder.ordertype'][success.orderList.pageList[i].ordertype];
            }
            parameter.getParameterName(["cardconsumeorder.orderstate"],function (val) {
                for (var i = 0; i < success.orderList.pageList.length; i++) {
                    success.orderList.pageList[i].orderstate = val['cardconsumeorder.orderstate'][success.orderList.pageList[i].orderstate];
                }
                res.render('Card/intendant/consum_shz_f_detail', success)
            })
        })
    }
});

//---------消费订单中心-->待放款订单管理---------------
router.get('/consum_dfk', function (req, res) {
    const sid = req.query.sid ? req.query.sid : '';
    const aname = req.query.aname ? req.query.aname : '';
    const regphonenumber = req.query.regphonenumber ? req.query.regphonenumber : '';
    const mname = req.query.mname ? req.query.mname : '';
    const shopname = req.query.shopname ? req.query.shopname : '';
    const typename = req.query.typename ? req.query.typename : '';
    const loginaid = req.session.user ? req.session.user.loginaid : '';
    const Api_CARDCONSUMEORDER_A2_Request =new ST1();
    Api_CARDCONSUMEORDER_A2_Request.setLoginaid(loginaid);
    Api_CARDCONSUMEORDER_A2_Request.setRender('orderList');
    Api_CARDCONSUMEORDER_A2_Request.setCallback(Callback);
    Api_CARDCONSUMEORDER_A2_Request.setCmid(loginaid)
    Api_CARDCONSUMEORDER_A2_Request.setSqlcondition("orderstate in ('2', '5')");
    Api_CARDCONSUMEORDER_A2_Request.setSid(sid)
    Api_CARDCONSUMEORDER_A2_Request.setAname(aname)
    Api_CARDCONSUMEORDER_A2_Request.setRegphonenumber(regphonenumber)
    Api_CARDCONSUMEORDER_A2_Request.setMname(mname)
    Api_CARDCONSUMEORDER_A2_Request.setShopname(shopname)
    Api_CARDCONSUMEORDER_A2_Request.setTypename(typename)

    var rv = [
        Api_CARDCONSUMEORDER_A2_Request,
    ];
    call(req, res, rv);
    function Callback (rv ,req, res, success) {
        const parameter = require('../yz_modules/parameter');
        parameter.getParameterName(["cardconsumeorder.ordertype"],function (val) {
            for (var i=0;i<success.orderList.pageList.length;i++) {
                success.orderList.pageList[i].ordertype=val['cardconsumeorder.ordertype'][success.orderList.pageList[i].ordertype];
            }
            res.render('Card/intendant/consum_dfk',Object.assign(success, {sid : sid, aname : aname, regphonenumber : regphonenumber, mname : mname, shopname : shopname, typename : typename}))
        })

    }
});
//---------消费订单中心-->待放款订单管理-->详情-------------
router.get('/consum_dfk_f_detail', function (req, res) {
    const sid = req.query.sid;
    const aid = req.query.aid
    const loginaid = req.session.user ? req.session.user.loginaid : '';
    const Api_CARDCONSUMEORDER_A2_Request =new ST1();
    const Api_BILLDETAILS_A2_Request =new ST3();
    const Api_CUSER_A2_Request =new ST4();
    Api_CARDCONSUMEORDER_A2_Request.setLoginaid(loginaid);
    Api_CARDCONSUMEORDER_A2_Request.setRender('orderList');
    Api_CARDCONSUMEORDER_A2_Request.setCallback(Callback);
    Api_CARDCONSUMEORDER_A2_Request.setSid(sid);
    Api_BILLDETAILS_A2_Request.setOrdernumber(sid);
    Api_BILLDETAILS_A2_Request.setLoginaid(loginaid);
    Api_BILLDETAILS_A2_Request.setRender('billList');
    Api_CUSER_A2_Request.setAid(aid);
    Api_CUSER_A2_Request.setLoginaid(loginaid);
    Api_CUSER_A2_Request.setRender('userList');
    const rv = [
        Api_CARDCONSUMEORDER_A2_Request,
        Api_BILLDETAILS_A2_Request,
        Api_CUSER_A2_Request
    ];
    call(req, res, rv);
    function Callback (rv ,req, res, success) {
        const parameter = require('../yz_modules/parameter');
        parameter.getParameterName(["cardconsumeorder.ordertype"],function (val) {
            for (var i=0;i<success.orderList.pageList.length;i++) {
                success.orderList.pageList[i].ordertype = val['cardconsumeorder.ordertype'][success.orderList.pageList[i].ordertype];
            }
            parameter.getParameterName(["cardconsumeorder.orderstate"],function (val) {
                for (var i = 0; i < success.orderList.pageList.length; i++) {
                    success.orderList.pageList[i].orderstate = val['cardconsumeorder.orderstate'][success.orderList.pageList[i].orderstate];
                }
                res.render('Card/intendant/consum_dfk_f_detail', success)

            })
        })


    }
});

//---------消费订单中心-->已退款订单管理---------------
router.get('/consum_ytk', function (req, res) {
    const sid = req.query.sid ? req.query.sid : '';
    const aname = req.query.aname ? req.query.aname : '';
    const regphonenumber = req.query.regphonenumber ? req.query.regphonenumber : '';
    const mname = req.query.mname ? req.query.mname : '';
    const shopname = req.query.shopname ? req.query.shopname : '';
    const typename = req.query.typename ? req.query.typename : '';
    var loginaid = req.session.user ? req.session.user.loginaid : '';
    var Api_CARDCONSUMEORDER_A2_Request =new ST1();
    Api_CARDCONSUMEORDER_A2_Request.setLoginaid(loginaid);
    Api_CARDCONSUMEORDER_A2_Request.setRender('orderList');
    Api_CARDCONSUMEORDER_A2_Request.setCallback(Callback);
    Api_CARDCONSUMEORDER_A2_Request.setCmid(loginaid)
    Api_CARDCONSUMEORDER_A2_Request.setSqlcondition("orderstate in ('8')");
    Api_CARDCONSUMEORDER_A2_Request.setSid(sid)
    Api_CARDCONSUMEORDER_A2_Request.setAname(aname)
    Api_CARDCONSUMEORDER_A2_Request.setRegphonenumber(regphonenumber)
    Api_CARDCONSUMEORDER_A2_Request.setMname(mname)
    Api_CARDCONSUMEORDER_A2_Request.setShopname(shopname)
    Api_CARDCONSUMEORDER_A2_Request.setTypename(typename)

    var rv = [
        Api_CARDCONSUMEORDER_A2_Request,
    ];
    call(req, res, rv);
    function Callback (rv ,req, res, success) {
        const parameter = require('../yz_modules/parameter');
        parameter.getParameterName(["cardconsumeorder.ordertype"],function (val) {
            for (var i=0;i<success.orderList.pageList.length;i++) {
                success.orderList.pageList[i].ordertype=val['cardconsumeorder.ordertype'][success.orderList.pageList[i].ordertype];
            }
            res.render('Card/intendant/consum_ytk',Object.assign(success, {sid : sid, aname : aname, regphonenumber : regphonenumber, mname : mname, shopname : shopname, typename : typename}))
        })

    }

});
//---------消费订单中心-->已退款订单管理---------------
router.get('/consum_ytk_f_detail', function (req, res) {
    res.render('Card/intendant/consum_ytk_f_detail');
});

//---------消费订单中心-->已完成订单管理---------------
router.get('/consum_ywc', function (req, res) {
    const sid = req.query.sid ? req.query.sid : '';
    const aname = req.query.aname ? req.query.aname : '';
    const regphonenumber = req.query.regphonenumber ? req.query.regphonenumber : '';
    const mname = req.query.mname ? req.query.mname : '';
    const shopname = req.query.shopname ? req.query.shopname : '';
    const typename = req.query.typename ? req.query.typename : '';
    var loginaid = req.session.user ? req.session.user.loginaid : '';
    var Api_CARDCONSUMEORDER_A2_Request =new ST1();
    Api_CARDCONSUMEORDER_A2_Request.setLoginaid(loginaid);
    Api_CARDCONSUMEORDER_A2_Request.setRender('orderList');
    Api_CARDCONSUMEORDER_A2_Request.setCallback(Callback);
    Api_CARDCONSUMEORDER_A2_Request.setCmid(loginaid)
    Api_CARDCONSUMEORDER_A2_Request.setSqlcondition("orderstate in ('4', '9')");
    Api_CARDCONSUMEORDER_A2_Request.setSid(sid)
    Api_CARDCONSUMEORDER_A2_Request.setAname(aname)
    Api_CARDCONSUMEORDER_A2_Request.setRegphonenumber(regphonenumber)
    Api_CARDCONSUMEORDER_A2_Request.setMname(mname)
    Api_CARDCONSUMEORDER_A2_Request.setShopname(shopname)
    Api_CARDCONSUMEORDER_A2_Request.setTypename(typename)

    var rv = [
        Api_CARDCONSUMEORDER_A2_Request,
    ];
    call(req, res, rv);
    function Callback (rv ,req, res, success) {
        const parameter = require('../yz_modules/parameter');
        parameter.getParameterName(["cardconsumeorder.ordertype"],function (val) {
            for (var i=0;i<success.orderList.pageList.length;i++) {
                success.orderList.pageList[i].ordertype=val['cardconsumeorder.ordertype'][success.orderList.pageList[i].ordertype];
            }
            res.render('Card/intendant/consum_ywc',Object.assign(success, {sid : sid, aname : aname, regphonenumber : regphonenumber, mname : mname, shopname : shopname, typename : typename}))
        })

    }
});
//---------消费订单中心-->已完成订单管理-->已完成---------------
router.get('/consum_ywc_f_detail', function (req, res) {
    res.render('Card/intendant/consum_ywc_f_detail');
});

//---------消费订单中心-->已取消订单管理---------------
router.get('/consum_yqx', function (req, res) {
    const sid = req.query.sid ? req.query.sid : '';
    const aname = req.query.aname ? req.query.aname : '';
    const regphonenumber = req.query.regphonenumber ? req.query.regphonenumber : '';
    const mname = req.query.mname ? req.query.mname : '';
    const shopname = req.query.shopname ? req.query.shopname : '';
    const typename = req.query.typename ? req.query.typename : '';
    var loginaid = req.session.user ? req.session.user.loginaid : '';
    var Api_CARDCONSUMEORDER_A2_Request =new ST1();
    Api_CARDCONSUMEORDER_A2_Request.setLoginaid(loginaid);
    Api_CARDCONSUMEORDER_A2_Request.setRender('orderList');
    Api_CARDCONSUMEORDER_A2_Request.setCallback(Callback);
    Api_CARDCONSUMEORDER_A2_Request.setCmid(loginaid)
    Api_CARDCONSUMEORDER_A2_Request.setSqlcondition("orderstate in ('6', '7', '8')");
    Api_CARDCONSUMEORDER_A2_Request.setSid(sid)
    Api_CARDCONSUMEORDER_A2_Request.setAname(aname)
    Api_CARDCONSUMEORDER_A2_Request.setRegphonenumber(regphonenumber)
    Api_CARDCONSUMEORDER_A2_Request.setMname(mname)
    Api_CARDCONSUMEORDER_A2_Request.setShopname(shopname)
    Api_CARDCONSUMEORDER_A2_Request.setTypename(typename)

    var rv = [
        Api_CARDCONSUMEORDER_A2_Request,
    ];
    call(req, res, rv);
    function Callback (rv ,req, res, success) {
        const parameter = require('../yz_modules/parameter');
        parameter.getParameterName(["cardconsumeorder.ordertype"],function (val) {
            for (var i=0;i<success.orderList.pageList.length;i++) {
                success.orderList.pageList[i].ordertype=val['cardconsumeorder.ordertype'][success.orderList.pageList[i].ordertype];
            }
            res.render('Card/intendant/consum_yqx',Object.assign(success, {sid : sid, aname : aname, regphonenumber : regphonenumber, mname : mname, shopname : shopname, typename : typename}))
        })

    }
});
//---------消费订单中心-->已取消订单管理-->已取消---------------
router.get('/consum_yqx_f_detail', function (req, res) {
    res.render('Card/intendant/consum_yqx_f_detail');
});

//---------账单分期订单中心-->账单分期订单管理---------------
router.get('/staging_order', function (req, res) {
    res.render('Card/intendant/staging_order');
});
//---------账单分期订单中心-->账单分期订单管理-->详情---------------
router.get('/staging_order_detail', function (req, res) {
    res.render('Card/intendant/staging_order_detail');
});


module.exports = router;