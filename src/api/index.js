const ajax = require('./../utils/http');

function getList() {
  return ajax.http({
    url: `/list`
  });
}

module.exports = {
  getList
};
