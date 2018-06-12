// 时间转换
const formatTime = (date, str, hasSecond) => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  let _str = str || '-';
  let _hasSecond = hasSecond || false;
  if (_hasSecond) {
    return [year, month, day].map(formatNumber).join(_str) + ' ' + [hour, minute, second].map(formatNumber).join(':')
  } else {
    return [year, month, day].map(formatNumber).join(_str)
  }  
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

/**
 * 时间转换刚刚，几分钟前
 * @params {dateTimeStamp} 时间戳
 * */ 

const timestampFormat = (dateTimeStamp) => {
  const minute = 1000 * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const halfamonth = day * 15;
  const month = day * 30;

  const now = new Date().getTime();
  let diffValue = now - dateTimeStamp;
  const monthC = diffValue / month;
  const weekC = diffValue / (7 * day);
  const dayC = diffValue / day;
  const hourC = diffValue / hour;
  const minC = diffValue / minute;
  const _date = new Date(dateTimeStamp);
  let result = '';
  if (dayC >= 1) {
    let year = _date.getFullYear();
    let month = _date.getMonth() + 1;
    let day = _date.getDate();
    result = [year, month, day].map(formatNumber).join('-');
  } else if (hourC >= 1) {
    result = parseInt(hourC) + "小时前";
  } else if (minC > 1) {
    result = parseInt(minC) + "分钟前";
  } else {
    result =  "刚刚";
  }
  return result;
}

/**
 * 数组删除元素 返回删除元素的数组
 * @params {arr} 原数组 {ele} 元素 {key} 对象key
 * */
const arrRemove = ({ arr, ele, key }) => {
  if (!Array.isArray(arr)) { return false; }
  let isObj = false;
  for (let val of arr) {
    if (val instanceof Object) {
      isObj = true;
    }
  }

  if (isObj) {
    let _index = arr.findIndex(v => v[key] === ele);
    arr.splice(_index, 1);
  } else {
    let _index = arr.findIndex(v => v === ele);
    arr.splice(_index, 1);
  }

  return arr;  
}


module.exports = {
  formatTime,
  timestampFormat,
  arrRemove
}
