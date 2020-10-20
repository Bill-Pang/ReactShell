import React, { Component } from "react";
import * as API from "../store/sdk/mood";
import * as ACTION from "../store/actions";
import { connect } from "react-redux";

class Router1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moodList: [],
    };
  }
  render() {
    const { moodList } = this.state;
    return (
      <h2>
        Router1
        <button onClick={this.getMood}>获取接口数据</button>
        <ul>
          {moodList.map((item, index) => {
            return (
              <div
                key={index}
                style={{ marginBottom: 20, fontWeight: "normal", fontSize: 13 }}
              >
                <p>{item.date}</p>
                <p>{item.say}</p>
              </div>
            );
          })}
        </ul>
      </h2>
    );
  }
  getMood = () => {
    const { dispatch } = this.props;
    API.getAllMood().then((res) => {
      if (res.data.message) {
        this.setState({
          moodList: res.data.message,
        });
        dispatch(ACTION.AddMessage("获取数据成功！"));
      }
    });
  };
}
function mapStoreStateToProps(state) {
  return {};
}
export default connect(mapStoreStateToProps)(Router1);
