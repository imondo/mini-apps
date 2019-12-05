class DomInfo {
  get(id) {
    return new Promise(resolve => {
      const query = wx.createSelectorQuery();
      query.select(id).boundingClientRect();
      query.exec(function(res) {
        if (res && res[0]) {
          resolve(res[0]);
        }
      });
    });
  }
}

module.exports = new DomInfo();