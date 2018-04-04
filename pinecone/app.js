var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var RedisStore = require('connect-redis')(session);
var cookieParser = require('cookie-parser');
var shareRoutes = require('./routes/ShareIndex');
var storeRoutes = require('./routes/StoreIndex');
var assent = require('./routes/assent');
var cardc = require('./routes/cardc');
var cooperation = require('./routes/cooperation');
var credit = require('./routes/card_order');
var security = require('./routes/security');
var cardRoutes = require('./routes/CardIndex');
var operator = require('./routes/operator');
var tenant = require('./routes/tenant');
var feco = require('./routes/feco');
var orderCent = require('./routes/orderCent');
var accountSh = require('./routes/accountSh');


var config = require('./config');
var favicon = require('serve-favicon');
var ueditor = require("ueditor");
import {PIC_NEWS,PIC_ORGAN,PIC_DAILYSTAR,PIC_AD,FILE_USER,PIC_GOODS,PIC_HALL,PIC_TALENTTYPE,PIC_TALENT,PIC_COMMITEE,getFilePath,isNil,NEWSTYPE_TEXT,NEWSTYPE_PIC,NEWSTYPE_VIDEO,PIC_WECHAT} from './helper';

var app = express();

// 设置 Cookie,定义cookie解析器
app.use(cookieParser('yz__'));
app.use(session({
    store: new RedisStore({
        host: config.redisHost,
        port: config.redisPort,
        db: 11,
        pass: 'yz123qwe'
    }), cookie: {
        secure: false,
        maxAge: 1000 * 60 * 60 * 24
    },
    resave: false,
    saveUninitialized: false,
    secret: 'keyboard cat'
}));

// view engine setup
app.use(favicon(path.join(__dirname,'public','img','pinecone.ico')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// ueditor 上传配置
app.use("/ueditor/ue", ueditor(path.join(__dirname, 'public'), function (req, res, next) {
    //客户端上传文件设置
    var imgDir = '/img/ueditor/';
    var ActionType = req.query.action;
    if (ActionType === 'uploadimage' || ActionType === 'uploadfile' || ActionType === 'uploadvideo') {
        var file_url = imgDir;//默认图片上传地址
        /*其他上传格式的地址*/
        if (ActionType === 'uploadfile') {
            file_url = '/file/ueditor/'; //附件
        }
        if (ActionType === 'uploadvideo') {
            file_url = '/video/ueditor/'; //视频
        }
        res.ue_up(file_url); //你只要输入要保存的地址 。保存操作交给ueditor来做
        res.setHeader('Content-Type', 'text/html');
    }
    //  客户端发起图片列表请求
    else if (req.query.action === 'listimage') {
        var dir_url = imgDir;
        res.ue_list(dir_url); // 客户端会列出 dir_url 目录下的所有图片
    }
    // 客户端发起其它请求
    else {
        // console.log('config.json')
        res.setHeader('Content-Type', 'application/json');
        res.redirect('/ueditor/nodejs/config.json');
    }
}));



app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// set globals
app.use(function (req,res,next) {

    app.locals.islogin = !isNil(req.session.user);
    app.locals.username = isNil(req.session.user) ? '' : req.session.user.regphonenumber;
    app.locals.loginaid = isNil(req.session.user) ? '' : req.session.user.loginaid;
    app.locals.captcha = isNil(req.session.captcha) ? '' : req.session.captcha;
    app.locals.caid = isNil(req.session.user) ? '' : req.session.user.caid;
    app.locals.imgurl = config.imgUrl;

    next();
} );
app.use(function (req, res, next) {
    var url = req.originalUrl;
    if (url.indexOf("/store")>=0) {
        if(url !== '/store/sign_in' && url !== '/store/sign_up'){
            if ( isNil(req.session.user)) {
                return res.redirect("/store/sign_in");
            }else{
                if((config.accounttypestore).indexOf(req.session.user.pageList[0].accounttype)<0){
                    return res.redirect("/store/sign_in");
                }
            }
        }
        next();
    }else if (url.indexOf("/card")>=0) {
        if(url !== '/card/sign_in' && url !== '/card/sign_up'){
            if ( isNil(req.session.user)) {
                return res.redirect("/card/sign_in");
            }else{
                if((config.accounttypecard).indexOf(req.session.user.pageList[0].accounttype)<0){
                    return res.redirect("/card/sign_in");
                }
            }
        }
        next();
    }else{
        next();
    }

});
app.use('/', shareRoutes);
app.use('/card/assent', assent);
app.use('/card/cardc', cardc);
app.use('/card/cooperation', cooperation);
app.use('/card/credit', credit);
app.use('/card/security', security);
app.use('/card', cardRoutes);

app.use('/store', storeRoutes);
app.use('/store/operator', operator);//商户方员工--操作员
app.use('/store/tenant', tenant);//商户-我的店铺
app.use('/store/feco', feco);//商户-合作中心
app.use('/store/orderCent', orderCent);//商户-订单中心
app.use('/store/accountSh', accountSh);//商户-账户中心



require('./routes/route.js')(app);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
