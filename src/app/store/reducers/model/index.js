import { combineReducers } from "redux"; //模块里面可以再拆分一层

import users from "./users";
import message from "./message";

export default combineReducers({
  users,
  message,
});
