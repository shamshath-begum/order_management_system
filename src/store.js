import { combineReducers } from "redux";
import { getAllChickensReducer } from "./reducers/chickenReducer";
import { loginUserReducer, registerUserReducer } from "./reducers/userReducers";

import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { cartReducers } from "./reducers/cartReducers";
import {
  placeOrderReducer,
  getUserOrderReducer,
} from "./reducers/orderReducers";

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
const currentuser = localStorage.getItem("currentuser")
  ? JSON.parse(localStorage.getItem("currentuser"))
  : [];

const initialState = {
  cartReducers: {
    cartItems: cartItems,
  },
  loginUserReducer: {
    currentuser: currentuser,
  },
};
const composeEnhancers = composeWithDevTools({});

const finalReducer = combineReducers({
  getAllChickensReducer: getAllChickensReducer,
  cartReducers: cartReducers,
  registerUserReducer: registerUserReducer,
  loginUserReducer: loginUserReducer,
  placeOrderReducer: placeOrderReducer,
  getUserOrderReducer: getUserOrderReducer,
});

const store = createStore(
  finalReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
