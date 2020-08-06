Page({
  data: { loading: true },
  onLoad(options) {

    const pages = getCurrentPages();
    console.log(`middle消息：`, options)

    const webviewPage = pages[pages.length - 2];

    webviewPage.setData(
      {
        options: options
      },
      () => {
        wx.navigateBack({
          delta: 0,
        });
      }
    );
  }
})