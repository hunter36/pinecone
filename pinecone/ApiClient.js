// 注意  详细文档在 http://visionmedia.github.io/superagent/

var superagent = require('superagent');
var config = require('./config.js');

const methods = ['get', 'post', 'put', 'patch', 'del'];

function formatUrl(path) {
    const url = 'http://' + config.apiHost + ':' + config.apiPort + '/' + config.apiPath ;
    console.log(url);
    return url;
}

class ApiClient {
    constructor() {
        methods.forEach((method) =>
            this[method] = (path, {data, params, attach, field, cookie} = {}) => new Promise((resolve, reject) => {
                const url = formatUrl(path);
                const request = superagent[method](url);
                console.log(data.apiId);
                if(method == 'post') {
                    request.type('form');
                }
                if (params) {
                    request.query(params);
                }
                if (cookie) {
                    request.set('cookie', cookie);
                }
                /**
                 * 官方文档典型调用
                 request
                 .post('/upload')
                 .attach('image1', 'path/to/felix.jpeg')
                 .attach('image2', imageBuffer, 'luna.jpeg')
                 .field('caption', 'My cats')
                 .then(callback);
                 */

                var canData = true ;
                if (attach) {
                    canData = false;

                    attach.forEach(file => request.attach(file.fieldName, file.path,file.name));
                }
                if (field) {
                    canData = false;

                    // var files = {};
                    // var _data = {};
                    // for(var i =0 ; i <data.length ; i++){
                    //     var t =data[i];
                    //     if (t instanceof File){s
                    //         files.push(t);
                    //         request.attach(t.fieldName, t.path,t.name)
                    //     }else{
                    //         _data.push(t);
                    //     }
                    // }

                    //参考:
                    // if (data.additiondoc){
                    //     request.attach(data.additiondoc.fieldName, data.additiondoc.path,data.additiondoc.name);
                    //     data.additiondoc ="";
                    // }


                    //最笨的办法,找出所有文件字段,依次贴上
                    //特别注意:必须把文件字段重写清空,避免服务端JSON解析错误
                    //TODO 用 attach 传输文件
                    //by lqf at 20180117
                    field.forEach(item => {
                        for(var keyx in item) {
                            if(item.hasOwnProperty(keyx)) {
                                var valuex = item[keyx];
                                if (valuex instanceof Object){
                                    for(var key in valuex) {
                                        var value = valuex[key];
                                        if (value.fieldName && value.path && value.name){
                                            request.attach(value.fieldName, value.path,value.name);
                                            valuex[key] = "";//把文件字段重写清空,避免服务端JSON解析错误
                                        }else{
                                            //Nothing
                                        }
                                    }
                                }

                            }
                        }
                    });


                    field.sort((item1,item2) => {
                        return item1.key > item2.key
                    })
                    var sign = ""
                    field.forEach(ob => {
                        sign += ob.value
                    })
                    var crypto = require('crypto-js');
                    var signValue = crypto.MD5(sign + 'yztx').toString();
                    field.push({key: "sign",value:signValue})
                    field.forEach(item => {
                        request.field(item.key, JSON.stringify(item.value))
                    });
                    // console.log(field);
                }
                //加上else request.field 后不能同时调用 request.send : add by lqf .send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()
                if (!canData && data){
                    console.error('警告:Data提交已经被忽略....' );
                }
                if (canData && data) {
                    var keys = Object.keys(data).sort();
                    var signStr = '';
                    keys.forEach((key) => {
                        signStr += data[key];
                    });
                    var crypto = require('crypto-js');
                    var signValue = crypto.MD5(signStr + 'yztx').toString();
                    data.sign = signValue;
                    console.log(data);
                    request.send(data);
                }

                if(config.needConsole) {
                    var getUrl = url + '?';
                    if(data) {
                        var keys = Object.keys(data);
                        keys.forEach((key,index) => {
                            getUrl += (key + '=' + data[key]);
                            if(index != keys.length - 1) {
                                getUrl += '&';
                            }
                        });
                    }
                    console.log(getUrl);
                }

                request.end((err, {body,text} = {}) => {
                    if(config.needConsole) {
                        console.log("调用返回body:"+body);
                        if (text && text.length>0){
                            console.log("调用返回text[说明服务器是用text/plain; charset=UTF-8]返回的"+text);
                        }
                    }
                    if (text && text.length>0
                        &&
                        JSON.stringify(body) === JSON.stringify({})){
                        body = JSON.parse(text);
                    }
                    if (err || !(body && text)){
                        console.error("请求失败:"+err);
                    }
                    err ? reject(body || err) : resolve(body)
                });
            }));
    }

    empty() {
    }
}
// export default ApiClient;
module.exports = ApiClient;