export const getAllChickensReducer = (state = { pizzas: [] }, action) => {
  switch (action.type) {
    case "GET_CHICKENS_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "GET_CHICKENS_SUCCESS":
      return {
        loading: false,
        pizzas: action.payload,
      };
    case "GET_CHICKENS_FAILED":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
