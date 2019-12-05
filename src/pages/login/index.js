const ENCRYPT_KEY = 'lianyitech';
const CryptoJS = require('./../../lib/crypto-js/index.js');
const Notify = require('./../../miniprogram_npm/vant-weapp/notify/notify')
  .default;

const api = require('./../../api/login.js');
const auth = require('./../../utils/auth.js');
const app = getApp();
Page({
  data: {
    node: null,
    loading: false,
    username: '',
    password: ''
  },
  onShow() {
    this.init();
  },
  init() {
    const isLogin = auth.checkIsLogin();
    if (isLogin) return; 
    // 设置导航title
    wx.setNavigationBarTitle({
      title: '登录'
    });
    app.Storage.get('node').then(node => {
      this.setData({ node: node || null });
    });
  },
  handleSelectNode() {
    wx.navigateTo({
      url: '/pages/node/index'
    });
  },
  changeUser(e) {
    const { detail: { value } } = e;
    this.setData({
      username: value
    });
  },
  changePassword(e) {
    const { detail: { value } } = e;
    this.setData({
      password: value
    });
  },
  // 用户名加密
  cryptoJSName() {
    const { username, password } = this.data;
    // const keyHex = CryptoJS.enc.Utf8.parse(ENCRYPT_KEY);
    // const encrypted = CryptoJS.DES.encrypt(username, keyHex, {
    //   mode: CryptoJS.mode.ECB,
    //   padding: CryptoJS.pad.Pkcs7
    // });
    // const name = encrypted.toString();
    return { username, password };
  },
  handleLogin() {
    const canDo = this.valdateForm();
    if (!canDo) return;
    const params = this.cryptoJSName();
    const { node: { loginUrl, nodeUrl }, loading } = this.data;
    this.setData({
      loading: true
    });
    api.login(loginUrl, params).then(res => {
      this.setData({
        loading: false
      });
      if (res.access_token) {
        // 缓存token信息
        auth.set(res).then(() => {
          api.getEmsContext(nodeUrl).then(res => {
            this.cacheEmsContext(res);
            wx.switchTab({
              url: '/pages/index/index'
            });
          })
        });
      }
    }).catch(error => {
      const { data: { message } } = error;
      Notify(message);
      this.setData({
        loading: false
      });
    });
  },

  cacheEmsContext(data) {
    const ems = data.find(v => v.appType === '装备管理');
    app.Storage.set('emsApi', ems ? ems.url : '');
  },

  /**
   * 验证信息
   */
  valdateForm() {
    const { node, username, password } = this.data;

    if (!username || !password) {
      Notify('请输入用户名和密码');
      return false;
    }

    if (!node) {
      Notify('请选择登录节点');
      return false;
    }

    return true;
  }
});
