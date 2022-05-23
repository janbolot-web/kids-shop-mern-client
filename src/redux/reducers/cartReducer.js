import {
  ADD_PRODUCT_TO_CART,
  CLEAR_CART,
  DELETE_PRODUCT_FROM_CART,
  GET_PRODUCTS_FROM_CART,
  SET_LOADED_CART,
} from "../../utils/constants";

const intitalState = {
  isLoaded: false,
  cart: [],
};

const cartReducer = (state = intitalState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_FROM_CART:
      return { ...state, cart: action.payload };
    case ADD_PRODUCT_TO_CART:
      return { ...state, cart: action.payload };
    case SET_LOADED_CART:
      return { ...state, isLoaded: action.payload };
    case DELETE_PRODUCT_FROM_CART:
      return { ...state, cart: action.payload };
    case CLEAR_CART:
      return { ...state, cart: action.payload };
    default:
      return state;
  }
};

export default cartReducer;
