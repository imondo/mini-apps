# 教装通小程序

### 目录说明
```
|-- api                         // 程序请求
|-- components                  // 公用组件
|-- config                      // 程序基础配置
|-- pages                       // 程序页面
|-- static                      // 静态文件   
|-- styles                      // 样式文件
|-- templates                   // 项目模版
|-- utils                       // 公用JS
|-- wxs                         // 公用wxs模块
|-- README.md                   // 项目说明
|-- app.js                      // 程序入口文件
|-- app.json                    // 程序公用配置
|-- app.wxss                    // 程序样式入口
|-- project.config.json         // 项目配置文件

```

### 项目启动

打开 app.js 进行配置

```
{
  process_env: config['dev'], // 测试环境 dev, 生产环境 build
}

```

### 注意事项
1. 引入iconfont文件时，请将ttf文件转成base64格式: [转码地址](https://transfonter.org/)

2. 引入图片时，请先压缩图片，小程序大小限制2M多一点: [在线压缩地址](http://www.yasuotu.com/)

3. 关于input输入数字，可利用type = 'digit'，来控制输入只能是数值和小数点。

4. textare组件键盘遮挡问题。