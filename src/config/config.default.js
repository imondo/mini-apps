
const CONFIG = {  
  oss_api: `http://oss.zbglxt.com/oss`, // 运营节点api
  iportal_api: `http://192.168.2.192:9099/iportal3`, // iportal节点
  iportal_login_api: `http://192.168.2.192:9099/iportal3/auth/password/access/token`, // iportal节点api
  ems_api: `http://192.168.2.216:9224/ems-server`, // 装备节点api http://192.168.2.216:9224/ems-server/api
  default_api: '/api/pub/mini-program/v1' // 接口上下文前缀
}

module.exports = CONFIG;
