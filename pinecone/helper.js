import config from './config';
import _ from 'lodash';
//文件类型
const PIC_NEWS = 1;   //新闻
const PIC_ORGAN = 2;  //组织
const PIC_DAILYSTAR = 3; //每日之星
const PIC_AD = 4;  // 广告
const FILE_USER = 5; //用户

const PIC_GOODS = 6; //商品
const PIC_HALL = 7; //推荐场馆
const PIC_TALENTTYPE = 8; //人才库分类
const PIC_TALENT = 9; //人才库
const PIC_COMMITEE = 10; //教练委员会

const NEWSTYPE_TEXT = 'word';
const NEWSTYPE_PIC = 'pic';
const NEWSTYPE_VIDEO = 'video';

const PIC_WECHAT = 11; //微信pc支付


/**
 * 判断对象是否为空或者未定义
 * @param object
 * @returns {boolean} true 为空，false 不为空
 */
const isNil = (object) => {
    return _.isNil(object);
};

/**
 * 根据文件类型拼接文件绝对路径
 * @param fileType PIC_NEWS,PIC_ORGAN,PIC_DAILYSTAR,PIC_AD,FILE_USER 文件类型之一
 * @returns {string} 文件绝对路径
 */
const getFilePath = (fileType) => {
    let webHost = ''
    if(process.env.NODE_ENV == 'development') {
        webHost = config.apiHost + ':' + config.apiPort
    } else {
        webHost = config.domain
    }
    let fileAbPath = 'http://' + webHost + '/' + config.fileRelativePath;
    switch (fileType) {
        case PIC_NEWS:
            fileAbPath += ('/' + config.newsPath + '/');
            break;
        case PIC_ORGAN:
            fileAbPath += ('/' + config.organizationPath + '/');
            break;
        case PIC_DAILYSTAR:
            fileAbPath += ('/' + config.dailystarPath + '/');
            break;
        case PIC_AD:
            fileAbPath += ('/' + config.adPath + '/');
            break;
        case FILE_USER:
            fileAbPath += ('/' + config.userPath + '/');
            break;
        case PIC_GOODS:
            fileAbPath += ('/' + config.goodsPath + '/');
            break;
        case PIC_HALL:
            fileAbPath += ('/' + config.hallPath + '/');
            break;
        case PIC_TALENTTYPE:
            fileAbPath += ('/' + config.talenttypePath + '/');
            break;
        case PIC_TALENT:
            fileAbPath += ('/' + config.talentPath + '/');
            break;
        case PIC_COMMITEE:
            fileAbPath += ('/' + config.committeePath + '/');
            break;
        case PIC_WECHAT:
            fileAbPath += ('/' + config.wechatPath + '/');
            break;
        default:
            break;
    }
    return fileAbPath;
};

/**
 * 格式化api请求数据。例：['a','b','c'],{a : '1', b : '2'} => {a : '1',b : '2', c : ''}
 * @param params 数组，最终对象的keys
 * @param dataSource 源数据
 * @returns {{}} 目标数据
 */
const formatRequestParams = (params,dataSource) => {
    if(_.isNil(params) || _.isNil(dataSource)) {
        return {};
    }
    const data = {};
    for (let key of params) {
        if(Object.prototype.hasOwnProperty.call(dataSource,key)) {
            data[key] = _.isNil(dataSource[key]) ? '' : dataSource[key];
        } else {
            data[key] = '';
        }
    }
    return data;
};

/**
 * 删除本地缓存文件，可删除一个或多个。当删除一个文件时，files为单个file对象，当删除多个文件时，files为file数组
 * @param files 文件对象,可删除一个或多个
 */
const deleteTmpFile = (files) => {

    const deleteFile = (file) => {
        const fs = require('fs');
        fs.exists(file.path, function (exists) {
            if (exists) {
                fs.unlinkSync(file.path);
            }
        });
    };

    if(_.isArray(files)) {
        files.forEach(file => {
            deleteFile(file);
        });
    } else {
        deleteFile(files);
    }
};

/**
 * 为origin的字段添加默认值，例如：origin : {id : 1} defaults : {page : 1,pagesize : 10},
 * 调用方法后，origin变为 {id : 1,page : 1,pagesize : 10},若origin和defaults拥有同一个字段，origin的值会覆盖defaults的值
 * @param origin
 * @param defaults
 */
const setDefaults = (origin,...defaults) => {
    //doc: https://lodash.com/docs/4.17.4#defaults
    return _.defaults(origin,...defaults);
};

/**
 * 检查是否所有对象的retcode都为0,全部为0时返回true，否则返回false
 * @param results
 * @returns {boolean}
 */
const checkRetcode = (...results) => {
    return _.every(...results,{'retcode' : 0})
};

const isObjectEmpty = (obj) => {
    return typeof obj == 'undefined' || !obj;
};
/**
 * md5加密
 * @param data
 * @returns {*}
 */
const md5 = (data) => {
    var crypto = require('crypto-js');
    return crypto.MD5(data).toString();
};


//get client ip
const getClientIp = (req) => {
    var ip = req.headers['x-forwarded-for'] ||
        req.ip ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress || '';
    if(ip.split(',').length>0){
        ip = ip.split(',')[0]
    }
    return ip;
};


//ajax
const ajaxCallback = (req, nameCallback) => {
    const body = req.body
    const apiName = req.url.split('/').slice(1)[0];
    const ST = require('./controllers/pineconecredit/reqs/' + apiName + '.js');
    const apiobj = new ST();
    const keys = Object.keys(body).sort();
    keys.forEach((key) => {
        let keyU = ('set' + key);
        apiobj[keyU](body[key])
    });
    apiobj.setCallback(nameCallback);
    const loginaid = isNil(req.session.user) ? '' : req.session.user.loginaid;
    if(loginaid !== '') {
        apiobj.setLoginaid(loginaid)
    }

    const rv = [
        apiobj
    ];
    return rv;
};
module.exports = {PIC_NEWS,PIC_ORGAN,PIC_DAILYSTAR,PIC_AD,FILE_USER,PIC_GOODS,PIC_HALL,PIC_TALENTTYPE,PIC_TALENT,PIC_COMMITEE,isNil,getFilePath,formatRequestParams,deleteTmpFile,setDefaults,checkRetcode,md5,isObjectEmpty,NEWSTYPE_TEXT,NEWSTYPE_PIC,NEWSTYPE_VIDEO,getClientIp,PIC_WECHAT,ajaxCallback};