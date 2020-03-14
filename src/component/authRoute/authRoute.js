import React from "react";
import axios from "axios";
// 为了显示this.props.history
import { withRouter } from "react-router-dom";
import { loadData } from "../../redux/user.redux";
import { connect } from "react-redux";

@withRouter
@connect(null, { loadData })
class AuthRoute extends React.Component {
  // constructor(props){
  //     super(props)

  // }
  // 是否登录 如果是现在的url login是不需要跳转的  用户的身份 type  是牛人还是boss 用户是否完善信息 选择头像 个人简介 如果已经是登录或这册页了 那就不用管了
  componentDidMount() {
    const publicList = ["/login", "register"];
    const { location } = this.props;
    if (publicList.indexOf(location.pathName) > -1) {
      return null;
    }
    axios.get("/user/info").then(res => {
      if (res.status === 200) {
        if (res.data.code === 0) {
          //有登录信息
          this.props.loadData(res.data.data);
        } else {
          this.props.history.push("/login");
        }
      }
    });
  }
  render() {
    return null;
  }
}
export default AuthRoute;

// function compareObj(obj1, obj2) {
//     if (obj1 === obj2) {
//       return true;
//     }
//     if (Object.keys(obj1).length !== Object.keys(obj2).length) {
//       return false;
//     }
//     for (let k in obj1) {
//       if (obj1[k] !== obj2[k]) {
//         return false;
//       }
//       return true;
//     }
//   //   if (typeof obj1[k] == "object") {
//   //     return compareObj(obj1[k], obj2[k]);
//   //   }
//   }
