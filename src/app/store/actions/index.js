import * as ActionTypes from "../actionTypes";

export const AddUser = (UsersName) => (dispatch) => {};

export const AddMessage = (Message) => (dispatch) => {
  console.log(Message);
  dispatch({
    type: ActionTypes.ADDMESSAGE,
    value: Message,
  });
  // 两秒后去除 message
  setTimeout(() => {
    RemoveMessage(dispatch);
  }, 2000);
};

export const RemoveMessage = (dispatch) => {
  dispatch({
    type: ActionTypes.REMOVEMESSAGE,
  });
};
