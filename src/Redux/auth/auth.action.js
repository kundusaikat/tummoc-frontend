import axios from "axios";
import * as types from "./auth.actionType";

// SIGNUP FUNCTION
export const getSignup = (payload) => (dispatch) => {
  dispatch({ type: types.SIGNUP_REQUEST });
  axios
    .post(`${process.env.REACT_APP_API_BASE_URL}/api/user`, payload)
    .then((res) => {
      // console.log(res.data)
      dispatch({ type: types.SIGNUP_SUCCESS, payload: res.data });
    })
    .catch((err) => dispatch({ type: types.SIGNUP_FAILURE, payload: err }));
};

// GET USER FUNCTION
export const getUser = (payload)  =>(dispatch)=> {
  return;
  return axios
    .get(`${process.env.REACT_APP_API_BASE_URL}/api/user/info`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${payload}`,
      },
    })
    .then((res) => {
      // console.log(res.data, 'users');
      dispatch({ type: types.GET_USER, payload: res.data.user });
    });
};
// LOGIN FUNCTION
export const getLogin = (payload) => (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST });
  axios
    .post(`${process.env.REACT_APP_API_BASE_URL}/api/user/login`, payload)
    .then((res) => {
      // console.log(res.data);
      dispatch({ type: types.LOGIN_SUCCESS, payload: res.data });
      getUser(res.data.token,dispatch)
    })
    .catch((err) => dispatch({ type: types.LOGIN_FAILURE, payload: err }));
};
// ${process.env.REACT_APP_API_BASE_URL}/user


export const userLogout = (token) => (dispatch) => {

  return axios
    .get(`${process.env.REACT_APP_API_BASE_URL}/api/user/logout`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    })
    .then((res) => {
      // console.log(res.data, 'users');
      dispatch({ type: types.LOG_OUT, payload: { msg: "LOGOUT SUCCESS" } });
    });
};


export const googleAuth = (token) => (dispatch) => {
  dispatch({ type: types.GOOGLE_AUTH_SUCCESS, payload: token });
  dispatch(getUser(token));
};

