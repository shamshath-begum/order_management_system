import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrders } from "../actions/orderActions";
import Loading from "../components/Loading";
import Error from "../components/Error";

function OrderScreen() {
  let dispatch = useDispatch();
  const ordersstate = useSelector((state) => state.getUserOrderReducer);
  const { orders, error, loading } = ordersstate;
  useEffect(() => {
    dispatch(getUserOrders());
  }, []);

  return (
    <>
      <p>My Orders</p>
      <hr />
      <div className="row justify-content-center">
        {loading && <Loading />}
        {error && <Error error="something went wrong" />}
        {orders &&
          orders.map((order) => {
            return (
              <div
                className="col-md-8 m-2 p-1"
                style={{ backgroundColor: "red", color: "white" }}
              >
                <div className="flex-container">
                  <div className="text-start w-100 m-1">
                    <h2 style={{ fontSize: 30 }}>Items</h2>
                    <hr />
                    {order.orderItems.map((item) => {
                      return (
                        <div>
                          <p>
                            {item.name}[{item.varient}]*{item.quantity}*
                            {item.price}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  <div className="text-start w-100 m-1">
                    <h2 style={{ fontSize: 30 }}>Address</h2>
                    <hr />
                    <p>Street:{order.shippingAddress.street}</p>
                    <p>City:{order.shippingAddress.city}</p>
                    <p>Country:{order.shippingAddress.country}</p>
                    <p>PinCode:{order.shippingAddress.pincode}</p>
                  </div>
                  <div className="text-start w-100 m-1">
                    <h2 style={{ fontSize: 30 }}>Order Info</h2>
                    <hr />
                    <p>Order Amount:{order.orderAmount}</p>
                    <p>Date:{order.createdAt.substring(0, 10)}</p>
                    <p>Transaction Id:{order.transactionId}</p>
                    <p>Order Id:{order._id}</p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default OrderScreen;
