import axios from "axios";
export const placeOrder = (token, subTotal) => async (dispatch, getState) => {
  dispatch({ type: "PLACE_ORDER_REQUEST" });
  const currentUser = getState().loginUserReducer.currentUser;
  const cartItems = getState().cartReducers.cartItems;
  try {
    const res = await axios.post("http://localhost:8000/orders/placeorder ", {
      token,
      subTotal,
      currentUser,
      cartItems,
    });
    dispatch({ type: "PLACE_ORDER_SUCCESS" });
    console.log(res);
  } catch (error) {
    dispatch({ type: "PLACE_ORDER_FAILED" });
  }
};

export const getUserOrders = () => async (dispatch, getState) => {
  const currentUser = getState().loginUserReducer.currentUser;
  dispatch({ type: "GET_USER_ORDERS_REQUEST" });
  try {
    let res = await axios.post("http://localhost:8000/orders/getuserorders", {
      userid: currentUser._id,
    });
    console.log(res);
    dispatch({ type: "GET_USER_ORDERS_SUCCESS", payload: res.data });
  } catch (error) {
    dispatch({ type: "GET_USER_ORDERS_FAILED", payload: error });
  }
};
