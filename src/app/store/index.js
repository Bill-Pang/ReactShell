import { createStore, applyMiddleware, compose } from "redux";
import createRootReducer from "./reducers";
import thunk from "redux-thunk";
import { createBrowserHistory as createHistory } from "history";

import { routerMiddleware } from "connected-react-router";
export const history = createHistory();
let composeEnhancer = compose;
if (process.env.NODE_ENV !== "production") {
  composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}
const router = routerMiddleware(history);
const store = createStore(
  createRootReducer(history),
  composeEnhancer(applyMiddleware(thunk, router))
);
export default store; //暴露出去
