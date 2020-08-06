class Storage {
  get(key) {
    return new Promise(resolve => {
      wx.getStorage({
        key,
        complete(res) {
          resolve(res.data);
        }
      });
    });
  }

  set(key, data) {
    try {
      wx.setStorage({ key, data });
    } catch (e) {}
  }

  delete(key) {
    wx.removeStorage({
      key
    });
  }
}

module.exports = new Storage();
