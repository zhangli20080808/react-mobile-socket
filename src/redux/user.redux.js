import axios from "axios";
import { getRedirectPath } from "../util";
const ERROR_MSG = "ERROR_MSG";

const AUTH_SUCCESS = "AUTH_SUCCESS";
const LOGOUT = "LOGOUT";

const LOAD_DATA = "LOAD_DATA";

const initState = {
  isAtuh: false,
  msg: "",
  user: "",
  pwd: "",
  type: "",
  // 成功后的跳转地址
  redirectTo: ""
};
function errorMsg(msg) {
  return { type: ERROR_MSG, msg };
}

export function loadData(userinfo) {
  return { type: LOAD_DATA, payload: userinfo };
}

function authSuccess(obj) {
  const { pwd, ...data } = obj;
  return { type: AUTH_SUCCESS, payload: data };
}
// reducers
export function user(state = initState, action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        msg: "",
        redirectTo: getRedirectPath(action.payload),
        ...action.payload
      };
    case LOAD_DATA:
      return { ...state, ...action.payload };

    case LOGOUT:
      return { ...initState, redirectTo: "/login" };

    case ERROR_MSG:
      return { ...state, isAtuh: false, msg: action.msg };
    default:
      return state;
  }
}

export function register({ user, pwd, type, repeatpwd }) {
  if (!user || !pwd || !type) {
    return errorMsg("用户名和密码必须输入");
  }
  if (pwd !== repeatpwd) {
    return errorMsg("密码和确认密码不同");
  }
  return dispatch => {
    axios.post("/user/register", { pwd, user, type }).then(res => {
      if (res.data.code === 0) {
        dispatch(authSuccess({ pwd, user, type }));
      } else {
        dispatch(errorMsg(res.data.msg));
      }
    });
  };
}

export function login({ user, pwd }) {
  if (!user || !pwd) {
    return errorMsg("用户名和密码必须输入");
  }
  return dispatch => {
    axios.post("/user/login", { pwd, user }).then(res => {
      if (res.data.code === 0) {
        dispatch(authSuccess(res.data.data));
      } else {
        dispatch(errorMsg(res.data.msg));
      }
    });
  };
}

export function update(data) {
  return dispatch => {
    axios.post("/user/update", data).then(res => {
      dispatch(authSuccess(res.data.data));
    });
  };
}

export function logoutSubmit() {
  return { type: LOGOUT };
}

export function getUserInfo() {
  return dispatch => {
    axios.get("/user/info").then(res => {
      if (res.status === 200) {
        if (res.data.code === 0) {
          //有登录信息
          dispatch(loadData(res.data.data));
        } else {
          dispatch(errorMsg(res.data.msg));
        }
      }
    });
  };
}
