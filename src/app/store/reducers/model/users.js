import * as ActionTypes from "../../actionTypes";
const initVal = ["彪哥"];
export default (state = initVal, action) => {
  let newState;
  switch (action.type) {
    case ActionTypes.ADD: {
      newState = initVal.push(action.state);
      return newState;
    }
  }
  return state;
};
