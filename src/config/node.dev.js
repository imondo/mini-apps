/**
 * 开发节点配置
 */
const config = require('./config.default');
const node_dev = {
  id: 'dev',
  nodeCode: 'dev',
  parentCode: 'root',
  nodeUrl: config.iportal_api,
  loginUrl: config.iportal_login_api,
  nodeName: '开发节点',
  status: 0,
  sort: 3
};

module.exports = node_dev;
