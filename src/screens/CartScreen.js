import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../actions/cartActions";
import { deleteFromCart } from "../actions/cartActions";
import Checkout from "../components/Checkout";

function CartScreen() {
  let dispatch = useDispatch();

  const cartstate = useSelector((state) => state.cartReducers);
  const cartItems = cartstate.cartItems;

  var subTotal = cartItems.reduce((x, item) => x + item.price, 0);

  return (
    <>
      <div>
        <div className="row justify-content-center">
          <div className="col-md-6 ">
            <h1 style={{ marginBottom: 40 }}>Cart Details</h1>

            {cartItems.map((item) => {
              return (
                <div style={{ display: "flex" }}>
                  <div className="text-start m-1 w-100">
                    <h4>
                      {item.name}&nbsp;&nbsp; [{item.varient}]
                    </h4>
                    <h5>
                      Price:&nbsp;&nbsp;{item.quantity}*
                      {item.prices[0][item.varient]}={item.price}
                    </h5>
                    <b>Quantity:</b>&nbsp;&nbsp;
                    <i
                      className="fa-solid fa-plus"
                      style={{ color: "blue" }}
                      onClick={() => {
                        dispatch(
                          addToCart(item, item.quantity + 1, item.varient)
                        );
                      }}
                    ></i>
                    &nbsp;&nbsp;
                    {item.quantity}&nbsp;&nbsp;
                    <i
                      className="fa-solid fa-minus "
                      style={{ color: "red" }}
                      onClick={() => {
                        dispatch(
                          addToCart(item, item.quantity - 1, item.varient)
                        );
                      }}
                    ></i>
                    <hr />
                  </div>

                  <div className="m-1 w-100 mt-3">
                    <img
                      src={item.image}
                      alt="cartImage"
                      style={{ height: 50, width: 50 }}
                    />
                  </div>
                  <div lassName="m-1 w-100 ">
                    <i
                      className="fa-solid fa-trash "
                      onClick={() => {
                        dispatch(deleteFromCart(item));
                      }}
                      style={{ color: "red", marginTop: 30 }}
                    ></i>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="col-lg-4 text-end ">
            <h1>SubTotal:Rs.{subTotal}</h1>
            <Checkout subTotal={subTotal} />
          </div>
        </div>
      </div>
    </>
  );
}

export default CartScreen;
