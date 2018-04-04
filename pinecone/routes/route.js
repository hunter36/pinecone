/**
 * Created by yz on 2018-1-11.
 */
module.exports = function(app) {
    app.use('/store', require('./StoreIndex'));
    app.use('/card', require('./CardIndex'));
    app.use('/api',require('./interfaces'));
    /****卡商****/
    app.use('/card/assent', require('./assent'));//卡商-资金管理
    app.use('/card/cardc', require('./cardc'));//卡商-虚拟卡
    app.use('/card/cooperation', require('./cooperation'));//卡商-合作
    app.use('/card/credit', require('./card_order'));//卡商-订单中心
    app.use('/card/security', require('./security'));//卡商-安全中心
    app.use('/card/card_bill', require('./card_bill'));//卡商-账单中心
    app.use('/card/card_operator', require('./card_operator'));//卡商-操作员中心
    app.use('/card/after_loan', require('./after_loan'));//卡商-贷后中心
    /*服务商*/
    app.use('/store/operator', require('./operator'));//商户方员工--操作员
    app.use('/store/tenant', require('./tenant'));//商户-我的店铺
    app.use('/store/feco', require('./feco'));//商户-合作中心
    app.use('/store/orderCent', require('./orderCent'));//商户-订单中心
    app.use('/store/accountSh', require('./accountSh'));//商户-账户中心

};