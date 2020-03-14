### 处理异步，调试工具 更优雅的结合react

#### redux处理异步，需要redux-chunk插件

```
react 默认只处理同步
npm install redux-chunk --save
使用applyMiddleware开启thunk中间件
Action可以返回函数，使用dispatch提交action

```
#### npm install redux-devtools-extension并且开启
#### 使用react-redux优雅的衔接react和redux

```
忘记subscribe 记住reducer action 和 dispatch即可
react-redux提供Provider和connect两个接口来衔接

Provider组件在应用的最外层传入store即可，只用一次
Connect负责从外部获取组件需要的参数 （枪有多少把 加减枪支）
Connect可以用装饰器来写 优化代码
如何书写呢 自己配置
1. npm run eject弹出个性化配置
2. npm install babel-plugin-transform-decorators-legacy --save-dev

思考    什么数据应该放在react里面 redux管理ajax redux管理chating data
```

### react 路由

```
1. react-router-dom
入门组件
BrowserRouter,包裹整个应用
Router路由对应渲染的组件，可嵌套
Link跳转专用

其他组件
url参数  Route组件参数可用冒号标识参数
Redirect组件 跳转
Switch之渲染一个Route组件

两个reducers 每个reducers都有一个state 不能共享？  去合并
复杂redux应用 多个reducers 用combineReducers 合并
Redirect组件跳转
Switch只渲染一个子Route组件

```
### 登录注册
```
基于cookies用户验证
express 依赖于express-parser 
cookies就类似于一张服务卡，登陆后服务端返回，你带着cookie就可以访问受限资源
页面cookies的管理浏览器会管理的

完成页面  检测路由跳转
按需加载 babel-plugin-import
我们在写redux的时候为了支持@装饰器写法引入的插件  transform-decorators-legacy
数据库模型的建立
  // "proxy": {
  //   "/config": {
  //         "target": "http://localhost:9093"
  //       }
  // }
body-parser

配置文件：/usr/local/etc/mongod.conf
日志目录路径：/usr/local/var/log/mongodb
数据目录路径：/usr/local/var/mongodb

mongod --config /usr/local/etc/mongod.conf

组件性能优化  
属性传递优化 - 传递参数少传   immutablejs 通过不可变的数据结构直接比较对象的哈希值 核心原理  把整个的数组的哈希值拿出来做简单的对比 复杂度非常低的可以比较两个对象

每次渲染render bind都会执行一次 性能隐患 箭头函数的写法 会每次重新生成函数 也不好 将方法写在构造函数中 只执行一次 {...} 展开传入 要注意 
 
多组件优化 - 组件间的数据

immutablejs 存在的意义   Map is

优点  节省内存使用 降低复杂度 便于比较数据，定制shouldComponentUpdate方便 is 并发安全 时间旅行功能(每次生成新的数据) 函数式编程
缺点  学习成本 库的大小 对现有项目入侵严重  新项目使用，老项目评估再用
官方太大 我们推荐使用这个  seamless-immutable 

react建议 只做浅层比较 不考虑对象的情况

redux 优化
把我们从select获取数据获取到的数据经过计算变成组件可用的数据 分成了两步 内部会做一些缓存的计算 
这样我们在做一些重复操作的时候 性能会更好 不用每次都重复计算

import { createSelector } from 'reselect'
const shopItemsSelector = state => state.shop.items
const subtotalSelector = createSelector(
  shopItemsSelector,
  items => items.reduce((acc, item) => acc + item.value, 0)
)
第二个参数是第一个的返回值git push -u origin master

key 很重要 


react同构 首屏采用服务端渲染出来的dom 后面正常

```