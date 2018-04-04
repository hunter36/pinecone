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
const ST6 = require('../controllers/pineconecredit/reqs/Api_CARD_TAGS_A2_Request.js');



//--------虚拟卡中心-->我的虚拟卡-----------
router.get('/virtualCard', function (req, res) {
    const onlinestate = req.query.onlinestate ? req.query.onlinestate : '';
    const typename = req.query.typename ? req.query.typename : '';
    const maintype = req.query.maintype ? req.query.maintype : '';
    const loginaid = req.query.user ? req.query.user.loginaid : '';
    const Api_CARD_MARKET_TYPE_A2_Request =new ST1();
    Api_CARD_MARKET_TYPE_A2_Request.setCardstate(2);
    Api_CARD_MARKET_TYPE_A2_Request.setLoginaid(loginaid);
    Api_CARD_MARKET_TYPE_A2_Request.setRender('cardList');
    Api_CARD_MARKET_TYPE_A2_Request.setCallback(Callback);
    Api_CARD_MARKET_TYPE_A2_Request.setAid(loginaid)
    Api_CARD_MARKET_TYPE_A2_Request.setClog('128X128');
    Api_CARD_MARKET_TYPE_A2_Request.setAid(loginaid);
    Api_CARD_MARKET_TYPE_A2_Request.setTypename(typename);
    Api_CARD_MARKET_TYPE_A2_Request.setOnlinestate(onlinestate);
    Api_CARD_MARKET_TYPE_A2_Request.setMaintype(maintype);
    const rv = [
        Api_CARD_MARKET_TYPE_A2_Request,
    ];
    call(req, res, rv);
    function Callback (rv ,req, res, success) {
        const parameter = require('../yz_modules/parameter');
        parameter.getParameterName(["card_market_type.maintype", "card_market_type.onlinestate"],function (val) {
            for (let i=0;i<success.cardList.pageList.length;i++) {
                success.cardList.pageList[i].maintype=val['card_market_type.maintype'][success.cardList.pageList[i].maintype];
            }
            Object.assign(success, {objmaintype : val['card_market_type.maintype']});

            Object.assign(success, {objonlinestate : val['card_market_type.onlinestate']});
            res.render('Card/intendant/virtualCard', Object.assign(success, {typename : typename, maintype : maintype, onlinestate : onlinestate}))
        })
    }
});
//--------虚拟卡中心-->我的虚拟卡-->详情-----------
router.get('/draftDetail', function (req, res) {
    const card_type_id = req.query.cardTypeId ? req.query.cardTypeId : req.session.card_type_id;
    const loginaid = req.session.user ? req.session.user.loginaid : '';
    const Api_CARD_MARKET_TYPE_A2_Request =new ST1();
    const Api_CARD_TYPE_CONTRACT_A2_Request =new ST3();
    const Api_CARD_TYPE_PERIOD_A2_Request =new ST4();
    const Api_CARD_MARKET_TYPE_A5_qryCdocPdoc_Request = new ST5();
    Api_CARD_MARKET_TYPE_A2_Request.setLoginaid(loginaid);
    Api_CARD_MARKET_TYPE_A2_Request.setRender('cardData');
    Api_CARD_MARKET_TYPE_A2_Request.setCallback(Callback);
    Api_CARD_MARKET_TYPE_A2_Request.setCard_type_id(card_type_id);
    Api_CARD_MARKET_TYPE_A2_Request.setClog('128X128');
    Api_CARD_MARKET_TYPE_A2_Request.setAid(loginaid)
    Api_CARD_TYPE_CONTRACT_A2_Request.setLoginaid(loginaid);
    Api_CARD_TYPE_CONTRACT_A2_Request.setRender('contractData');
    Api_CARD_TYPE_CONTRACT_A2_Request.setCard_type_id(card_type_id);
    Api_CARD_TYPE_PERIOD_A2_Request.setLoginaid(loginaid);
    Api_CARD_TYPE_PERIOD_A2_Request.setRender('periodData');
    Api_CARD_TYPE_PERIOD_A2_Request.setCard_type_id(card_type_id);
    Api_CARD_MARKET_TYPE_A5_qryCdocPdoc_Request.setLoginaid(loginaid);
    Api_CARD_MARKET_TYPE_A5_qryCdocPdoc_Request.setRender('specialData');
    Api_CARD_MARKET_TYPE_A5_qryCdocPdoc_Request.setCard_type_id(card_type_id);
    const rv = [
        Api_CARD_MARKET_TYPE_A2_Request,
        Api_CARD_TYPE_CONTRACT_A2_Request,
        Api_CARD_TYPE_PERIOD_A2_Request,
        Api_CARD_MARKET_TYPE_A5_qryCdocPdoc_Request
    ];
    call(req, res, rv);
    function Callback (rv ,req, res, success) {

        res.render('Card/intendant/draftDetail', success)
    }
});
//--------虚拟卡中心-->草稿箱-->卡片管理-----------
router.get('/editCard', function (req, res) {
    res.render('Card/intendant/editCard');
});
//--------虚拟卡中心-->草稿箱-->提交审核-----------
router.get('/draft_detail', function (req, res) {
    const apply = req.query.apply ? req.query.apply : '';
    const card_type_id = req.query.card_type_id ? req.query.card_type_id : req.session.card_type_id;
    const loginaid = req.session.user ? req.session.user.loginaid : '';
    const Api_CARD_MARKET_TYPE_A2_Request =new ST1();
    const Api_CARD_TYPE_CONTRACT_A2_Request =new ST3();
    const Api_CARD_TYPE_PERIOD_A2_Request =new ST4();
    const Api_CARD_MARKET_TYPE_A5_qryCdocPdoc_Request = new ST5();
    Api_CARD_MARKET_TYPE_A2_Request.setLoginaid(loginaid);
    Api_CARD_MARKET_TYPE_A2_Request.setRender('cardData');
    Api_CARD_MARKET_TYPE_A2_Request.setCallback(Callback);
    Api_CARD_MARKET_TYPE_A2_Request.setCard_type_id(card_type_id);
    Api_CARD_MARKET_TYPE_A2_Request.setClog('128X128');
    Api_CARD_MARKET_TYPE_A2_Request.setAid(loginaid)
    Api_CARD_TYPE_CONTRACT_A2_Request.setLoginaid(loginaid);
    Api_CARD_TYPE_CONTRACT_A2_Request.setRender('contractData');
    Api_CARD_TYPE_CONTRACT_A2_Request.setCard_type_id(card_type_id);
    Api_CARD_TYPE_PERIOD_A2_Request.setLoginaid(loginaid);
    Api_CARD_TYPE_PERIOD_A2_Request.setRender('periodData');
    Api_CARD_TYPE_PERIOD_A2_Request.setCard_type_id(card_type_id);
    Api_CARD_MARKET_TYPE_A5_qryCdocPdoc_Request.setLoginaid(loginaid);
    Api_CARD_MARKET_TYPE_A5_qryCdocPdoc_Request.setRender('specialData');
    Api_CARD_MARKET_TYPE_A5_qryCdocPdoc_Request.setCard_type_id(card_type_id);
    const rv = [
        Api_CARD_MARKET_TYPE_A2_Request,
        Api_CARD_TYPE_CONTRACT_A2_Request,
        Api_CARD_TYPE_PERIOD_A2_Request,
        Api_CARD_MARKET_TYPE_A5_qryCdocPdoc_Request
    ];
    call(req, res, rv);
    function Callback (rv ,req, res, success) {
        if (apply === '0') {
            var renderData = {
                strButton1 : "div id=\'save\' class=\'de-btn\'",
                strButton2 : 'span',
                strButton3 :'提交审核'
            };
        } else {
            var renderData = {
                strButton : ''

            };
        }
        const data = Object.assign(success, renderData);
        if(typeof(req.query.meg) !== 'undefined' && req.query.meg === '0'){
            data.meg="提交成功!";
        }else if(typeof(req.query.meg) !== 'undefined' &&req.query.meg === '1'){
            data.meg="提交失败!";
        }

        res.render('Card/intendant/draft_detail', data)
    }
});
//--------虚拟卡中心-->草稿箱-----------
router.get('/draft', function (req, res) {
    const typename = req.query.typename ? req.query.typename : '';
    const maintype = req.query.maintype ? req.query.maintype : '';
    const cardstate = req.query.cardstate ? req.query.cardstate : '';
    const loginaid = req.session.user ? req.session.user.loginaid : '';
    const Api_CARD_MARKET_TYPE_A2_Request =new ST1();
    const Api_CARDMACKETAPPLY_A2_Request =new ST2();
    const Api_CARD_TAGS_A2_Request =new ST6();
    if(cardstate === '0') {
        Api_CARD_MARKET_TYPE_A2_Request.setCardstate(0);
    } else if(cardstate === '1'){
        Api_CARD_MARKET_TYPE_A2_Request.setCardstate(1);
    } else {
        Api_CARD_MARKET_TYPE_A2_Request.setSqlcondition("cardstate in ('0', '1')");
    }
    Api_CARD_MARKET_TYPE_A2_Request.setTypename(typename);
    Api_CARD_MARKET_TYPE_A2_Request.setLoginaid(loginaid);
    Api_CARD_MARKET_TYPE_A2_Request.setRender('cardList');
    Api_CARD_MARKET_TYPE_A2_Request.setCallback(Callback);
    Api_CARD_MARKET_TYPE_A2_Request.setAid(loginaid)
    Api_CARD_MARKET_TYPE_A2_Request.setClog('128X128');
    Api_CARDMACKETAPPLY_A2_Request.setLoginaid(loginaid);
    Api_CARDMACKETAPPLY_A2_Request.setRender('applyList');
    Api_CARDMACKETAPPLY_A2_Request.setAid(loginaid)
    Api_CARD_TAGS_A2_Request.setLoginaid(loginaid);
    Api_CARD_TAGS_A2_Request.setRender('tagList');

    const rv = [
        Api_CARD_MARKET_TYPE_A2_Request,
        Api_CARDMACKETAPPLY_A2_Request,
        Api_CARD_TAGS_A2_Request
    ];
    call(req, res, rv);
    function Callback (rv ,req, res, success) {
        const parameter = require('../yz_modules/parameter');
        parameter.getParameterName(["card_market_type.cardstate"],function (val) {
            for (let i = 0; i < success.cardList.pageList.length; i++) {
                success.cardList.pageList[i].cardstatename = val['card_market_type.cardstate'][success.cardList.pageList[i].cardstate];
            }
            for(let i=0;i<success.cardList.pageList.length; i++) {
                for(let j=0;j<success.applyList.pageList.length; j++)
                    if(success.cardList.pageList[i].cardTypeId === success.applyList.pageList[j].cardTypeId) {
                        success.cardList.pageList[i].approveresult = success.applyList.pageList[j].approveresult;
                        success.cardList.pageList[i].applysid = success.applyList.pageList[j].sid
                    }
            }
        if(typeof(req.query.meg)!='undefined'&&req.query.meg=='1'){
            success.meg="提交成功!";
        }else if(typeof(req.query.meg)!='undefined'&&req.query.meg=='2'){
            success.meg="提交失败!";
        }
            res.render('Card/intendant/draft', Object.assign(success, {typename : typename, maintype : maintype, cardstate : cardstate}))
        })
    }
});
//--------虚拟卡中心-->草稿箱-->卡片管理-----------
router.get('/draft_edit', function (req, res) {
    const card_type_id = req.query.card_type_id ? req.query.card_type_id : req.session.card_type_id;
    const fsid = req.query.fsid ? req.query.fsid : '';
    // const ssid = req.query.ssid
    // const tsid = req.query.tsid
    const loginaid = req.session.user ? req.session.user.loginaid : '';
    const Api_CARD_MARKET_TYPE_A2_Request =new ST1();
    const Api_CARD_TYPE_CONTRACT_A2_Request =new ST3();
    const Api_CARD_TYPE_PERIOD_A2_Request =new ST4();
    const Api_CARD_MARKET_TYPE_A5_qryCdocPdoc_Request = new ST5();
    Api_CARD_MARKET_TYPE_A2_Request.setCardstate(0);
    Api_CARD_MARKET_TYPE_A2_Request.setLoginaid(loginaid);
    Api_CARD_MARKET_TYPE_A2_Request.setRender('cardData');
    Api_CARD_MARKET_TYPE_A2_Request.setCallback(Callback);
    Api_CARD_MARKET_TYPE_A2_Request.setCard_type_id(card_type_id);
    Api_CARD_MARKET_TYPE_A2_Request.setClog('128X128');
    Api_CARD_MARKET_TYPE_A2_Request.setAid(loginaid)
    Api_CARD_TYPE_CONTRACT_A2_Request.setLoginaid(loginaid);
    Api_CARD_TYPE_CONTRACT_A2_Request.setRender('contractData');
    Api_CARD_TYPE_CONTRACT_A2_Request.setCard_type_id(card_type_id);
    Api_CARD_TYPE_PERIOD_A2_Request.setLoginaid(loginaid);
    Api_CARD_TYPE_PERIOD_A2_Request.setRender('periodData');
    Api_CARD_TYPE_PERIOD_A2_Request.setCard_type_id(card_type_id);
    Api_CARD_MARKET_TYPE_A5_qryCdocPdoc_Request.setLoginaid(loginaid);
    Api_CARD_MARKET_TYPE_A5_qryCdocPdoc_Request.setRender('specialData');
    Api_CARD_MARKET_TYPE_A5_qryCdocPdoc_Request.setCard_type_id(card_type_id);

    const rv = [
        Api_CARD_MARKET_TYPE_A2_Request,
        Api_CARD_TYPE_CONTRACT_A2_Request,
        Api_CARD_TYPE_PERIOD_A2_Request,
        Api_CARD_MARKET_TYPE_A5_qryCdocPdoc_Request
    ];
    call(req, res, rv);
    function Callback (rv ,req, res, success) {
        req.session.fsid = fsid
        req.session.ssid = success.contractData.pageList[0].sid;
        if(success.periodData.pageList[0] !== undefined) {
            req.session.tsid = success.periodData.pageList[0].sid
        }
        if(typeof(req.query.meg) !== 'undefined' && req.query.meg === '0'){
            success.meg="提交成功!";
        }else if(typeof(req.query.meg) !== 'undefined' &&req.query.meg === '1'){
            success.meg="提交失败!";
        }
        success.card_type_id = card_type_id
        res.render('Card/intendant/draft_edit', success)
    }
});
// //--------虚拟卡中心-->草稿箱-----------
// router.get('/draft', function (req, res) {
//     const loginaid = req.session.user ? req.session.user.loginaid : '';
//     const Api_CARD_MARKET_TYPE_A2_Request =new ST1();
//     const Api_CARDMACKETAPPLY_A2_Request =new ST2();
//
//     Api_CARD_MARKET_TYPE_A2_Request.setSqlcondition("cardstate in ('0', '1')");
//     Api_CARD_MARKET_TYPE_A2_Request.setLoginaid(loginaid);
//     Api_CARD_MARKET_TYPE_A2_Request.setRender('cardList');
//     Api_CARD_MARKET_TYPE_A2_Request.setCallback(Callback);
//     Api_CARD_MARKET_TYPE_A2_Request.setAid(loginaid)
//     Api_CARD_MARKET_TYPE_A2_Request.setClog('128X128');
//     Api_CARDMACKETAPPLY_A2_Request.setLoginaid(loginaid);
//     Api_CARDMACKETAPPLY_A2_Request.setRender('applyList');
//     Api_CARDMACKETAPPLY_A2_Request.setAid(loginaid)
//
//
//     const rv = [
//         Api_CARD_MARKET_TYPE_A2_Request,
//         Api_CARDMACKETAPPLY_A2_Request,
//     ];
//     call(req, res, rv);
//     function Callback (rv ,req, res, success) {
//         const parameter = require('../yz_modules/parameter');
//         parameter.getParameterName(["card_market_type.cardstate"],function (val) {
//             for (const i = 0; i < success.cardList.pageList.length; i++) {
//                 success.cardList.pageList[i].cardstatename = val['card_market_type.cardstate'][success.cardList.pageList[i].cardstate];
//             }
//             res.render('Card/intendant/draft', success)
//         })
//     }
// });

//--------新增系统内特权-----------
router.get('/tq_addPopup', function (req, res) {
    res.render('Card/intendant/tq_addPopup');
});
//--------新增系统外特权-----------
router.get('/tq_xtwPopup', function (req, res) {
    res.render('Card/intendant/tq_xtwPopup');
});
//--------修改系统内特权-----------
router.get('/xtn_editPopup', function (req, res) {
    res.render('Card/intendant/xtn_editPopup');
});
//--------修改系统外特权-----------
router.get('/xtw_editPopup', function (req, res) {
    res.render('Card/intendant/xtw_editPopup');
});



module.exports = router;