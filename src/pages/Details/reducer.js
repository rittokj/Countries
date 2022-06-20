import { LOGIN_FAILED, LOGIN_SUCCESS } from "./actionTypes";

const initialState = {
  authentication: false,
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
        authentication: true,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        authentication: false,
      };
    default:
      return state;
  }
};

export default login;
