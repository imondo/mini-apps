// 封装下wx函数
const wxChat = {
  setNavTitle: (title) => {
    wx.setNavigationBarTitle({
      title,
    })
  }
}

export default wxChat;