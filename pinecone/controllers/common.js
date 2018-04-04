/**
 * Created by lqf on 17-11-29.
 */
/*import {
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
} from '../helper';*/
const  helper = require('../helper.js')
const CallObj = require('./callobject.js');
const ApiClient = require('../ApiClient.js');
var apiClient = new ApiClient();
/**
 *
 * @param view 待渲染的视图
 * @param res  nodejs 的返回对象
 * @param rv 数组: 待用API和参数
 */
function callService(/*view,*/req,res,rv) {
    const fs =   new Array();
    rv.forEach(function(entry) {
        //警告,这里直接用req,因为原来apiClient里面会直接调用entry.data ; entry.field ....
        fs.push(apiClient.post(entry.api, entry));
    });
    Promise.all(fs).then(
        success => {
            const allSuccess = /*helper.*/checkRetcode(success);
            // callback(rv ,req, res, success);
            var method = req.method ;
            if (method =='GET'){
                allSuccess ? fillRenderData(req,res ,success,rv):debugError(success);
            }else{
                callback(rv ,req, res, success);
            }

        },
        fail =>{
            console.log('error')
        });
}

function checkRetcode(success){
    for(var i=0;i<success.length; i++){
        if (success[i].status.resultcode!='0'){
            return false;
        }
        
    }
    return true;
}

function debugError(success){
    console.log("调用有错误");
    for(var i=0;i<success.length; i++){
        if (success[i].status.resultcode!='0'){
            console.error("接口"+s.apiId+"调用失败,错误是:"+s.status.resultmssage)
        }
    }
}

function callback(rv, req, res,  success) {
    try {
        rv[0].callback(rv,req, res, success);
    }catch(e){
        console.error("回调出现错误:" + e);
    }


}

function fillRenderData(req,res,success,rv) {

    var renderData = {};
    for (var i = 0 ; i < success.length ; i++){
        var k =rv[i].render;
        //var v =success[i].pageList;
        var v =success[i];
        renderData[k]= v;
    }
    rv[0].callback(rv,req, res, renderData);
    return;
}

module.exports = callService;
