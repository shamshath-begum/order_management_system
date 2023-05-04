import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginuser } from "../actions/userAction";
import Loading from "../components/Loading";
import Error from "../components/Error";

function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState();
  const dispatch = useDispatch();

  const loginstate = useSelector((state) => state.loginUserReducer);
  const { loading, error } = loginstate;
  useEffect(() => {
    if (localStorage.getItem("currentuser")) {
      window.location.href = "/";
    }
  }, []);

  let login = () => {
    let user = { email, password };
    console.log(user);
    dispatch(loginuser(user));
  };

  return (
    <>
      <div>
        <div className="row justify-content-center mt-5">
          <div className="col-md-5 text-start shadow-lg p-3 mb-5 bg-white rounded">
            <h1 style={{ textAlign: "center" }}>Login</h1>
            {loading && <Loading />}
            {error && <Error error="Invalid credentials" />}
            <div>
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
              <button
                onClick={login}
                style={{ marginTop: 20 }}
                className="btn btn-danger"
              >
                Login
              </button>
              <br />
              <a style={{ color: "black", margin: 20 }} href="/registration">
                Click Here To Register
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
