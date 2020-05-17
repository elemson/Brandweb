import axios from "axios";
import jwt_decode from "jwt-decode";
import { GET_ERRORS, LOGIN_ERRORS, SET_CURRENT_USER } from "./types";
import setAuthToken from "../../utils/setAuthToken";

export const registerUser = (userData, history) => (dispatch) => {
  axios
    .post("/api/v1/auth/register", userData)
    .then((res) => history.push("/"))
    .catch((err) => {
      dispatch({ type: GET_ERRORS, payload: err.response.data });
    });
};

//Login - Get User Token
export const loginUser = (userData) => (dispatch) => {
  console.log(userData);
  axios

    .post("/api/v1/auth/login", userData)
    .then((res) => {
      //save to localStorage
      const { token } = res.data;

      //Set token to localstorage
      localStorage.setItem("jwtToken", token);
      //Set token to Auth header
      setAuthToken(token);

      //Decode token to get user data
      const decoded = jwt_decode(token);

      dispatch(setCurrentUser(decoded));
    })
    .catch((err) =>
      dispatch({ type: LOGIN_ERRORS, payload: err.response.data.error })
    );
};

//Set logged in user
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

//Log user out
export const logoutUser = (history) => (dispatch) => {
  //Remove token from localstorage
  localStorage.removeItem("jwtToken");
  //Remoce auth header for future requests
  setAuthToken(false);
  //Ser current user to {} will set isAuthenticate to false

  dispatch(setCurrentUser({}));
  history.push("/");
};
