import React, { lazy } from "react";
import { connect } from "react-redux";
import { Route, Redirect, withRouter } from "react-router-dom";
// 可根据loggedIn判断是否登录
let loggedIn = true;
function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        loggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
}

function mapStoreStateToProps(state) {
  return {};
}

export default withRouter(connect(mapStoreStateToProps)(PrivateRoute));
