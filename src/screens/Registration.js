import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userregister } from "../actions/userAction";
import Loading from "../components/Loading";
import Success from "../components/Success";
import Error from "../components/Error";

function Registration() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState();
  let [cpassword, setcPassword] = useState();

  const dispatch = useDispatch();
  let registerstate = useSelector((state) => state.registerUserReducer);

  const { error, loading, success } = registerstate;
  let register = () => {
    if (password != cpassword) {
      alert("passwords not matched");
    } else {
      let user = { name, email, password, cpassword };
      console.log(user);
      dispatch(userregister(user));
    }
  };

  return (
    <>
      <div>
        <div className="row justify-content-center mt-5">
          <div className="col-md-5 text-start shadow-lg p-3 mb-5 bg-white rounded">
            {loading && <Loading />}
            {success && <Success success="user registered successfully" />}
            {error && <Error error="Email already exist" />}
            <h1 style={{ textAlign: "center" }}>Register</h1>
            <div>
              <input
                style={{ marginTop: 20, border: " 1px solid black " }}
                type="text"
                placeholder="name"
                className="form-control"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              />
              <input
                style={{ marginTop: 20, border: " 1px solid black " }}
                type="text"
                placeholder="email"
                className="form-control"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                style={{ marginTop: 20, border: " 1px solid black " }}
                type="text"
                placeholder="password"
                className="form-control"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                style={{ marginTop: 20, border: " 1px solid black " }}
                type="text"
                placeholder="confirm password "
                className="form-control"
                value={cpassword}
                required
                onChange={(e) => {
                  setcPassword(e.target.value);
                }}
              />
              <button
                onClick={register}
                style={{ marginTop: 20, marginBottom: 30 }}
                className="btn btn-danger"
              >
                Register
              </button>
              <br />
              <a style={{ color: "black" }} href="/login">
                Click here to Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Registration;
