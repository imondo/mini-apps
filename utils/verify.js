import toast from './toast.js';

const validMethod = function ({ rules = [], messages = [], data = {}}) {
  let isCheck = false;
  if (!Array.isArray(rules)) return false;
  let keys = Object.keys(rules);
  for (let rule of rules) {
    // 是否必填
    if (rule['required']) {
      let msg = messages.find(v => v['name'] === rule['name']);
      if (!_required(data[rule['name']], msg['required'])) {
        isCheck = false;
        break;
      } else {
        isCheck = true;
      } 
    }
  }
  return isCheck;
}

const _required = function (val, messages) {
  if (!val) {
    toast.msg(messages, { icon: 1 });
    return false;
  } else {
    return true;
  }  
}

export default validMethod;