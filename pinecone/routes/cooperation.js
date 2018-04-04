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
const ST6 = require('../controllers/pineconecredit/reqs/Api_MERCHANT_SHOP_A2_Request.js');
const ST7 = require('../controllers/pineconecredit/reqs/Api_CM_BINDAPPLY_A2_Request.js');
const MZ1 = require('../controllers/pineconecredit/reqs/Api_CM_BINDAPPLY_A2_Request.js');
const ST8 = require('../controllers/pineconecredit/reqs/Api_MERCHANT_SHOP_A5_browserShopWithApplyCnt_Request.js');
const ST9 = require('../controllers/pineconecredit/reqs/Api_CM_BIND_CARDTYPES_A5_qrySHOP_SUPPORT_CARDTYPES_Request.js');

//--------合作中心-->商户池-----------
router.get('/merchant_pool', function (req, res) {
    const loginaid = req.session.user ? req.session.user.loginaid : '';
    const Api_MERCHANT_SHOP_A2_Request = new ST6();
    const Api_MERCHANT_SHOP_A5_browserShopWithApplyCnt_Request = new ST8();
    Api_MERCHANT_SHOP_A2_Request.setAppstate(1);
    Api_MERCHANT_SHOP_A2_Request.setLoginaid(loginaid);
    Api_MERCHANT_SHOP_A2_Request.setRender('shopList');
    Api_MERCHANT_SHOP_A2_Request.setCallback(Callback);
    Api_MERCHANT_SHOP_A2_Request.setElog('128X128');
    Api_MERCHANT_SHOP_A2_Request.setShopphotos('128X128');
    Api_MERCHANT_SHOP_A5_browserShopWithApplyCnt_Request.setCard_merchan_aid(loginaid);
    Api_MERCHANT_SHOP_A5_browserShopWithApplyCnt_Request.setLoginaid(loginaid);
    Api_MERCHANT_SHOP_A5_browserShopWithApplyCnt_Request.setRender('cardList');
    Api_MERCHANT_SHOP_A5_browserShopWithApplyCnt_Request.setAppstate(1);


    var rv = [
        Api_MERCHANT_SHOP_A2_Request,
        Api_MERCHANT_SHOP_A5_browserShopWithApplyCnt_Request
    ];
    call(req, res, rv);

    function Callback(rv, req, res, success) {

        res.render('Card/intendant/merchant_pool', success)
    }
})
//--------合作中心-->商户池-->弹窗-----------
router.get('/mer_popup', function (req, res) {
    const id = req.query.id;
    const maid = req.query.maid;
    const loginaid = req.session.user ? req.session.user.loginaid : '';
    const Api_CARD_MARKET_TYPE_A2_Request =new ST1();
    const Api_CM_BIND_CARDTYPES_A5_qrySHOP_SUPPORT_CARDTYPES_Request =new ST9();
    const Api_MERCHANT_SHOP_A2_Request =new ST6();

    Api_CARD_MARKET_TYPE_A2_Request.setCardstate(2);
    Api_CARD_MARKET_TYPE_A2_Request.setOnlinestate(1);
    Api_CARD_MARKET_TYPE_A2_Request.setLoginaid(loginaid);
    Api_CARD_MARKET_TYPE_A2_Request.setRender('cardList');
    Api_CARD_MARKET_TYPE_A2_Request.setCallback(Callback);
    Api_CARD_MARKET_TYPE_A2_Request.setClog('128X128');
    Api_CM_BIND_CARDTYPES_A5_qrySHOP_SUPPORT_CARDTYPES_Request.setShopaid(id);
    Api_CM_BIND_CARDTYPES_A5_qrySHOP_SUPPORT_CARDTYPES_Request.setLoginaid(loginaid);
    Api_CM_BIND_CARDTYPES_A5_qrySHOP_SUPPORT_CARDTYPES_Request.setRender('shopList');
    Api_MERCHANT_SHOP_A2_Request.setMaid(maid);
    Api_MERCHANT_SHOP_A2_Request.setLoginaid(loginaid);
    Api_MERCHANT_SHOP_A2_Request.setRender('shopsList');


    const rv = [
        Api_CARD_MARKET_TYPE_A2_Request,
        Api_CM_BIND_CARDTYPES_A5_qrySHOP_SUPPORT_CARDTYPES_Request,
        Api_MERCHANT_SHOP_A2_Request
    ];
    call(req, res, rv);

    function Callback(rv, req, res, success) {
        let pageListr = []
        for(let i=0;i<success.shopList.pageList.length; i++) {
            for(let j=0;j<success.cardList.pageList.length; j++)
                  if(success.cardList.pageList[j].cardTypeId === success.shopList.pageList[i].cardTypeId) {
                    success.cardList.pageList.splice(j,1)
                }
        }

        const parameter = require('../yz_modules/parameter');
        parameter.getParameterJson(function (err, val) {
            //获取参数字符型json
            const settletype =JSON.parse(val['cm_bindapply.settletype']);
            const settleperiod =JSON.parse(val['cm_bindapply.settleperiod']);
            const changerflag =JSON.parse(val['cm_bindapply.changerflag']);
            res.render('Card/intendant/mer_popup', Object.assign(success, {id:id, maid : maid, settletype:settletype,settleperiod:settleperiod,changerflag:changerflag}))
        })
    }
});
//--------合作中心-->商户池-->success弹窗-----------
router.get('/mer_success', function (req, res) {
    res.render('Card/intendant/mer_success');
});
//--------合作中心-->商户池-->详情-----------
router.get('/mer_pool_detail', function (req, res) {
    res.render('Card/intendant/mer_pool_detail');
});
//--------合作中心-->合作邀约-----------
router.get('/invite_cooperation', function (req, res) {

    var loginaid = req.session.user.loginaid;

    var Api_CM_BINDAPPLY_A2_Request =new MZ1();
    Api_CM_BINDAPPLY_A2_Request.setApptype(1);
    Api_CM_BINDAPPLY_A2_Request.setSqlcondition("appstatus in ('0', '3')");
    Api_CM_BINDAPPLY_A2_Request.setLoginaid(loginaid);
    Api_CM_BINDAPPLY_A2_Request.setRender('merchantList');
    Api_CM_BINDAPPLY_A2_Request.setCallback(Callback);

    var Api_CM_BINDAPPLY_A2_Request_cardBus =new MZ1();
    Api_CM_BINDAPPLY_A2_Request_cardBus.setApptype(0);
    Api_CM_BINDAPPLY_A2_Request_cardBus.setAppstatus(0);
    Api_CM_BINDAPPLY_A2_Request_cardBus.setLoginaid(loginaid);
    Api_CM_BINDAPPLY_A2_Request_cardBus.setRender('myInvite');
    Api_CM_BINDAPPLY_A2_Request_cardBus.setCallback(Callback);

    var rv = [
        Api_CM_BINDAPPLY_A2_Request,
        Api_CM_BINDAPPLY_A2_Request_cardBus
    ];
    call(req, res, rv);
    function Callback (rv ,req, res, success) {

        res.render('Card/intendant/invite_cooperation', success)
    }



});
//--------合作中心-->合作邀约-->详情-----------
router.get('/invite_detail', function (req, res) {
    var sid = req.query.sid;
    var loginaid = req.session.user.loginaid;

    var Api_CM_BINDAPPLY_A2_Request =new MZ1();
    Api_CM_BINDAPPLY_A2_Request.setSid(sid);
    Api_CM_BINDAPPLY_A2_Request.setLoginaid(loginaid);
    Api_CM_BINDAPPLY_A2_Request.setRender('detail');
    Api_CM_BINDAPPLY_A2_Request.setCallback(Callback);

    var rv = [
        Api_CM_BINDAPPLY_A2_Request
    ];
    call(req, res, rv);
    function Callback (rv ,req, res, success) {

        res.render('Card/intendant/invite_detail', success)
    }
});
//--------合作中心-->合作邀约-->同意弹窗-----------
router.get('/invite_accept', function (req, res) {
    var sid = req.query.sid;
    res.render('Card/intendant/invite_accept', {sid:sid})
});
//--------合作中心-->合作邀约-->不同意弹窗-----------
router.get('/invite_refuse', function (req, res) {
    var sid = req.query.sid;
    res.render('Card/intendant/invite_refuse', {sid:sid});
});
//--------合作中心-->我的合作----------------------
router.get('/my_cooperation', function (req, res) {
    var loginaid = req.session.user.loginaid
    var Api_MERCHANT_SHOP_A2_Request = new ST7();
    Api_MERCHANT_SHOP_A2_Request.setSqlcondition("appstatus in ('1', '2')");
    Api_MERCHANT_SHOP_A2_Request.setLoginaid(loginaid);
    Api_MERCHANT_SHOP_A2_Request.setRender('shopList');
    Api_MERCHANT_SHOP_A2_Request.setCallback(Callback);


    var rv = [
        Api_MERCHANT_SHOP_A2_Request,
    ];
    call(req, res, rv);

    function Callback(rv, req, res, success) {
        const parameter = require('../yz_modules/parameter');
        parameter.getParameterName(["cm_bindapply.appstatus"],function (val) {
            for (var i = 0; i < success.shopList.pageList.length; i++) {
                success.shopList.pageList[i].appstatusname = val['cm_bindapply.appstatus'][success.shopList.pageList[i].appstatus];
            }
            res.render('Card/intendant/my_cooperation', success)
        })
    }

});
//--------合作中心-->我的合作-->查看详情（合作参数修改申请）----------------------
router.get('/my_edit_apply', function (req, res) {
    const sid = req.query.sid
    var loginaid = req.session.user.loginaid
    var Api_MERCHANT_SHOP_A2_Request = new ST7();
    Api_MERCHANT_SHOP_A2_Request.setLoginaid(loginaid);
    Api_MERCHANT_SHOP_A2_Request.setRender('shopList');
    Api_MERCHANT_SHOP_A2_Request.setCallback(Callback);
    Api_MERCHANT_SHOP_A2_Request.setSid(sid);

    var rv = [
        Api_MERCHANT_SHOP_A2_Request,
    ];
    call(req, res, rv);
    function Callback(rv, req, res, success) {
        res.render('Card/intendant/my_edit_apply', success)
    }
});
//--------合作中心-->我的合作-->合作详情----------------------
router.get('/my_co_detail', function (req, res) {
    res.render('Card/intendant/my_co_detail');
});
//--------合作中心-->我的合作-->申请变更合作方式----------------------
router.get('/my_change_apply', function (req, res) {
    res.render('Card/intendant/my_change_apply');
});
//--------合作中心-->我的合作-->申请变更合作方式-->成功弹窗----------------------
router.get('/my_success', function (req, res) {
    res.render('Card/intendant/my_success');
});
//--------合作中心-->合作邀约-->我发起的合作邀约详情-----------
router.get('/invite_m_detail', function (req, res) {
    var sid = req.query.sid;
    var loginaid = req.session.user.loginaid;

    var Api_CM_BINDAPPLY_A2_Request =new MZ1();
    Api_CM_BINDAPPLY_A2_Request.setSid(sid);
    Api_CM_BINDAPPLY_A2_Request.setLoginaid(loginaid);
    Api_CM_BINDAPPLY_A2_Request.setRender('detail');
    Api_CM_BINDAPPLY_A2_Request.setCallback(Callback);

    var rv = [
        Api_CM_BINDAPPLY_A2_Request
    ];
    call(req, res, rv);
    function Callback (rv ,req, res, success) {

        res.render('Card/intendant/invite_m_detail', success)
    }
});
router.post('/checkCard', function (req, res) {
    const shopaid = req.body.shopaid
    const loginaid = req.session.user ? req.session.user.loginaid : '';
    const Api_CM_BIND_CARDTYPES_A5_qrySHOP_SUPPORT_CARDTYPES_Request =new ST9();
    Api_CM_BIND_CARDTYPES_A5_qrySHOP_SUPPORT_CARDTYPES_Request.setShopaid(shopaid);
    Api_CM_BIND_CARDTYPES_A5_qrySHOP_SUPPORT_CARDTYPES_Request.setLoginaid(loginaid);
    Api_CM_BIND_CARDTYPES_A5_qrySHOP_SUPPORT_CARDTYPES_Request.setCallback(callback);
    const rv = [
        Api_CM_BIND_CARDTYPES_A5_qrySHOP_SUPPORT_CARDTYPES_Request,
    ];
    call(req, res, rv);
    function callback (rv ,req, res,  data) {
        res.send(data[0])
    }
})
module.exports = router;