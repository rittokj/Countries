import axios from "axios";
import { LOGIN_FAILED, LOGIN_SUCCESS } from "./actionTypes";

export const loginTriggered = (values) => (dispatch, getState) => {
  const requestBody = {
    email: values.username,
    password: values.password,
  };
  return new Promise((resolve, reject) => {
    // if (values.userName === "abc" && values.password === "abc") {
    //   dispatch({
    //     type: LOGIN_SUCCESS,
    //     payload: {
    //       name: "abc",
    //       userId: "123",
    //       role: "admin",
    //     },
    //   });
    //   resolve("I have Resolved");
    // } else {
    //   dispatch({
    //     type: LOGIN_FAILED,
    //   });
    //   reject("I have Rejected");
    // }
    axios
      .post(
        "http://restapi.adequateshop.com/api/authaccount/login",
        requestBody
      )
      .then((res) => {
        if (res.data.data) {
          dispatch({
            type: LOGIN_SUCCESS,
            payload: {
              ...res.data.data,
            },
          });
          resolve(res.data.data);
        } else {
          dispatch({
            type: LOGIN_FAILED,
          });
          reject(res.data.message);
        }
      });
  });
};
