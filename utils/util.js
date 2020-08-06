const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

/**
 * 数值货币型转换
 * value  金额
 * currency 货币符号 默认空
 * decimals  保留位数 默认2位
 */
function currency(value, currency = '', decimals = 2) {
  if (value === '') return '';
  value = parseFloat(value);
  if (!isFinite(value) || (!value && value !== 0)) return '';
  const stringified = Math.abs(value).toFixed(decimals);
  const digitsRE = /(\d{3})(?=\d)/g;
  const _int = decimals ? stringified.slice(0, -1 - decimals) : stringified;
  const i = _int.length % 3;
  const head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? ',' : '') : '';
  const _float = decimals ? stringified.slice(-1 - decimals) : '';
  const sign = value < 0 ? '-' : '';
  return (
    sign + currency + head + _int.slice(i).replace(digitsRE, '$1,') + _float
  );
}

module.exports = {
  formatTime: formatTime,
  currency: currency
}
