import * as ActionTypes from "../../actionTypes";
export default (state = null, action) => {
  let newState;
  switch (action.type) {
    case ActionTypes.ADDMESSAGE:
      newState = action.value;
      return newState;
    case ActionTypes.REMOVEMESSAGE:
      return null;
  }
  return state;
};
