import totast from './toast'

const handleScanCode = function () {
  wx.showLoading({title: '加载中...'})
  return new Promise((resolve, reject) => {
    wx.scanCode({
      success: (res) => {
        resolve(res);
      },
      fail: res => {
        reject(res);
      },
      complete: () => {
        wx.hideLoading();
      }
    })
  })
}

export default handleScanCode;
