import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import "./index.css";
class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routerItem: [
        "Route1",
        "Route2",
        "Route3",
        "PrivateRoute1",
        "PrivateRoute2",
        "PrivateRoute3",
      ],
    };
  }
  render() {
    const { routerItem } = this.state;
    const { history } = this.props;

    return (
      <div className="Nav">
        <ul>
          {routerItem.map((item, index) => {
            return (
              <NavLink to={`/${item}`} key={index} className="NavLink">
                <li
                  className={
                    item === history.location.pathname.substr(1)
                      ? "active"
                      : " "
                  }
                >
                  {item}
                </li>
              </NavLink>
            );
          })}
        </ul>
      </div>
    );
  }
}

function mapStoreStateToProps(state) {
  return {
    history: state.router,
  };
}

export default connect(mapStoreStateToProps)(Nav);
