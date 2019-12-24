const ajax = require('./../utils/http');

function getList() {
  // return ajax.http({
  //   url: `/list`
  // });
  return new Promise(resolve => {
    resolve({
      code: 0,
      msg: 'ok',
      data: {
        pageNo: 1,
        pageSize: 30,
        pageCount: 3,
        count: '78',
        list: [
          {
            '2017': {
              unitCode: '1133012267',
              unitName: '城南幼儿园',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2017
            },
            '2018': {
              unitCode: '1133012267',
              unitName: '城南幼儿园',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2018
            },
            '2019': {
              unitCode: '1133012267',
              unitName: '城南幼儿园',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2019
            },
            orgName: '城南幼儿园'
          },
          {
            '2017': {
              unitCode: '3304241001',
              unitName: '海盐县一中',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2017
            },
            '2018': {
              unitCode: '3304241001',
              unitName: '海盐县一中',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2018
            },
            '2019': {
              unitCode: '3304241001',
              unitName: '海盐县一中',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2019
            },
            orgName: '海盐县一中'
          },
          {
            '2017': {
              unitCode: '8801010001',
              unitName: '演示小学',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2017
            },
            '2018': {
              unitCode: '8801010001',
              unitName: '演示小学',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2018
            },
            '2019': {
              unitCode: '8801010001',
              unitName: '演示小学',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2019
            },
            orgName: '演示小学'
          },
          {
            '2017': {
              unitCode: '1133006724',
              unitName: '石泉幼儿园',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2017
            },
            '2018': {
              unitCode: '1133006724',
              unitName: '石泉幼儿园',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2018
            },
            '2019': {
              unitCode: '1133006724',
              unitName: '石泉幼儿园',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2019
            },
            orgName: '石泉幼儿园'
          },
          {
            '2017': {
              unitCode: '1133008256',
              unitName: '实验幼儿园',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2017
            },
            '2018': {
              unitCode: '1133008256',
              unitName: '实验幼儿园',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2018
            },
            '2019': {
              unitCode: '1133008256',
              unitName: '实验幼儿园',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2019
            },
            orgName: '实验幼儿园'
          },
          {
            '2017': {
              unitCode: '1133008275',
              unitName: '万禄幼儿园',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2017
            },
            '2018': {
              unitCode: '1133008275',
              unitName: '万禄幼儿园',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2018
            },
            '2019': {
              unitCode: '1133008275',
              unitName: '万禄幼儿园',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2019
            },
            orgName: '万禄幼儿园'
          },
          {
            '2017': {
              unitCode: '1133009166',
              unitName: '于城中心幼儿园',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2017
            },
            '2018': {
              unitCode: '1133009166',
              unitName: '于城中心幼儿园',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2018
            },
            '2019': {
              unitCode: '1133009166',
              unitName: '于城中心幼儿园',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2019
            },
            orgName: '于城中心幼儿园'
          },
          {
            '2017': {
              unitCode: '1133009868',
              unitName: '机关幼儿园',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2017
            },
            '2018': {
              unitCode: '1133009868',
              unitName: '机关幼儿园',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2018
            },
            '2019': {
              unitCode: '1133009868',
              unitName: '机关幼儿园',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2019
            },
            orgName: '机关幼儿园'
          },
          {
            '2017': {
              unitCode: '1133009869',
              unitName: '三毛幼儿园',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2017
            },
            '2018': {
              unitCode: '1133009869',
              unitName: '三毛幼儿园',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2018
            },
            '2019': {
              unitCode: '1133009869',
              unitName: '三毛幼儿园',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2019
            },
            orgName: '三毛幼儿园'
          },
          {
            '2017': {
              unitCode: '1133009870',
              unitName: '六一幼儿园',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2017
            },
            '2018': {
              unitCode: '1133009870',
              unitName: '六一幼儿园',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2018
            },
            '2019': {
              unitCode: '1133009870',
              unitName: '六一幼儿园',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2019
            },
            orgName: '六一幼儿园'
          },
          {
            '2017': {
              unitCode: '1133009874',
              unitName: '武原中心幼儿园',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2017
            },
            '2018': {
              unitCode: '1133009874',
              unitName: '武原中心幼儿园',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2018
            },
            '2019': {
              unitCode: '1133009874',
              unitName: '武原中心幼儿园',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2019
            },
            orgName: '武原中心幼儿园'
          },
          {
            '2017': {
              unitCode: '1133009883',
              unitName: '齐家中心幼儿园',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2017
            },
            '2018': {
              unitCode: '1133009883',
              unitName: '齐家中心幼儿园',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2018
            },
            '2019': {
              unitCode: '1133009883',
              unitName: '齐家中心幼儿园',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2019
            },
            orgName: '齐家中心幼儿园'
          },
          {
            '2017': {
              unitCode: '1133009884',
              unitName: '百步中心幼儿园',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2017
            },
            '2018': {
              unitCode: '1133009884',
              unitName: '百步中心幼儿园',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2018
            },
            '2019': {
              unitCode: '1133009884',
              unitName: '百步中心幼儿园',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2019
            },
            orgName: '百步中心幼儿园'
          },
          {
            '2017': {
              unitCode: '1133009887',
              unitName: '秦山中心幼儿园',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2017
            },
            '2018': {
              unitCode: '1133009887',
              unitName: '秦山中心幼儿园',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2018
            },
            '2019': {
              unitCode: '1133009887',
              unitName: '秦山中心幼儿园',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2019
            },
            orgName: '秦山中心幼儿园'
          },
          {
            '2017': {
              unitCode: '1133009889',
              unitName: '澉浦有宝幼儿园',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2017
            },
            '2018': {
              unitCode: '1133009889',
              unitName: '澉浦有宝幼儿园',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2018
            },
            '2019': {
              unitCode: '1133009889',
              unitName: '澉浦有宝幼儿园',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2019
            },
            orgName: '澉浦有宝幼儿园'
          },
          {
            '2017': {
              unitCode: '1133009890',
              unitName: '六里幼儿园',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2017
            },
            '2018': {
              unitCode: '1133009890',
              unitName: '六里幼儿园',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2018
            },
            '2019': {
              unitCode: '1133009890',
              unitName: '六里幼儿园',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2019
            },
            orgName: '六里幼儿园'
          },
          {
            '2017': {
              unitCode: '1133009891',
              unitName: '通元中心幼儿园',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2017
            },
            '2018': {
              unitCode: '1133009891',
              unitName: '通元中心幼儿园',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2018
            },
            '2019': {
              unitCode: '1133009891',
              unitName: '通元中心幼儿园',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2019
            },
            orgName: '通元中心幼儿园'
          },
          {
            '2017': {
              unitCode: '1133009895',
              unitName: '开发区中心幼儿园',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2017
            },
            '2018': {
              unitCode: '1133009895',
              unitName: '开发区中心幼儿园',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2018
            },
            '2019': {
              unitCode: '1133009895',
              unitName: '开发区中心幼儿园',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2019
            },
            orgName: '开发区中心幼儿园'
          },
          {
            '2017': {
              unitCode: '1133009897',
              unitName: '元通中心幼儿园',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2017
            },
            '2018': {
              unitCode: '1133009897',
              unitName: '元通中心幼儿园',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2018
            },
            '2019': {
              unitCode: '1133009897',
              unitName: '元通中心幼儿园',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2019
            },
            orgName: '元通中心幼儿园'
          },
          {
            '2017': {
              unitCode: '1133012302',
              unitName: '西塘桥幼儿园',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2017
            },
            '2018': {
              unitCode: '1133012302',
              unitName: '西塘桥幼儿园',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2018
            },
            '2019': {
              unitCode: '1133012302',
              unitName: '西塘桥幼儿园',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2019
            },
            orgName: '西塘桥幼儿园'
          },
          {
            '2017': {
              unitCode: '2133000857',
              unitName: '海盐县广丰学校',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2017
            },
            '2018': {
              unitCode: '2133000857',
              unitName: '海盐县广丰学校',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2018
            },
            '2019': {
              unitCode: '2133000857',
              unitName: '海盐县广丰学校',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2019
            },
            orgName: '海盐县广丰学校'
          },
          {
            '2017': {
              unitCode: '2133005690',
              unitName: '海盐县六里小学',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2017
            },
            '2018': {
              unitCode: '2133005690',
              unitName: '海盐县六里小学',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2018
            },
            '2019': {
              unitCode: '2133005690',
              unitName: '海盐县六里小学',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2019
            },
            orgName: '海盐县六里小学'
          },
          {
            '2017': {
              unitCode: '2133005693',
              unitName: '海盐县元通小学',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2017
            },
            '2018': {
              unitCode: '2133005693',
              unitName: '海盐县元通小学',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2018
            },
            '2019': {
              unitCode: '2133005693',
              unitName: '海盐县元通小学',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2019
            },
            orgName: '海盐县元通小学'
          },
          {
            '2017': {
              unitCode: '2133005994',
              unitName: '海盐县向阳小学',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2017
            },
            '2018': {
              unitCode: '2133005994',
              unitName: '海盐县向阳小学',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2018
            },
            '2019': {
              unitCode: '2133005994',
              unitName: '海盐县向阳小学',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2019
            },
            orgName: '海盐县向阳小学'
          },
          {
            '2017': {
              unitCode: '2133005996',
              unitName: '海盐县实验小学教育集团',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2017
            },
            '2018': {
              unitCode: '2133005996',
              unitName: '海盐县实验小学教育集团',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2018
            },
            '2019': {
              unitCode: '2133005996',
              unitName: '海盐县实验小学教育集团',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2019
            },
            orgName: '海盐县实验小学教育集团'
          },
          {
            '2017': {
              unitCode: '2133005997',
              unitName: '三毛小学',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2017
            },
            '2018': {
              unitCode: '2133005997',
              unitName: '三毛小学',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2018
            },
            '2019': {
              unitCode: '2133005997',
              unitName: '三毛小学',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2019
            },
            orgName: '三毛小学'
          },
          {
            '2017': {
              unitCode: '2133005998',
              unitName: '海盐县天宁小学',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2017
            },
            '2018': {
              unitCode: '2133005998',
              unitName: '海盐县天宁小学',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2018
            },
            '2019': {
              unitCode: '2133005998',
              unitName: '海盐县天宁小学',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2019
            },
            orgName: '海盐县天宁小学'
          },
          {
            '2017': {
              unitCode: '2133005999',
              unitName: '海盐县行知小学',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2017
            },
            '2018': {
              unitCode: '2133005999',
              unitName: '海盐县行知小学',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2018
            },
            '2019': {
              unitCode: '2133005999',
              unitName: '海盐县行知小学',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2019
            },
            orgName: '海盐县行知小学'
          },
          {
            '2017': {
              unitCode: '2133006000',
              unitName: '海盐县城西小学',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2017
            },
            '2018': {
              unitCode: '2133006000',
              unitName: '海盐县城西小学',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2018
            },
            '2019': {
              unitCode: '2133006000',
              unitName: '海盐县城西小学',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2019
            },
            orgName: '海盐县城西小学'
          },
          {
            '2017': {
              unitCode: '2133006003',
              unitName: '海盐县沈荡小学',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2017
            },
            '2018': {
              unitCode: '2133006003',
              unitName: '海盐县沈荡小学',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2018
            },
            '2019': {
              unitCode: '2133006003',
              unitName: '海盐县沈荡小学',
              quantity: 0,
              amount: 0,
              area: '',
              percent: '',
              year: 2019
            },
            orgName: '海盐县沈荡小学'
          }
        ],
        sum: ''
      }
    });
  });
}

function getSummary() {
  return new Promise(resolve => {
    resolve({
      code: 0,
      msg: 'ok',
      data: {
        total: 30.72,
        avg: 237.8,
        fund: 15.13,
        list: [
          {
            '2017': 18.28
          },
          {
            '2018': 22.2
          },
          {
            '2019': 30.72
          }
        ]
      }
    });
  });
}

module.exports = {
  getList,
  getSummary
};
