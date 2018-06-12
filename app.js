import handleLocal from './utils/local.js';
import toast from './utils/toast.js';
import { unificationLoginOut } from './utils/unityLoginOut.js';
import handleScanCode from './utils/scanCode.js';
import validMethod from './utils/verify.js';
import wxChat from './utils/wxChat.js';
import utils from './utils/util.js';

const config = require('./config/index.js');

App({
  process_env: config['dev'], // 测试环境 dev, 生产环境 build
  onLaunch: function () {},
  onShow: function () {},
  globalData: {
    userInfo: null,
    loginUser: { name: '', password: '', isAgree: true}
  },
  local: handleLocal,
  loginOut: unificationLoginOut,
  scanCode: handleScanCode,
  validMethod: validMethod,
  toast,
  wxChat,
  utils
})