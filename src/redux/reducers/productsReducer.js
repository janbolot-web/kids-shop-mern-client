import {
  SET_LOADED,
  FETCH_PRODUCTS,
  ADD_PRODUCT,
  SEARCH_PRODUCTS,
  DELETE_PRODUCT,
} from "../../utils/constants";

const initialState = {
  products: [],
  searchProducts: [],
  isLoaded: false,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, products: action.payload };
    case ADD_PRODUCT:
      return { ...state, products: action.payload };
    case SET_LOADED:
      return { ...state, isLoaded: action.payload };
    case SEARCH_PRODUCTS:
      return { ...state, searchProducts: action.payload };
    case DELETE_PRODUCT:
      // console.log(
      //   state.products.products.filter(
      //     (product) => product._id !== action.payload._id
      //   )
      // );
      return {
        ...state,
        products: state.products.products.filter(
          (product) => product._id !== action.payload._id
        ),
      };
    default:
      return state;
  }
};
export default productsReducer;
