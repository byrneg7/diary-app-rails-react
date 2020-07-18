import { CLEAR_USER, FETCH_USER } from "./types";

// auth user = {user}
// not auth user = false
// default = null

export default (state = null, action) => {
  switch (action.type) {
    case FETCH_USER:
      return action.payload;
    case CLEAR_USER:
      return false;
    default:
      return state;
  }
};