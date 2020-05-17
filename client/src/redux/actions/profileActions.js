import axios from "axios";
import { GET_PROFILE_ERROR, GET_PROFILE } from "./types";

//Login - Get User Token
export const profile = () => (dispatch) => {
  axios
    .get("/api/v1/auth/me")
    .then((res) => {
      dispatch({ type: GET_PROFILE, payload: res.data.data });
    })
    .catch((err) =>
      dispatch({ type: GET_PROFILE_ERROR, payload: err.response.data })
    );
};
