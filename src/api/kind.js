import request from './request.js'

// 登录
function login (data){
    return request({
        method:'post',
        url:'/api/login',
        data
    })
}
// 注册
function reg (data){
    return request({
        method:'post',
        url:'/Api?s=/api/User/appRegister',
        data
    })
}
// 验证码登录发送验证码
function getCode (data){
    return request({
        method:'post',
        url:'/api/user/sendRegisterSMSCode',
        data
    })
}

// 手机号验证登录
function mobert (data){
    return request({
        method:'post',
        url:'/Api?s=/api/User/appMobileLogin',
        data
    })
}

// 注册获取验证码
function getIndex (data){
    return request({
        method:'post',
        url:'/api/index',
        data
    })
}

//获取秒杀列表商品
function secKillList(data){
    return request({
        method:'post',
        url:'/api/comSeckill/localList',
        data
    })
}
//获取分类页商品
function getTotalInvite(data){
    return request({
        method:'post',
        url:'api/signIncome/getTotalInvitation',
        data
    })
}
//搜索查询商品
function getSearch(data){
    return request({
        method:'post',
        url:'/Api?s=/api/Index/searchGoodsListByCategory',
        // traditional:true,
        data
    })
}

//申请提现
function getCash(data){
    return request({
        method:'post',
        url:'api/userBillCashout/insert',
        data
    })
}
//签到收益页面
function getEarn(data){
    return request({
        method:'post',
        url:'api/signIncome/getSignIncomePage',
        data
    })
}
export default{
    login,
    reg,
    getIndex,
    getCode,
    secKillList,
    getTotalInvite,
    getCash,
    getEarn
}