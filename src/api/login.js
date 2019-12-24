const ajax = require('./../utils/http');

/**
 * 用户登录
 * @param {String} url 节点路径 
 * @param {Object} data 参数
 */
function login(url, data) {
  // return ajax.http({
  //   url,
  //   data,
  //   method: 'POST',
  //   canCatch: true,
  //   isFullPath: true
  // });
  return new Promise(resolve => {
    resolve(
      {
        token: 'token'
      }
    )
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
  getUer
};
