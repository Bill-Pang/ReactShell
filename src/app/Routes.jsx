// import React, { lazy, Suspense } from "react";
// import { Route, Switch, Redirect } from "react-router";
// import { withStyles } from "@material-ui/core/styles";
// import { connect } from "react-redux";
// import NotFound from "./components/NotFound";
// import Loading from "./components/Loading";
// import PrivateRoute from "./components/PrivateRoute";
// import Login from "./components/account/Login";
// import Signup from "./components/account/Signup";
// import ForgotPassword from "./components/account/ForgotPassword";
// import ResetPassword from "./components/account/ResetPassword";
// import CheckInvitationCode from "./pages/Account/Teams/CheckInvitationCode";

// const AsyncDashboard = lazy(() => import("./pages/Dashboard"));
// const AsyncCampaigns = lazy(() => import("./pages/Campaigns"));
// const AsyncAudience = lazy(() => import("./pages/Audience"));
// const AsyncReports = lazy(() => import("./pages/Reports"));
// const AsyncAccount = lazy(() => import("./pages/Account"));

// const AsyncBusiness = lazy(() => import("./pages/MarketPages/Business"));
// const AsyncMarketing = lazy(() => import("./pages/MarketPages/Marketing"));

// const AsyncHomePage = lazy(() => import("./pages/MarketPages/Home"));
// const AsyncSolutions = lazy(() => import("./pages/MarketPages/Solutions"));
// const AsyncPricing = lazy(() => import("./pages/MarketPages/Pricing"));
// const AsyncData = lazy(() => import("./pages/MarketPages/Data"));
// const AsyncAboutUs = lazy(() => import("./pages/MarketPages/AboutUs"));
// const AsyncRequestDemo = lazy(() => import("./pages/MarketPages/RequestDemo"));

// const styles = (theme) => ({
//   root: {
//     overflow: "auto",
//     display: "flex",
//     flex: 1,
//     flexDirection: "column",
//   },
// });

// function Routes({ classes, loggedIn, currentUser }) {
//   if (loggedIn && !currentUser.get("id")) {
//     return null;
//   }
//   return (
//     <div className={classes.root}>
//       <Suspense fallback={<Loading />}>
//         <Switch>
//           <Route
//             exact
//             path="/"
//             render={() => {
//               return loggedIn ? (
//                 <Redirect to={{ pathname: `/dashboard` }} />
//               ) : (
//                 <Redirect to={{ pathname: `/home` }} />
//               );
//             }}
//           />

//           <Route path="/login" component={Login} />
//           <Route path="/signup" component={Signup} />
//           <Route path="/forgotpassword" component={ForgotPassword} />
//           <Route path="/forget-password" component={ResetPassword} />
//           <Route path="/invitation" component={CheckInvitationCode} />

//           {/*static(market) pages*/}
//           <Route exact path="/home" component={AsyncHomePage} />
//           <Route exact path="/solutions" component={AsyncSolutions} />
//           <Route exact path="/pricing" component={AsyncPricing} />
//           <Route exact path="/data" component={AsyncData} />
//           <Route exact path="/about" component={AsyncAboutUs} />
//           <Route exact path="/Business" component={AsyncBusiness} />
//           <Route exact path="/Marketing" component={AsyncMarketing} />
//           <Route exact path="/request-demo" component={AsyncRequestDemo} />
//           {
//             <Route
//               exact
//               path="/campaigns"
//               render={() => {
//                 return currentUser.get("activated") ? (
//                   <PrivateRoute
//                     exact
//                     path="/campaigns"
//                     component={AsyncCampaigns}
//                   />
//                 ) : (
//                   <Redirect to={{ pathname: `/dashboard` }} />
//                 );
//               }}
//             />
//           }
//           {
//             <Route
//               exact
//               path="/reports"
//               render={() => {
//                 return currentUser.get("activated") ? (
//                   <PrivateRoute
//                     exact
//                     path="/reports"
//                     component={AsyncReports}
//                   />
//                 ) : (
//                   <Redirect to={{ pathname: `/dashboard` }} />
//                 );
//               }}
//             />
//           }
//           <PrivateRoute exact path="/dashboard" component={AsyncDashboard} />

//           <PrivateRoute path="/reports" component={AsyncReports} />
//           <PrivateRoute path="/campaigns" component={AsyncCampaigns} />

//           <PrivateRoute path="/audience" component={AsyncAudience} />
//           <PrivateRoute path="/account" component={AsyncAccount} />
//           <PrivateRoute path="/nomatch" component={NotFound} />
//           <Route component={NotFound} />
//           {/*<Route render={() => <Redirect to={{ pathname: '/' }} />} />*/}
//         </Switch>
//       </Suspense>
//     </div>
//   );
// }

// function mapStoreStateToProps(state) {
//   return {
//     loggedIn: state.controller.loggedIn,
//     currentUser: state.controller.currentUser,
//   };
// }

// export default connect(mapStoreStateToProps)(withStyles(styles)(Routes));

import React, { Component, lazy, Suspense } from "react";
import NotFound from "./components/NotFound";
import { Route, Switch, Redirect } from "react-router";
import { connect } from "react-redux";
import PrivateRoute from "./components/PrivateRoute";
import "./Routes.css";
const Route1 = lazy(() => import("./page/Router1"));
const Route2 = lazy(() => import("./page/Router2"));
const Route3 = lazy(() => import("./page/Router3"));
const AsyncPrivateRoute1 = lazy(() => import("./page/PrivateRoute1"));
const AsyncPrivateRoute2 = lazy(() => import("./page/PrivateRoute2"));
const AsyncPrivateRoute3 = lazy(() => import("./page/PrivateRoute3"));

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="routerBox">
        <Suspense fallback={"加载中。。"}>
          <Switch>
            {/* 路由重定向 */}
            <Route
              exact
              path="/"
              render={() => {
                return <Redirect to={{ pathname: `/Route1` }} />;
              }}
            />
            <Route exact path="/Route1" component={Route1} />
            <Route exact path="/Route2" component={Route2} />
            <Route exact path="/Route3" component={Route3} />
            {/* 私有路由 权限配置 */}
            <PrivateRoute
              exact
              path="/PrivateRoute1"
              component={AsyncPrivateRoute1}
            />
            <PrivateRoute
              exact
              path="/PrivateRoute2"
              component={AsyncPrivateRoute2}
            />
            <PrivateRoute
              exact
              path="/PrivateRoute3"
              component={AsyncPrivateRoute3}
            />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </div>
    );
  }
}

function mapStoreStateToProps(state) {
  return {};
}

export default connect(mapStoreStateToProps)(Routes);
