import React, { Component } from "react";
import { connect } from "react-redux";
import "./Message.css";
class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { message } = this.props;

    return (
      <div className="messageBox">
        <div>{message}</div>
      </div>
    );
  }
}

function mapStoreStateToProps(state) {
  return {
    message: state.model.message,
  };
}
export default connect(mapStoreStateToProps)(Message);
