import axios from "axios";
import { LOGIN } from "./actionTypes.js";

export const startLogin = content => {
    return dispatch => {
      dispatch(login());
    };
  };

export const login = content => {
  return {
    type: LOGIN,
    payload: content
  };
};

