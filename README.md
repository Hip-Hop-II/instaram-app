## ins-app

* [项目启动](#项目启动)
  * [Android stuiod](#Android stuiod)
  * [安卓模拟器(Genymotion)](#安卓模拟器(Genymotion))
  * [expo XDE](#expo XDE)
* [项目技术栈](#项目技术栈)
  * [移动端](#移动端)
  * [服务端](#服务端)

## 项目启动
因为这个项目大部分时间是在 `windows` 系统上开发的， 为了开发的简便， 使用了 `expo XDE` 进行开发，省去了配置 `JAVA SDK`, `Android` 环境等一系列繁琐的事情， 不过也有一些步骤需要完成。

### Android stuiod

首先需要到官方下载一个 `Android stuiod`, 同时下载 `android SDK` 因为模拟器的连接需要使用到 `adb`, 这个需要 `android JDK` 才能运行起来

### 安卓模拟器(Genymotion)

这个推荐的是 Genymotion

### expo XDE

这个是 `expo` 官方推出的一个模拟开发环境的编译工具， 具体操作可以查看官方文档 [expr](https://docs.expo.io)

## 项目技术栈

本项目是使用 `react-native` 开发的仿 Instaram App 实现了部分功能， 包括 `登录注册模块`, `分享文章列表模块`, `新建文章模块`, `文章列表图片搜索模块`, `用户文章列表模块` 等等。移动端技术用的是 `react-native`, 服务端用的是 `nodejs + express `实现的。更多功能， 后续更新...

### 移动端

这次仿写原生APP项目，主要是为了更系统地学习 `react-native`, 中间遇到了不少麻烦， 包括 `IOS` 和 `Android` 的一些样式的差异性， `react-native` 用于本地存储的API `AsyncStorage` 在 `Android` 模拟器中无法接受回调，还有 `react-navigation` 组件结合 `react-reudx` 会出现一些问题等等... 收获良多！ 这里列出移动端主要的技术栈

* [react-native]()
* [expo]()
* [react-navigation]()
* [native-base]()
* [redux]()
* [redux-thunk]()
* [redux-logger]()
* [react-redux]()
* [react-native-vector-icons]()

### 服务端
服务端使用的是 `nodejs` 开发的， Web框架使用的是 `Express.js`，数据库选择的是 `Mongodb`, 使用的 `ORM` 框架是 `mongoose.js`，同时使用 `Babel`， 使代码支持 `ES6 or ES7` 语法！ 主要的技术栈

* [express]()
* [body-parser]()
* [mongoose]()
* [babel-cli]()
* [jsonwebtoken]()
* [bcrypt-nodejs]()
* [faker]()
* [nodemon]()

