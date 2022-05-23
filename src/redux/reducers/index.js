import { combineReducers } from "redux";
import authReducer from "./authReducer";
import cartReducer from "./cartReducer";
import productsReducer from "./productsReducer";

const rootReducer = combineReducers({
  products: productsReducer,
  user: authReducer,
  cart: cartReducer,
});

export default rootReducer;
