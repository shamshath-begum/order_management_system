import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "../actions/orderActions";
import Loading from "../components/Loading";
import Success from "../components/Success";
import Error from "../components/Error";

function Checkout({ subTotal }) {
  const orderstate = useSelector((state) => state.placeOrderReducer);
  const { loading, error, success } = orderstate;
  const dispatch = useDispatch();
  function tokenHandler(token) {
    console.log(token);
    dispatch(placeOrder(token, subTotal));
  }
  return (
    <>
      <div>
        {loading && <Loading />}
        {success && <Success success="user order placed successfully" />}
        {error && <Error error="something went wrong" />}
        <StripeCheckout
          amount={subTotal * 100}
          shippingAddress
          token={tokenHandler}
          stripeKey="pk_test_51N3eh3SHNBZiBdpKyytzJvTcbdB1Sl6pV1mkY61hbN78GC8ZiRnvrCUG8PyaclfbB2V34qwMzi7XgFZVtddk7Y4W000yKPhVH8"
          currency="INR"
        >
          <button className="btn btn-danger">Pay Now</button>
        </StripeCheckout>
      </div>
    </>
  );
}

export default Checkout;
