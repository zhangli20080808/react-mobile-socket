import React from "react";

import ReactDom from "react-dom";

import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";

import thunk from "redux-thunk";
// import { counter} from './index.redux'
import reducers from "./reducer";
import "./config";
import "./index.css";
import "antd-mobile/dist/antd-mobile.css";

import Login from "./container/login/login";
import Register from "./container/register/register";
import AuthRoute from "./component/authRoute/authRoute";
import BossInfo from "./container/bossInfo/BossInfo";
import GeniusInfo from "./container/geniusinfo/Geniusinfo";
import Dashboard from "./component/dashboard/dashboard";

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);
function Boss() {
  return <h1>gsggsggggg</h1>;
}

// 四个页面 boss genius person msg
// console.log(store.getState())
ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      {/* // 不加switch 只要命中就会跳转 */}
      <div>
        <AuthRoute></AuthRoute>
        <Switch>
          <Route path="/bossinfo" component={BossInfo}></Route>
          <Route path="/geniusinfo" component={GeniusInfo}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
          <Route component={Dashboard}></Route>/
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
// function render(){
//     ReactDom.render(<App store = {store} addGunAsync = {addGunAsync} addGun = {addGun} removeGun = {removeGun} />,document.getElementById('root'))
// }
// render();
// // 状态改变之后 我们手动的执行以下render
// store.subscribe(render);

// import {createStore} from 'redux';
// 新建store 根据reduce建立 根据老得state和action 生成新的state
// function counter(state=0,action){
//     switch(action.type){
//         case '加机关枪':
//             return state + 1
//         case '减机关枪':
//             return state - 1
//         default:
//             return 10
//     }
// }
// 新建store
// const store = createStore(counter);
// const init = store.getState();
// console.log(init)

// 我们订阅一下
// function listener(){
//     const current = store.getState()
//     console.log(`现在的机关枪是${current}把`)
// }
// 订阅一下
// store.subscribe(listener);
// // 派发事件 传递action
// store.dispatch({type: '加机关枪'})
// console.log(store.getState())

// rudex如何和react一起用呢
// 把store.dispatch()方法传递给组件，内部可以修改组件的状态
// Subscribe订阅render函数，每次修改都会重新渲染
// redux相关的内容 移动到单独的文件 index.js redux.js管理
// 1.新建index.redux.js

// "proxy": {
//   "/socket": {
//     "target": "ws://localhost:5000",
//     "ws": true
//   },
//   "/config": {
//     "target": "http://localhost:5000"
//   }
// }
