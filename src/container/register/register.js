import React from "react";
import {
  List,
  InputItem,
  WhiteSpace,
  Radio,
  WingBlank,
  Button
} from "antd-mobile";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { register } from "../../redux/user.redux";

// 你要state什么属性放到props里面  你要什么方法，放到props里面，自动dispatch
@connect(state => state.user, { register })
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.toLogin = this.toLogin.bind(this);
    this.state = {
      type: "genius", //boss,
      user: "",
      pwd: "",
      repeatpwd: ""
    };
  }
  handleChange(key, val) {
    this.setState({
      [key]: val
    });
  }
  handleRegister() {
    this.props.register(this.state);
  }

  toLogin() {
    this.props.history.push("/login");
  }
  render() {
    const RadioItem = Radio.RadioItem;
    return (
      <div>
        <p>注册页</p>
        <p className="error-msg">{this.props.msg ? this.props.msg : ""}</p>
        {this.props.redirectTo ? <Redirect to={this.props.redirectTo} /> : null}
        <WingBlank>
          <List>
            <InputItem onChange={v => this.handleChange("user", v)}>
              用户名
            </InputItem>
            <WhiteSpace />
            <InputItem
              onChange={v => this.handleChange("pwd", v)}
              type="password"
            >
              密码
            </InputItem>
            <WhiteSpace />
            <InputItem
              onChange={v => this.handleChange("repeatpwd", v)}
              type="password"
            >
              确认密码
            </InputItem>
            <WhiteSpace />
            <RadioItem
              checked={this.state.type === "genius"}
              onChange={v => this.handleChange("type", "genius")}
            >
              牛人
            </RadioItem>
            <RadioItem
              checked={this.state.type === "boss"}
              onChange={v => this.handleChange("type", "boss")}
            >
              BOSS
            </RadioItem>
            <Button type="primary" onClick={this.handleRegister}>
              注册
            </Button>
            <Button
              type="primary"
              style={{ marginTop: 10 }}
              onClick={this.toLogin}
            >
              登录
            </Button>
          </List>
        </WingBlank>
      </div>
    );
  }
}
export default Login;
