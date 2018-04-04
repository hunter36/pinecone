/**
 * Created by yz on 2018-1-12.
 */
exports.getParameterJson = getParameterJson;
exports.buildJqgridParameter = buildJqgridParameter;
exports.getParameterName = getParameterName;
function getParameterJson(callback) {
    const yzredis = require('./redis');
    yzredis.hgetall("parameter", callback);
}
function buildJqgridParameter(array) {
    var ps=JSON.parse(array);
    var json={};
    for(var i in ps) {
        json[ps[i].pcode]=ps[i].pname;
    }
    return json;
}
function getParameterName(array,callback) {
    const yzredis = require('./redis');
    yzredis.hgetall("parameter", function (err, val){
        var ret={};
        if(array.length>0){
            for(var i in array){
                var ptype=array[i]
                var jsonarray=JSON.parse(val[ptype]);
                var json={};
                for(var j in jsonarray){
                    var p=jsonarray[j];
                    json[p.pcode]=p.pname;
                }
                ret[ptype]=json;
            }
            callback(ret);
        }
    });
}



