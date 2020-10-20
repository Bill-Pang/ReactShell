import { combineReducers } from "redux"; //把reducer切分成多个模块
import model from "./model";
import { connectRouter } from "connected-react-router";
export default (history) =>
  combineReducers({
    router: connectRouter(history),
    model,
  });
