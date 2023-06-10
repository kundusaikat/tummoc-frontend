import * as types from "./city.actionType";
import axios from "axios";

// GET WISHLIST DATA FUNCTION
export const getData = (payload) => (dispatch) => {
  dispatch({ type: types.CITY_REQUEST });
  return axios
    .get(`${process.env.REACT_APP_API_BASE_URL}/api/city`, {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${payload}`,
      },
    })
    .then((res) => {
      // console.log(res)
      dispatch({ type: types.CITY_SUCCESS, payload: res.data });
    })
    .catch((err) => dispatch({ type: types.CITY_ERROR, payload: err }));
};
