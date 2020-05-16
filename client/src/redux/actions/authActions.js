import axios from "axios";
import { GET_ERRORS } from "./types";

export const registerUser = (userData) => (dispatch) => {
  axios
    .post("/api/v1/auth/register", userData)
    .then((res) => console.log(res))
    .catch((err) =>
      dispatch({ type: GET_ERRORS, payload: err.response.data.error })
    );
};
