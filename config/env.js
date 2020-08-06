/**
 * 判断小程序运行环境
 */

const systemInfo = wx.getSystemInfoSync();

module.exports = true; // true 开发环境 false 生产环境
