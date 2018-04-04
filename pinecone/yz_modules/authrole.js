/**
 * Created by yz on 2018-1-12.
 */
exports.buildAuthRole = buildAuthRole;
exports.buildAuthButton = buildAuthButton;
function buildAuthRole(prijson,MenuTree) {
    var ret=[];
   for(var i in MenuTree){
       var mt = MenuTree[i];
       for(var j in prijson){
            var pj=prijson[j];
            if(pj.actid==mt.actid){
                ret.push(mt);
                if(mt.subMenu){
                    var subMenu=buildAuthRole(prijson,mt.subMenu);
                    mt.subMenu=subMenu;
                }
            }
       }
   }
   return ret;
}
function buildAuthButton(buttons,prijson) {
    var ret={};
    for(var key in buttons) {
        var val=buttons[key];
        for (var j in prijson) {
            var pj = prijson[j];
            if (pj.actid == key) {
                ret[key] = val;
                break;
            }
        }
    }
    return ret;
}



