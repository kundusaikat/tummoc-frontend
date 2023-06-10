import * as types from "./city.actionType";

const init = {
  cityData: [], // Rename wishlistData to cityData
  user: {},
  msg: "",
  isLoading: false,
  isError: false,
};

export const cityReducer = (state = init, action) => { 
  const { type, payload } = action;

  switch (type) {
    case types.CITY_REQUEST: 
      return {
        ...state,
        isLoading: true,
      };
    case types.CITY_SUCCESS: 
      return {
        ...state,
        isLoading: false,
        cityData: payload.wishData, 
        user: payload.user,
        msg: payload.msg,
      };
    case types.CITY_ERROR: 
      return {
        ...state,
        isError: true,
        cityData: [], 
        msg: payload.msg,
      };

    
    default:
      return state;
  }
};

