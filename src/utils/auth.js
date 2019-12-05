const TOKEN_KEY = 'TOKEN';

class Token {
  set(token) {
    return new Promise(resolve => {
      wx.setStorage({
        key: TOKEN_KEY,
        data: token,
        complete: () => {
          resolve();
        }
      });
    });
  }
  get() {
    try {
      const token = wx.getStorageSync(TOKEN_KEY);
      if (token && token.access_token) {
        const { access_token, token_type } = token;
        return `${token_type} ${access_token}`;
      }
    } catch (e) {
      console.log(e);
    }
  }
  delete() {
    wx.removeStorage({
      key: TOKEN_KEY
    });
  }
  checkIsLogin() {
    const token = this.get();
    if (token) {
      wx.switchTab({
        url: '/pages/index/index'
      });
      return true;
    } else {
      return false;
    }
  }
}

module.exports = new Token();
