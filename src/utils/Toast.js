class Toast {
  msg({ title = '', icon = 'none', duration = 2000 }) {
    wx.showToast({
      title,
      icon,
      duration
    });
  }

  showModal({title = '提示', content}, callback = () => {}, cancel = () => {}) {
    wx.showModal({
      title,
      content,
      success (res) {
        if (res.confirm) {
          callback();
        } else if (res.cancel) {
          cancel();
        }
      }
    });
  }
}

module.exports = new Toast();
