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

//商户-合作中心
const express = require('express');
const router = express.Router();
const call = require('../controllers/common.js');
const r = require('../controllers/pineconecredit/reqs/Api_ACCOUNT_A2_Request.js');
var config = require('../config');
const HL3 = require('../controllers/pineconecredit/reqs/Api_CARD_MARKET_TYPE_A2_Request.js')//查询卡片
const HL5 = require('../controllers/pineconecredit/reqs/Api_CM_BINDAPPLY_A2_Request.js')//我的合作
const HL1 = require('../controllers/pineconecredit/reqs/Api_CARD_MARKET_TYPE_A2_Request.js')//查询卡片信息
/*申请变更合作方式*/
router.get('/Change_Collaboration', function (req, res) {
    res.render('Store/intendant/Change_Collaboration')
})
/*我的合作*/
router.get('/mycooperation', function (req, res) {
    var  loginaid= req.session.user.loginaid ? req.session.user.loginaid : '';
    var Api_CM_BINDAPPLY_A2_Request =new HL5();
    //Api_MERCHANT_WORKER_A2_Request.setCardstate('0');
    const shID = req.session.user.pageList[0].COMPANY_AID;
    Api_CM_BINDAPPLY_A2_Request.setMerchant_aid(shID);
    Api_CM_BINDAPPLY_A2_Request.setLoginaid(loginaid);
    Api_CM_BINDAPPLY_A2_Request.setRender('hzList');
    //Api_CM_BINDAPPLY_A2_Request.setApptype('0');
    //Api_CM_BINDAPPLY_A2_Request.setClog('128x128');
    Api_CM_BINDAPPLY_A2_Request.setSqlcondition("appstatus in ('1', '2')");
    Api_CM_BINDAPPLY_A2_Request.setCallback(Callback);
    var rv = [
        Api_CM_BINDAPPLY_A2_Request
    ];
    call(req, res, rv);
    function Callback (rv ,req, res, success) {
        success.imgUrl = config.imgUrl;
        const parameter = require('../yz_modules/parameter');
        parameter.getParameterName(["card_market_type.maintype","cm_bindapply.changerflag","cm_bindapply.settletype","cm_bindapply.settleperiod"],function (val) {
            for (var i=0;i<success.hzList.pageList.length;i++) {
                success.hzList.pageList[i].maintype=val['card_market_type.maintype'][success.hzList.pageList[i].maintype];
                success.hzList.pageList[i].changerflag=val['cm_bindapply.changerflag'][success.hzList.pageList[i].changerflag];
                success.hzList.pageList[i].settletype=val['cm_bindapply.settletype'][success.hzList.pageList[i].settletype];
                success.hzList.pageList[i].settleperiod=val['cm_bindapply.settleperiod'][success.hzList.pageList[i].settleperiod];
            }
            res.render('Store/intendant/mycooperation',success)
        })
        //res.render('Store/intendant/mycooperation', success)
    }
})
/*发起合作*/
router.get('/start_cooperate',function (req,res) {
    const cardSid = req.query.typecode;
    var  loginaid= req.session.user.loginaid ? req.session.user.loginaid : '';
    const Api_CARD_MARKET_TYPE_A2_Request = new HL1();
    Api_CARD_MARKET_TYPE_A2_Request.setLoginaid(loginaid);
    Api_CARD_MARKET_TYPE_A2_Request.setSid(cardSid);
    Api_CARD_MARKET_TYPE_A2_Request.setClog('128x128');
    Api_CARD_MARKET_TYPE_A2_Request.setRender('mdinfo');
    Api_CARD_MARKET_TYPE_A2_Request.setCallback(Callback);
    var rv = [
        Api_CARD_MARKET_TYPE_A2_Request
    ];
    call(req,res,rv);
    function Callback(rv,req,res,success) {
        const parameter = require('../yz_modules/parameter');
        const shID = req.session.user.pageList[0].COMPANY_AID;

        success.imgUrl = config.imgUrl;
        success.shID = shID;
        parameter.getParameterName(["card_market_type.maintype"],function (val) {
            success.mdinfo.pageList[0].maintype=val['card_market_type.maintype'][success.mdinfo.pageList[0].maintype];
            parameter.getParameterJson(function (err, val) {
                success.settletype =JSON.parse(val['cm_bindapply.settletype']);
                success.settleperiod =JSON.parse(val['cm_bindapply.settleperiod']);
                success.changerflag =JSON.parse(val['cm_bindapply.changerflag']);
                res.render('Store/intendant/start_cooperate',success)
            });

        })
        //res.render('Store/intendant/start_cooperate',success)
        //res.render('Store/intendant/start_cooperate',{imgUrl:config.imgUrl,shID:shID},success)
    }
})
/*待处理的合作邀约*/
router.get('/perationDelay',function (req,res) {
    var  loginaid= req.session.user.loginaid ? req.session.user.loginaid : '';
    var Api_CM_BINDAPPLY_A2_Request =new HL5();//卡商发起的
    var Api_CM_BINDAPPLY_SH_A2_Request =new HL5();//商户发起的
    //Api_MERCHANT_WORKER_A2_Request.setCardstate('0');
    const shID = req.session.user.pageList[0].COMPANY_AID;
    Api_CM_BINDAPPLY_A2_Request.setMerchant_aid(shID);
    Api_CM_BINDAPPLY_A2_Request.setLoginaid(loginaid);
    Api_CM_BINDAPPLY_A2_Request.setRender('hzList');
    Api_CM_BINDAPPLY_A2_Request.setApptype('0');
    Api_CM_BINDAPPLY_A2_Request.setSqlcondition("appstatus in ('0','3')");
    Api_CM_BINDAPPLY_A2_Request.setCallback(Callback);

    Api_CM_BINDAPPLY_SH_A2_Request.setMerchant_aid(shID);
    Api_CM_BINDAPPLY_SH_A2_Request.setLoginaid(loginaid);
    Api_CM_BINDAPPLY_SH_A2_Request.setRender('hzListSH');
    Api_CM_BINDAPPLY_SH_A2_Request.setApptype('1');
    Api_CM_BINDAPPLY_SH_A2_Request.setSqlcondition("appstatus in ('0','3')");
    Api_CM_BINDAPPLY_SH_A2_Request.setCallback(Callback);

    var rv = [
        Api_CM_BINDAPPLY_A2_Request,Api_CM_BINDAPPLY_SH_A2_Request
    ];
    call(req, res, rv);
    function Callback (rv ,req, res, success) {
        const parameter = require('../yz_modules/parameter');
        parameter.getParameterName(["card_market_type.maintype","cm_bindapply.changerflag","cm_bindapply.settletype","cm_bindapply.settleperiod"],function (val) {
            for (var i=0;i<success.hzList.pageList.length;i++) {
                success.hzList.pageList[i].maintype=val['card_market_type.maintype'][success.hzList.pageList[i].maintype];
                success.hzList.pageList[i].changerflag=val['cm_bindapply.changerflag'][success.hzList.pageList[i].changerflag];
                success.hzList.pageList[i].settletype=val['cm_bindapply.settletype'][success.hzList.pageList[i].settletype];
                success.hzList.pageList[i].settleperiod=val['cm_bindapply.settleperiod'][success.hzList.pageList[i].settleperiod];
            }
            for (var i=0;i<success.hzListSH.pageList.length;i++) {
                success.hzListSH.pageList[i].maintype=val['card_market_type.maintype'][success.hzListSH.pageList[i].maintype];
                success.hzListSH.pageList[i].changerflag=val['cm_bindapply.changerflag'][success.hzListSH.pageList[i].changerflag];
                success.hzListSH.pageList[i].settletype=val['cm_bindapply.settletype'][success.hzListSH.pageList[i].settletype];
                success.hzListSH.pageList[i].settleperiod=val['cm_bindapply.settleperiod'][success.hzListSH.pageList[i].settleperiod];
            }
            res.render('Store/intendant/perationDelay',success)
        })
        //res.render('Store/intendant/perationDelay', success)
    }
})
/*虚拟卡市场*/
router.get('/cardmarket', function (req, res) {
    const shID = req.session.user.pageList[0].COMPANY_AID;
    const Aid = req.session.user.pageList[0].Aid;
    var Api_CARD_MARKET_TYPE_A2_Request =new HL3();
    Api_CARD_MARKET_TYPE_A2_Request.setOnlinestate('1');
    Api_CARD_MARKET_TYPE_A2_Request.setRender('CardList');
    Api_CARD_MARKET_TYPE_A2_Request.setClog('128x128');
    Api_CARD_MARKET_TYPE_A2_Request.setCallback(Callback);
    var rv = [
        Api_CARD_MARKET_TYPE_A2_Request
    ];
    call(req, res, rv);
    function Callback (rv ,req, res, success) {
        success.shID = shID;
        success.Aid = Aid;
        success.imgUrl = config.imgUrl;
        const parameter = require('../yz_modules/parameter');
        parameter.getParameterName(["card_market_type.maintype"],function (val) {
            for (var i=0;i<success.CardList.pageList.length;i++) {
                success.CardList.pageList[i].maintype=val['card_market_type.maintype'][success.CardList.pageList[i].maintype];
            }
            res.render('Store/intendant/cardmarket',success)
        })
        //res.render('Store/intendant/cardmarket', success)
    }
});
/*门店详情路由指向判定*/
module.exports = router;
