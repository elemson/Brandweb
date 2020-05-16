import { GET_ERRORS } from "../actions/types";
const intitialState = {
  error: null,
};

export default function (state = intitialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
