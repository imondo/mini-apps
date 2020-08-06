const login = require('./../../api/login');
const nodeDev = require('./../../config/node.dev');
const app = getApp();

const nodes = app.globalData.dev ? [nodeDev] : [];

Page({
  data: {
    nodes
  },
  onLoad() {
    this.getNodes();
  },
  checkNode(e) {
    const { node } = e.target.dataset;
    app.globalData.node = node;
    wx.setStorage({
      key: 'node',
      data: node
    });
    if (node.nodeName) {
      wx.navigateBack({
        delta: 1
      });
    }
  },
  getNodes() {
    const _node = app.globalData.dev ? [].concat(nodeDev) : [];
    this.setData({
      nodes: _node
    })
  }
});
