import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { userReducer } from "./auth/auth.reducer";
import { cityReducer } from "./city/city.reducer";


export const store = legacy_createStore(
  combineReducers({
   
    user: userReducer,
    city:cityReducer
   
  }),
  applyMiddleware(thunk)
);
