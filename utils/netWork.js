import regeneratorRuntime from './../static/vendors/regenerator-runtime/runtime-module.js';
import toast from './toast';
import handleLocal from './local';

const app = getApp();
console.log(app);

const request = async function ({ url, method = 'GET', data = {}, header = {}, isJson = false, hasToken = true, isLoading = true }) {
  let global = await globalConfig();

  let contentType = isJson ? 'application/json' : 'application/x-www-form-urlencoded';
  let _header = Object.assign(header, { 'Content-Type': contentType }, hasToken ? { 'Authorization': global.Authorization } : {});

  let hasNetWork = await checkNetWork();

  if (!hasNetWork) {
    toast.msg('网络异常', {});
    return false;
  }

  if (!loginOut(global)) {
    return false;
  };

  isLoading && wx.showLoading({ title: '加载中...' });

  let isLogin = url.includes('login');

  return new Promise((resolve, reject) => {
    const response = {};
    wx.request({
      url: app.process_env.API_ROOT + url,
      header: _header,
      method,
      data,
      dataType: 'json',
      success: res => {
        if (res.data.code === 1) {
          response.success = res.data.data;
        } else {
          response.fail = res.data;
        }
      },
      fail: error => response.fail = error,
      complete: res => {
        isLoading && wx.hideLoading();
        console.log('请求参数：', data);

        console.log('返回数据：', res);
        if (response.success) {
          resolve(response.success);
        } else {
          let message = res.statusCode ? res.data.msg : res.errMsg;
          totastMsg({
            statusCode: res.statusCode || 1001,
            message
          });
          reject(response.fail);
        }
      }
    })
  })
}

const globalConfig = async function () {  
  let token = await handleLocal.get({ key: 'TokenInfo' });
  let Authorization= null;
  if (token) {
    let { token_type, access_token } = token;
    Authorization = `${token_type} ${access_token}`;
  }
  return { Authorization };  
}

const totastMsg = function ({statusCode, message}) {
  switch (statusCode) {
    case 502:
      toast.msg('服务器错误', {});
      break;
    case 401:
      toast.msg('无权访问, 请重新登录', {
        duration: 2000,
        callback: () => {
          localLoginOut();
        }
      });
      break;
    case 404:
      toast.msg('接口有误', {});
      break;
    case 1001:
      let _msg = message.includes('timeout') ? '请求超时' : message;
      toast.msg(_msg, {});
      break;
    default:
      toast.msg(message, {});
      break;
  }
}

const checkNetWork = function () {
  return new Promise(resolve => {
    wx.getNetworkType({
      success: res => {
        let networkType = res.networkType;
        if (networkType === 'none' || networkType === 'unknown') {
          resolve(false)
        } else {
          resolve(true)
        }
      },
      fail: () => {
        resolve(false)
      }
    })
  })
}

const loginOut = function (global) {
  if (!global.iportalAjaxURL || !global.ajaxURL) {
    toast.msg('请重新登录', {
      duration: 2000,
      callback: () => {
        localLoginOut();
      }
    });
    return false;
  } else {
    return true;
  }
}

const localLoginOut = function () {
  handleLocal.get({key: 'TokenInfo'})
  handleLocal.clear('TokenInfo');
  handleLocal.clear('userInfo');
  const url = '/pages/login/login';
  wx.reLaunch({ url });
}

export default request;
