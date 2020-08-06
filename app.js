const Storage = require('./utils/Storage.js');
const Toast = require('./utils/Toast.js');
const Dom = require('./utils/dom.js');
const dev = require('./config/env.js');
const auth = require('./utils/auth.js');

App({
  onLaunch: function () {
    this.expendPage();
    // 登录
    wx.login({
      success: res => {
        console.log(res);
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          console.log(res);
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    dev,
    userInfo: null,
    node: null // 节点信息
  },
  expendPage() {
    const originalPage = Page;
    Page = function(config) {
      config.$storage = Storage;
      return originalPage(config);
    }
  },
  Storage, // 本地缓存
  Toast, // 提示
  Dom // DOM信息
})