Page({
  data: {
    scollHeight: 0
  },
  onShow() {
    // 系统高度
    const system = wx.getSystemInfoSync();
    const height = system.windowHeight;
    this.queryEl(['.head']).then(rect => {
      const [{ height: ht }] = rect
      this.setData({
        scollHeight: (height - ht).toFixed(0)
      })
    })
  },
  queryEl(selector) {
    return new Promise(resolve => {
      const query = wx.createSelectorQuery();
      if (Array.isArray(selector)) {
        selector.forEach(el => {
          query.select(el).boundingClientRect();
        })
      } else {
        query.select(selector).boundingClientRect();
      }
      query.exec(res => {
        resolve(res);
      })
    })
  }
})