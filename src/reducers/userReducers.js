export const registerUserReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_REGISTER_REQUEST":
      return {
        Loading: true,
      };
    case "USER_REGISTER_SUCCESS":
      return {
        Loading: false,
        success: true,
      };
    case "USER_REGISTER_FAILED":
      return {
        Loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const loginUserReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_LOGIN_REQUEST":
      return {
        Loading: true,
      };
    case "USER_LOGIN_SUCCESS":
      return {
        Loading: false,
        success: true,
        currentuser: action.payload,
      };
    case "USER_LOGIN_FAILED":
      return {
        Loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
