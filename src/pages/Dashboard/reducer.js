import { SET_COUNTRY } from "./actionTypes";

const initialState = {
  countries: [],
  isLoaded: false,
};

const dashboard = (state = initialState, action) => {
  switch (action.type) {
    case SET_COUNTRY:
      return {
        countries: action.payload,
        isLoaded: true,
      };

    default:
      return state;
  }
};

export default dashboard;
