import { request } from './../../utils/netWork.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    status: 0,
    pageScrollHeight: 0,
    hasFocus: true
  },

  openPopup() {
    this.setData({
      status: 1
    })
  },

  // 数字截取
  bindTofixed(e) {
    let val = e.detail.value;
    //先把非数字的都替换掉，除了数字和. 
    val = val.replace(/[^\d\.]/g, '');
    //必须保证第一个为数字而不是. 
    val = val.replace(/^\./g, '0.');
    //保证只有出现一个.而没有多个. 
    val = val.replace(/\.{2,}/g, '.');
    //保证.只出现一次，而不能出现两次以上 
    val = val.replace('.', '$#$').replace(/\./g, '').replace('$#$', '.');
    //只能输入两个小数
    val = val.replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3');
    return val;
  },

  // Textarea 获取键盘高度
  focusTextarea: function (e) {
    const _this = this;
    let height = e.detail.height; // 键盘高度
    _this.setData({
      pageScrollHeight: (height - 60)
    })
    this.pageScrollToBottom();
  },

  changTextarea: function (e) {
    this.setData({
      hasFocus: false
    })
  },

  // 失去焦点
  blurTextarea: function (e) {
    const _this = this;
    _this.setData({
      pageScrollHeight: 0,
      hasFocus: true
    })
  },

  // 页面滚动到底部
  pageScrollToBottom: function () {
    if (this.data.hasFocus) {
      wx.createSelectorQuery().select('#page-scroll').boundingClientRect(function (rect) {
        // 使页面滚动到底部
        wx.pageScrollTo({
          scrollTop: rect.height
        })
      }).exec()
    }
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})