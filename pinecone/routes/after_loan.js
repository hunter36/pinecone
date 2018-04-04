const express = require('express');
const router = express.Router();
const call = require('../controllers/common.js');

//-------------------------贷后中心---------------------

//-------贷后中心--> 催收团队设置 ---------------
router.get('/cs_team', function (req, res) {
    res.render('Card/after_loan/cs_team');
});

//-------贷后中心--> 催收团队设置 -->添加团队弹窗---------------
router.get('/team_addPopup', function (req, res) {
    res.render('Card/after_loan/team_addPopup');
});

//-------贷后中心--> 催收团队设置 -->成员管理弹窗---------------
router.get('/team_memberPopup', function (req, res) {
    res.render('Card/after_loan/team_memberPopup');
});


//-------贷后中心-->催收计划管理---------------
router.get('/cs_plan', function (req, res) {
    res.render('Card/after_loan/cs_plan');
});

//-------贷后中心-->催收计划管理-->新建催收计划弹窗---------------
router.get('/cs_plan_addPopup', function (req, res) {
    res.render('Card/after_loan/cs_plan_addPopup');
});

//-------贷后中心-->催收计划管理-->修改催收计划弹窗---------------
router.get('/cs_plan_editPopup', function (req, res) {
    res.render('Card/after_loan/cs_plan_editPopup');
});

//-------贷后中心-->待分配催收计划的催收任务---------------
router.get('/cs_dfp', function (req, res) {
    res.render('Card/after_loan/cs_dfp');
});

//-------贷后中心-->待分配催收计划的催收任务-->详情---------------
router.get('/cs_dfp_detail', function (req, res) {
    res.render('Card/after_loan/cs_dfp_detail');
});

//-------贷后中心-->已分配未催回的催收任务-->-短信催收任务 ---------------
router.get('/wch_message', function (req, res) {
    res.render('Card/after_loan/wch_message');
});

//-------贷后中心-->已分配未催回的催收任务-->-短信催收任务 详情 ---------------
router.get('/wch_msg_detail', function (req, res) {
    res.render('Card/after_loan/wch_msg_detail');
});

//-------贷后中心-->已分配未催回的催收任务-->-人工催收任务 ---------------
router.get('/wch_artificial', function (req, res) {
    res.render('Card/after_loan/wch_artificial');
});

//-------贷后中心-->已分配未催回的催收任务-->-人工催收任务-->待分配催收专员的催收任务 详情 ---------------
router.get('/wch_art_dfpDetail', function (req, res) {
    res.render('Card/after_loan/wch_art_dfpDetail');
});

//-------贷后中心-->已分配未催回的催收任务-->-人工催收任务-->已分配催收专员的催收任务 详情 ---------------
router.get('/wch_art_yfpDetail', function (req, res) {
    res.render('Card/after_loan/wch_art_yfpDetail');
});


//-------贷后中心--> 已催回的催收任务 ---------------
router.get('/cs_ych', function (req, res) {
    res.render('Card/after_loan/cs_ych');
});

//-------贷后中心--> 已催回的催收任务 --> 短信催回的任务详情 ---------------
router.get('/cs_ych_message', function (req, res) {
    res.render('Card/after_loan/cs_ych_message');
});

//-------贷后中心--> 已催回的催收任务 --> 人工催回的任务详情 ---------------
router.get('/cs_ych_artificial', function (req, res) {
    res.render('Card/after_loan/cs_ych_artificial');
});

//-------贷后中心--> 我的催收任务 ---------------
router.get('/myTask', function (req, res) {
    res.render('Card/after_loan/myTask');
});

//-------贷后中心--> 我的催收任务 --> 详情 ---------------
router.get('/myTask_detail', function (req, res) {
    res.render('Card/after_loan/myTask_detail');
});

//-------贷后中心--> 我的催收任务 --> 详情 ---------------
router.get('/my_historyTask', function (req, res) {
    res.render('Card/after_loan/my_historyTask');
});

//-------贷后中心--> 我的催收任务 --> 详情 ---------------
router.get('/my_history_detail', function (req, res) {
    res.render('Card/after_loan/my_history_detail');
});




module.exports = router;