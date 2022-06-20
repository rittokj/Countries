import axios from "axios";
import { SET_COUNTRY } from "./actionTypes";

export const getCountries = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      dispatch({ type: SET_COUNTRY, payload: res.data });
    });
    return resolve(true);
  });
};
