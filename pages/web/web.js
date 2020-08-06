Page({
  data: {
    src: '',
    options: null
  },
  onShow() {
    this.setData({
      src: 'https://imondo.cn/files/web.html'
    }, () => {
      console.log(`web页：`, this.data.options)
      if (this.data.options) {
        wx.showModal({
          title: this.data.options.msg
        });
      }
    })
  },
  onHide() {
    this.setData({
      src: ''
    })
  }
})