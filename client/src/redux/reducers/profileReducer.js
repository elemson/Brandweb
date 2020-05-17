import { GET_PROFILE, GET_PROFILE_ERROR } from "../actions/types";

const intitialState = {
  profile: {},
  profileError: {},
};

export default function (state = intitialState, action) {
  switch (action.type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    case GET_PROFILE_ERROR:
      return {
        ...state,
        profileError: action.payload,
      };
    default:
      return state;
  }
}
