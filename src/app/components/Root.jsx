import React, { Component } from "react";
import { connect } from "react-redux";
import NavBar from "./NavBar";
import Routes from "../Routes";
import Message from "./Message";

class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { message } = this.props;
    return (
      <div>
        <NavBar />
        <Routes />
        {message && <Message />}
      </div>
    );
  }
}

function mapStoreStateToProps(state) {
  return {
    message: state.model.message,
  };
}
export default connect(mapStoreStateToProps)(Root);
