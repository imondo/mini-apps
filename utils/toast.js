const toast =  {
  msg: (title, { icon = 1, duration = 2000, callback=()=>{}}) => {
    wx.showToast({
      title,
      icon: ['success', 'none'][icon],
      duration, // 没卵用
      success: function () {
        setTimeout(function () {
          callback();
        }, duration)
      }
    })   
  },
  confirm: ({ title = '提示', content, showCancel=true, callback}) => {
    wx.showModal({
      title,
      content,
      showCancel,
      success: function(res) {
        if (res.confirm) {
          callback(res.confirm);
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  }
}

export default toast;
