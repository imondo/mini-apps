/**
 * 开发节点配置
 */
const config = require('./config.default');
const node_dev = {
  id: 'dev',
  nodeCode: 'dev',
  parentCode: 'root',
  nodeUrl: config.dev_api,
  loginUrl: config.dev_api,
  nodeName: '开发节点',
  status: 0,
  sort: 3
};

module.exports = node_dev;
