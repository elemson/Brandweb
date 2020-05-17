import { SET_CURRENT_USER, LOGIN_ERRORS } from "../actions/types";
import isEmpty from "../../utils/is-empty";

const intitialState = {
  isAuthenticated: false,
  user: {},
  error: "",
};

export default function (state = intitialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
        error: "",
      };
    case LOGIN_ERRORS:
      return {
        ...state,
        user: {},
        error: action.payload,
      };
    default:
      return state;
  }
}
