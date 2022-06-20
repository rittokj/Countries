import { combineReducers } from "redux";
import details from "../pages/Details/reducer";
import dashboard from "../pages/Dashboard/reducer";

const appReducer = combineReducers({
  details,
  dashboard,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
