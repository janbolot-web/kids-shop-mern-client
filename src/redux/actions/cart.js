import axios from "axios";
import {
  ADD_PRODUCT_TO_CART,
  CLEAR_CART,
  DELETE_PRODUCT_FROM_CART,
  GET_PRODUCTS_FROM_CART,
  SET_LOADED_CART,
} from "../../utils/constants";

export function setLoaded(payload) {
  return {
    type: SET_LOADED_CART,
    payload,
  };
}

export const addProductToCart = (id, productId) => async (dispatch) => {
  dispatch(setLoaded(true));
  await axios
    .post(
      `https://kids-shop-mern.herokuapp.com/api/cart/add/${id}`,
      { quantity: 1, productId },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      dispatch({ type: ADD_PRODUCT_TO_CART, payload: response.data });
      dispatch(setLoaded(false));
    });
};

export const getProductsFromCart = (id) => (dispatch) => {
  axios
    .get(`https://kids-shop-mern.herokuapp.com/api/cart/get/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) =>
      dispatch({ type: GET_PRODUCTS_FROM_CART, payload: response.data })
    );
};

export const deleteProductToCart =
  (userId, productId, minus) => async (dispatch) => {
    // dispatch(setLoaded(true));
    await axios
      .delete(`https://kids-shop-mern.herokuapp.com/api/cart/${userId}/${productId}`, {
        data: { removeItem: minus },
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        dispatch({ type: DELETE_PRODUCT_FROM_CART, payload: response.data });
        // dispatch(setLoaded(false));
      });
  };

export const clearToCart = (userId) => async (dispatch) => {
  // dispatch(setLoaded(true));
  await axios
    .delete(`https://kids-shop-mern.herokuapp.com/api/cart/${userId}`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      dispatch({ type: CLEAR_CART, payload: response.data });
      // dispatch(setLoaded(false));
    });
};
