import axios from "axios";

export const userregister = (user) => async (dispatch) => {
  dispatch({ type: "USER_REGISTER_REQUEST" });

  try {
    let res = await axios.post("http://localhost:8000/registration ", user);
    console.log(res);
    dispatch({ type: "USER_REGISTER_SUCCESS", payload: res.data });
  } catch (error) {
    dispatch({ type: "USER_REGISTER_FAILED", payload: error });
  }
};

export const loginuser = (user) => async (dispatch) => {
  dispatch({ type: "USER_LOGIN_REQUEST" });

  try {
    let res = await axios.post("http://localhost:8000/login ", user);
    console.log(res);
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: res.data });
    localStorage.setItem("currentuser", JSON.stringify(res.data));
    window.location.href = "/";
  } catch (error) {
    dispatch({ type: "USER_LOGIN_FAILED", payload: error });
  }
};

export const logoutuser = () => async (dispatch) => {
  localStorage.removeItem("currentuser");
  window.location.href = "/login";
};
