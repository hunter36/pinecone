import ApiClient from '../ApiClient';
import {formatRequestParams,deleteTmpFile,isNil,md5, ajaxCallback} from '../helper';
var helper = require('../helper');
var express = require('express');
var config = require('../config');
var request = require('superagent');
var router = express.Router();
var logger = require('../logger');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();
var svgCaptcha = require('svg-captcha');
const call = require('../controllers/common.js');
const ST1 = require('../controllers/pineconecredit/reqs/Api_CARD_MARKET_TYPE_A3_Request.js')
const HL1 = require('../controllers/pineconecredit/reqs/Api_MERCHANT_SHOP_A5_reg_merchantShop_Apply_Request.js') //发布门店
const HL2 = require('../controllers/pineconecredit/reqs/Api_MERCHANT_SHOP_A5_reg_merchant_E_Shop_Apply_Request.js')//发布电商
var formidable = require('formidable');
const ST2 = require('../controllers/pineconecredit/reqs/Api_CARD_TYPE_CONTRACT_A3_Request.js')
const ST3 = require('../controllers/pineconecredit/reqs/Api_CARD_TYPE_PERIOD_A3_Request.js')
const ST4 = require('../controllers/pineconecredit/reqs/Api_CARD_TYPE_PERIOD_A1_Request.js')
const ST5 = require('../controllers/pineconecredit/reqs/Api_CARD_TYPE_PERIOD_A4_Request.js')
const ST6 = require('../controllers/pineconecredit/reqs/Api_CARD_MARKET_TYPE_A5_upCdocPdoc_Request.js');
const ST7 = require('../controllers/pineconecredit/reqs/Api_CARDMACKETAPPLY_A5_submitCardReq_Request.js')
const ST8 = require('../controllers/pineconecredit/reqs/Api_CM_BIND_SHOP_A1_Request.js')
const ST9 = require('../controllers/pineconecredit/reqs/Api_CM_BIND_CARDTYPES_A1_Request.js')
const ST10 = require('../controllers/pineconecredit/reqs/Api_CM_BINDAPPLY_A5_stopApply_Request.js')
const ST11 = require('../controllers/pineconecredit/reqs/Api_CM_BINDAPPLY_A5_passApply_Request.js')
const ST12= require('../controllers/pineconecredit/reqs/Api_CARD_MERCHANT_WORKER_A5_reg_cardmerchant_worker_Request.js')
const ST13 = require('../controllers/pineconecredit/reqs/Api_CM_BINDAPPLY_A5_submitApply_Request.js')



//卡商注册员工
router.post('/cworker', function (req, res) {
    const Loginaid = req.session.user.loginaid;
    const name = req.body.name;
    const idnumber = req.body.idnumber;
    const regphonenumber = req.body.regphonenumber;
    const password = req.body.password;
    const ptype = req.body.ptype;
    const rname = req.body.rname;
    const apiobj = new ST12();
    apiobj.setCallback(callback);
    apiobj.setMeraid(Loginaid);
    apiobj.setLoginaid(Loginaid);
    apiobj.setName(name);
    apiobj.setIdnumber(idnumber);
    apiobj.setRegphonenumber(regphonenumber);
    apiobj.setPassword(password);
    apiobj.setPtype(ptype);
    apiobj.setRname(rname);
    apiobj.setRids(ptype);

    const rv = [
        apiobj
    ];
    call(req, res, rv);
    function callback (rv ,req, res,  data) {
        res.send(data[0])
    }
});
//暂停合作
router.post('/stopc', function (req, res) {
    const Loginaid = req.session.user.loginaid;
    const sid = JSON.parse(req.body.sid);
    const rv = [];
    for(let i=0; i<sid.length; i++){
        let ipaobj = ('ipaobj' + i);
        ipaobj = new ST10();
        ipaobj.setCallback(callback);
        ipaobj.setSid(sid[i]);
        ipaobj.setLoginaid(Loginaid);
        rv.push(ipaobj)
    }
    call(req, res, rv);
    function callback (rv ,req, res, data) {
        if(data[0].status.resultcode === '0'){
            res.send({retcode : '0'});

        }else{
            res.send({retcode : '1'});
        }
    }
});
//恢复合作
router.post('/recoverc', function (req, res) {
    const Loginaid = req.session.user.loginaid;
    const sid = JSON.parse(req.body.sid);
    const rv = [];
    for(let i=0; i<sid.length; i++){
        let ipaobj = ('ipaobj' + i);
        ipaobj = new ST11();
        ipaobj.setCallback(callback);
        ipaobj.setSid(sid[i]);
        ipaobj.setLoginaid(Loginaid);
        rv.push(ipaobj)
    }
    call(req, res, rv);
    function callback (rv ,req, res, data) {
        if(data[0].status.resultcode === '0'){
            res.send({retcode : '0'});

        }else{
            res.send({retcode : '1'});
        }
    }
});
//cardid
router.post('/cardid',function (req,res) {
    req.session.card_type_id = req.body.card_type_id
    res.send({retcode : '0'})
});
//注册图形验证码
router.post('/vcode', function (req, res) {
    var code = req.body.data;
    if(code === req.session.cardcaptcha) {
        res.send({data:'0'})
    }else{
        res.send({data:'1'})
    }
});

//卡商发起邀约
router.post('/doubleajax', function (req, res) {
    const Shopaid = req.body.shopaid;
    const Bindid = req.body.bindid;
    const cardid = req.body.cardid.split(",");

    const Loginaid = req.session.user.loginaid
    const apiobj = new ST13;
    apiobj.setCallback(callback);
    apiobj.setLoginaid(req.session.user.loginaid);
    apiobj.setShopaid(Shopaid);
    apiobj.setShoptype(0);
    apiobj.setCard_type_id(cardid);
    apiobj.setBindid(Bindid);


    call(req, res, rv);
    function callback (rv ,req, res,  data) {
        res.send(data[0])
    }
});

//费率删除添加
router.post('/removeadd', function (req, res) {
    // const sid = req.body.sid.split(",");
    // const periodcount =req.body.periodcount.split(",");
    // const rate = req.body.rate.split(",");
    const Loginaid = req.session.user.loginaid
    const card_type_id = req.session.card_type_id;
    const sid = JSON.parse(req.body.sid);
    const periodcount = JSON.parse(req.body.periodcount);
    const rate = JSON.parse(req.body.rate);



    if(sid.length !== 0) {
        const rv = [];
        for(let i=0; i<sid.length; i++){
            let ipaobj = ('ipaobj' + i);
            ipaobj = new ST5();
            ipaobj.setCallback(callback1);
            ipaobj.setSid(sid[i]);
            ipaobj.setLoginaid(Loginaid);
            rv.push(ipaobj)
        }
        call(req, res, rv);
        function callback1 (rv ,req, res,  data) {
            const pv = [];
            for(let k=0; k<periodcount.length; k++){
                let apiobj = ('ipaobj' + k);
                apiobj = new ST4();
                apiobj.setCallback(callback2);
                apiobj.setCard_type_id(card_type_id);
                apiobj.setCaid(Loginaid);
                apiobj.setLoginaid(Loginaid);
                apiobj.setRate(parseInt(rate[k])/100);
                apiobj.setPeriodcount(periodcount[k]);
                pv.push(apiobj)
            }
            call(req, res, pv);
            function callback2 (rv ,req, res,  data) {
                res.send(data[0])
            }
        }
    } else {
        if (periodcount.length !== 0) {
            const cv = [];
            for (let j = 0; j < periodcount.length; j++) {
                let apiobj = ('ipaobj' + j);
                apiobj = new ST4();
                apiobj.setCallback(callback3);
                apiobj.setCard_type_id(card_type_id);
                apiobj.setCaid(Loginaid);
                apiobj.setLoginaid(Loginaid);
                apiobj.setRate(parseInt(rate[j])/100);
                apiobj.setPeriodcount(periodcount[j]);
                cv.push(apiobj)
            }
            call(req, res, cv);

            function callback3(rv, req, res, data) {
                res.send(data[0])
            }
        } else {
            res.send({status: {resultcode: '0'}})
        }
    }
});

//退出登录
router.post('/loginout',function(req,res) {
    delete req.session.user;
    return res.send('1')
});
//修改虚拟卡
router.post('/applyDetail', function (req, res) {
    const apiobj = new ST1();
    const ipaobj = new ST2();
    // const paiobj = new ST3();
    const specialobj = new ST6();

    const form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        apiobj.setCallback(callback);
        const fileFields = Object.keys(files);
        const fileArray = fileFields.map((field) => {
            let file = files[field];
            if(file.size !== 0) {
                file.fieldName = 'clog';
                apiobj.setClog(file);
            }
            apiobj.setLoginaid(req.session.user.loginaid);
            apiobj.setAid(req.session.user.loginaid);
            apiobj.setSid(req.session.fsid);
            apiobj.setTypename(fields.typename);
            apiobj.setPredict(fields.predict);
            apiobj.setCondition(fields.condition);
            apiobj.setRange(fields.range);
            apiobj.setMaintype(2);
            apiobj.setProfiles(fields.profiles);
            apiobj.setCardstate(0);
            apiobj.setOnlinestate(0);
            apiobj.setCard_type_id(req.session.card_type_id);
            ipaobj.setCp9_expirerate(fields.cp9_expirerate);
            ipaobj.setCp6_grace(fields.cp6_grace);
            ipaobj.setCp10_loseexplen(fields.cp10_loseexplen);
            ipaobj.setCp12_minpay(fields.cp12_minpay);
            ipaobj.setCp13_memberfee(fields.cp13_memberfee);
            ipaobj.setP14_mf_type(fields.p14_mf_type);
            ipaobj.setP15_mf_counts(fields.p15_mf_counts);
            ipaobj.setC17_mf_start(fields.c17_mf_start);
            ipaobj.setCp19_risk(fields.cp19_risk);
            ipaobj.setCp20_wid(fields.cp20_wid);
            ipaobj.setLoginaid(req.session.user.loginaid);
            ipaobj.setCaid(req.session.user.loginaid);
            ipaobj.setSid(req.session.ssid);
            // paiobj.setSid(req.session.tsid);
            // paiobj.setCard_type_id(req.session.card_type_id);
            // paiobj.setCaid(req.session.user.loginaid);
            // paiobj.setRate(fields.rate);
            // paiobj.setPeriodcount(fields.periodcount);
            // paiobj.setLoginaid(req.session.user.loginaid);
            specialobj.setLoginaid(req.session.user.loginaid);
            specialobj.setCard_type_id(req.session.card_type_id);
            specialobj.setCdoc(fields.cdoc);
            specialobj.setPdoc(fields.pdoc);

        });
        const rv = [
            apiobj,
            ipaobj,
            // paiobj,
            specialobj
        ];
        call(req, res, rv);
        function callback (rv ,req, res, data) {
            if(data[0].status.resultcode === '0'){
                res.redirect('/card/cardc/draft_edit?meg=0');
            }else{
                res.redirect('/card/cardc/draft_edit?meg=1');
            }
        }
    });
});
//发布门店
router.post('/publishMdform', function (req, res) {
    //const sid = req.session.sid;
    const apiobj =new HL1();
    const form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        apiobj.setCallback(callback);
        apiobj.setLoginaid(req.session.user.loginaid);
        apiobj.setMaid(req.session.user.pageList[0].COMPANY_AID);
        apiobj.setShopname(fields.shopname);
        apiobj.setTel(fields.tel);
        apiobj.setAddress(fields.address);
        apiobj.setLicensenumber(fields.licensenumber);
        let licensephotos = files["licensephotos"];
        licensephotos.fieldName = 'licensephotos';
        apiobj.setLicensephotos(licensephotos);
        let shopphotos = files["shopphotos"];
        shopphotos.fieldName = 'shopphotos';
        apiobj.setShopphotos(shopphotos);
        apiobj.setBrand(fields.brand);
        apiobj.setAreas(fields.areas);
        apiobj.setEtypeid(fields.areas);
        apiobj.setMgraid(fields.mgraid);
        apiobj.setMgrname(fields.mgrname);
        apiobj.setShopcomm(fields.shopcomm);
        apiobj.setShopstyle(fields.shopstyle);
        const rv = [
            apiobj
        ];
        call(req, res, rv);
        function callback (rv ,req, res, data) {
           if(data[0].status.resultcode=='0'){
               res.redirect('/store/tenant/publishMd?meg=1');
           }else{
               res.redirect('/store/tenant/publishMd?meg=2');
           }
        }
    });
});
//发布电商
router.post('/publishDsform', function (req, res) {
    //const sid = req.session.sid;
    const apiobj =new HL2();
    const form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        apiobj.setCallback(callback);
        apiobj.setLoginaid(req.session.user.loginaid);
        apiobj.setMaid(req.session.user.pageList[0].COMPANY_AID);
        apiobj.setEshopname(fields.eshopname);
        apiobj.setEtags(fields.etags);
        apiobj.setEip(fields.eip);
        apiobj.setEipno(fields.eipno);
        let ereginfo = files["ereginfo"];
        ereginfo.fieldName = 'ereginfo';
        apiobj.setEreginfo(ereginfo);
        let elog = files["elog"];
        elog.fieldName = 'elog';
        apiobj.setElog(elog);
        apiobj.setEshopcomm(fields.eshopcomm);
        const rv = [
            apiobj
        ];
        call(req, res, rv);
        function callback (rv ,req, res, data) {
            if(data[0].status.resultcode=='0'){
                res.redirect('/store/tenant/publishDs?meg=1');
            }else{
                res.redirect('/store/tenant/publishDs?meg=2');
            }
        }
    });
});
//提交
router.post('/apply', function (req, res) {
    var card_type_id = req.session.card_type_id
    const apiobj = new ST7();
    apiobj.setCallback(callback);
    apiobj.setCard_type_id(req.session.card_type_id);
    apiobj.setLoginaid(req.session.user.loginaid);

    const rv = [
        apiobj
    ];
    call(req, res, rv);
    function callback (rv ,req, res,  data) {
        console.log(data);
        if(data[0].status.resultcode === '0'){
            res.redirect('/card/cardc/draft_detail?meg=0');
        }else{
            res.redirect('/card/cardc/draft_detail?meg=1');
        }
    }
});
//post请求例子
// router.post('/Api_ACCOUNT_A5_check_RegPhoneNumber_Request',function (req,res) {
//     // name 回调函数名字
//     const postData = ajaxCallback(req, name);
//     call('/', req, res, postData)
//     function name (rv ,req, res,  data) {
//         //自定内容
//         res.send(data)
//     }
// })
router.post('/getmenu', function (req, res) {
    const yzredis = require('../yz_modules/redis');
    const authrole = require('../yz_modules/authrole');
    var actmod=req.body.actmod;
    yzredis.hgetall("MenuTree", (err, val) => {
        if(val){
            res.json((authrole.buildAuthRole(JSON.parse(req.session.user.pageList[0].prijson),JSON.parse(val['MenuTree'+actmod]))));
        }
    });
});
router.use(function (req,res) {
    const body = req.body
    const apiName = req.url.split('/').slice(1)[0];
    const ST = require('../controllers/pineconecredit/reqs/' + apiName + '.js');
    const apiobj =new ST();
    const keys = Object.keys(body).sort();
    keys.forEach((key) => {
        let keyU = ('set' + key)
        apiobj[keyU](body[key])
    });
    apiobj.setCallback(Callback);
    const loginaid = isNil(req.session.user) ? '' : req.session.user.loginaid;
    if(loginaid !== '') {
        apiobj.setLoginaid(loginaid)
    }
    const rv = [
        apiobj
    ];
    call(req, res, rv);
    function Callback (rv ,req, res, data) {
        var urlname = rv[0].api?rv[0].api:''
        if(urlname === 'Api_ACCOUNT_A5_login_merchant_Request' || urlname === 'Api_ACCOUNT_A5_login_cardmerchant_Request'){
            req.session.user = data[0];
        }
        res.send(data[0])
    }
});
/*查看门店详情----已经审核*/
router.post('/viewMdDetail', function (req, res) {
    const mdstate = req.query.viewu;
    const mdId = req.query.mdid;
    if(mdstate=='0'){
        res.render('Store/tenant/viewMdWait?mdid='+mdId)
    }else{
        res.render('Store/tenant/viewMdOn?mdid='+mdId)
    }
});
module.exports = router;
