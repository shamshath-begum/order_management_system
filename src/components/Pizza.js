import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/cartActions";

function Pizza({ pizza }) {
  const dispatch = useDispatch();

  function addtocart() {
    dispatch(addToCart(pizza, quantity, varient));
  }

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let [quantity, setQuantity] = useState(1);
  let [varient, setVarient] = useState("small");

  return (
    <>
      <div className="shadow-lg p-3 mb-5 bg-body-tertiary rounded m-5">
        <div onClick={handleShow}>
          <h4>{pizza.name}</h4>

          <img src={pizza.image} alt="pizza" className="img-fluid mb-2" />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            margin: "10px",
          }}
        >
          <span>
            <b>Varients</b>
          </span>
          <span>
            <b>Quantity</b>
          </span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            margin: "10px",
          }}
        >
          <select
            className="form-control"
            value={varient}
            onChange={(e) => setVarient(e.target.value)}
            style={{ boxShadow: "none", border: "1px solid black" }}
          >
            {pizza.varients.map((varient) => {
              return <option value={varient}>{varient}</option>;
            })}
          </select>
          &nbsp;{" "}
          <select
            className="form-control"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            style={{ boxShadow: "none", border: "1px solid black" }}
          >
            {[...Array(10).keys()].map((x, i) => {
              return <option value={i + 1}>{i + 1}</option>;
            })}
          </select>
        </div>

        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <span style={{ marginTop: "10px" }}>
            <b>Price:Rs.{pizza.prices[0][varient] * quantity}</b>
          </span>
          <button
            onClick={addtocart}
            style={{
              backgroundColor: "red",
              border: "none",
              borderRadius: 5,
              color: "white",
            }}
          >
            Add To Cart
          </button>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={pizza.image}
            alt="pizza"
            className="img-fluid mb-2 "
            style={{ height: 200, width: 300 }}
          />
          <h6>
            <b>{pizza.description}</b>
          </h6>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-danger" onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Pizza;
