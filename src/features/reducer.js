import { LOGIN } from "./actionTypes.js";
  
  export const reducer = (state = {}, action) => {
    switch (action.type) {
      case LOGIN:
        return { ...state, loggedIn: true };
        break;
      default:
        return state;
    }
  };
  