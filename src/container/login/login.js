import React from "react";
import { List, InputItem, WhiteSpace, WingBlank, Button } from "antd-mobile";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../redux/user.redux";

@connect(state => state.user, { login })
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handlelogin = this.handlelogin.bind(this);
    this.register = this.register.bind(this);
    this.state = {
      user: "",
      pwd: ""
    };
  }
  register() {
    this.props.history.push("/register");
  }
  handlelogin() {
    this.props.login(this.state);
  }

  handleChange(key, val) {
    this.setState({
      [key]: val
    });
  }
  
  render() {
    return (
      <div>
        <p>登录页</p>
        <p className='error-msg'>{this.props.msg ? this.props.msg: ''}</p>
        {this.props.redirectTo ? <Redirect to={this.props.redirectTo} /> : null}
        <WingBlank>
          <List>
            <InputItem onChange={v => this.handleChange("user", v)}>
              用户名
            </InputItem>
            <WhiteSpace />
            <InputItem onChange={v => this.handleChange("pwd", v)}>
              密码
            </InputItem>
          </List>
          <WhiteSpace />
          <WhiteSpace />
          <Button type="primary" onClick={this.handlelogin}>
            登录
          </Button>
          <WhiteSpace />
          <Button type="primary" onClick={this.register}>
            注册
          </Button>
        </WingBlank>
      </div>
    );
  }
}
export default Login;
