// 合并所有的 reducer 并且返回

import { combineReducers } from 'redux'
import { user } from './redux/user.redux'

export default combineReducers({ user })
