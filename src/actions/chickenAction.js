import axios from "axios";
export const getAllChickens = () => async (dispatch) => {
  dispatch({ type: "GET_CHICKENS_REQUEST" });
  try {
    let res = await axios.get("http://localhost:8000/get_chicken");
    console.log(res);
    dispatch({ type: "GET_CHICKENS_SUCCESS", payload: res.data });
  } catch (error) {
    dispatch({ type: "GET_CHICKENS_FAILED", payload: error });
  }
};
