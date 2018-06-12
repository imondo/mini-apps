export function localLoginOut () {
  handleLocal.clear('TokenInfo');
  handleLocal.clear('userInfo');
  const url = '/pages/login/login';
  wx.redirectTo({ url });
}