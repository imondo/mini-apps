const ajax = require('./../utils/http');

const config = require('./../config/config.default');

/**
 * 节点信息
 */
function getNodes() {
  return ajax.http({
    url: `${config.oss_api}/api/address`,
    data: {
      snCode: 'WX_MIN_APP'
    },
    isFullPath: true,
  });
}

/**
 * 获取装备接口上下文
 * @param {String} url 用户中心节点路径 
 * @param {String} token
 */
function getEmsContext(url) {
  return ajax.http({
    url: `${url}/deploy`,
    isFullPath: true
  });
}

/**
 * 用户登录
 * @param {String} url 用户中心节点路径 
 * @param {Object} data 参数
 */
function login(url, data) {
  return ajax.http({
    url,
    data,
    method: 'POST',
    canCatch: true,
    isFullPath: true
  });
}

/**
 * 获取用户信息
 */
function getUer() {
  return ajax.http({
    url: '/api/userinfo'
  })
}

module.exports = {
  login,
  getNodes,
  getUer,
  getEmsContext
};
