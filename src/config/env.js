/**
 * 判断小程序运行环境
 */

const systemInfo = wx.getSystemInfoSync();

module.exports = false; // devtools 开发环境 其他为生产环境
