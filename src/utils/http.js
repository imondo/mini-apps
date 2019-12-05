const Token = require('./auth');
const Toast = require('./Toast');
const Storage = require('./Storage');
const env = require('./../config/env');
const config = require('./../config/config.default');

console.log(env);

class Ajax {
  /**
   * @param {boolean} isJson 是否需要json传入参数
   * @param {object} header header
   * @param {string} method GET | POST | DELETE | PUT
   * @param {string} url 请求接口
   * @param {object} data 请求参数
   * @param {boolean} loading 是否需要loading显示
   * @param {boolean} canCatch 是否需要处理异常，通过catch业务处理逻辑，不通过errProcess方法弹出异常信息
   * @param {boolean} isFullPath 是否全路径api
   */
  http({
    isJson = false,
    header = {},
    method = 'GET',
    url = '',
    data = {},
    loading = true,
    canCatch = false,
    isFullPath = false
  }) {
    return new Promise((resolve, reject) => {
      const token = this.headerToken();
      const contentType = this.setContentType(isJson);
      const _header = Object.assign({}, header, contentType, token);
      const _method = method.toLocaleUpperCase();
      const _url = this.setApiContext(isFullPath, url);
      loading && wx.showLoading({ title: '加载中...' });      
      this.checkNetWork().then(hasNetWork => {
        if (!hasNetWork) {
          Toast.msg({
            title: '网络异常'
          });
          reject();
        }
      });
      wx.request({
        url: _url,
        data,
        header: _header,
        method: _method,
        complete: res => {
          loading && wx.hideLoading();

          console.log('请求参数：', data);

          console.log('返回数据：', res);

          if (res.errMsg.indexOf('request:fail') > -1) {
            this.errProcess(res);
            return;
          }

          if (res.statusCode !== 200) {
            if (!canCatch) {
              this.errProcess(res);
            }
            reject(res);
          } else {
            resolve(res.data);
          }
        }
      });
    });
  }

  setContentType(isJson) {
    const contentType = isJson
      ? 'application/json'
      : 'application/x-www-form-urlencoded';
    return { 'Content-Type': contentType };
  }

  headerToken() {
    const token = Token.get();
    return token ? { Authorization: token } : null;
  }

  setApiContext(isFullPath, url) {
    const emsApi = env ? config.ems_api : Storage.get('emsApi');
    const _url = isFullPath ? url : (emsApi + config.default_api + url);
    return _url;
  }

  errProcess(response) {
    const { errMsg, statusCode, data } = response;
    let message = statusCode ? data.msg || data.message : (errMsg.includes('request:fail') ? '网络异常' : errMsg);
    const token = this.headerToken();
    if (statusCode === 401 || !token) {
      message = '您没有操作权限';
      this.logout();
    }
    Toast.msg({
      title: message
    });
  }

  checkNetWork() {
    return new Promise(resolve => {
      wx.getNetworkType({
        success: res => {
          const networkType = res.networkType;
          if (networkType === 'none' || networkType === 'unknown') {
            resolve(false);
          } else {
            resolve(true);
          }
        },
        fail: () => {
          resolve(false);
        }
      });
    });
  }

  logout() {
    wx.clearStorage();
    wx.reLaunch({
      url: '/pages/login/index'
    });
  }
}

module.exports = new Ajax();
