const handleLocal =  {
  set: ({key, data}) => {
    wx.setStorage({
      key,
      data
    })
  },
  get: ({ key }) => {
    return new Promise(resolve => {
      wx.getStorage({
        key,
        success: res => {
          if (res.data) {
            resolve(res.data);
          } else {
            resolve(null);
          }
        },
        fail: res => {
          resolve(null);
        }
      });
    })
  },
  clear: (key) => {
    return wx.removeStorage({
      key,
      success: function(res) {}
    });
  }
}

export default handleLocal;
