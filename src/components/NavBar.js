import React from "react";
// import Container from "react-bootstrap/Container";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
import { useSelector, useDispatch } from "react-redux";
import { logoutuser } from "../actions/userAction";

function NavBar() {
  const cartstate = useSelector((state) => state.cartReducers);
  const userstate = useSelector((state) => state.loginUserReducer);

  const { currentuser } = userstate;

  let dispatch = useDispatch();
  return (
    <>
      <div>
        <nav
          className="navbar navbar-expand-lg  shadow-lg p-3 mb-5"
          bg="dark"
          style={{ color: "black" }}
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              SHAM'S KITCHEN
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                {currentuser ? (
                  <div className="dropdown mt-2">
                    <a
                      className="dropdown-toggle"
                      type="button"
                      href="/login"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      {currentuser.name}
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="/orders">
                          orders
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="/login"
                          onClick={() => {
                            dispatch(logoutuser());
                          }}
                        >
                          <li>Logout</li>
                        </a>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <li className="nav-item ">
                    <a className="nav-link " aria-current="page" href="/login">
                      Login
                    </a>
                  </li>
                )}

                <li className="nav-item">
                  <a className="nav-link" href="cartscreen">
                    Cart{cartstate.cartItems.length}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
