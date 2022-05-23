import axios from "axios";
import {
  SET_LOADED,
  FETCH_PRODUCTS,
  ADD_PRODUCT,
  SEARCH_PRODUCTS,
  DELETE_PRODUCT,
} from "../../utils/constants";

export function setLoaded(payload) {
  return {
    type: SET_LOADED,
    payload,
  };
}

export const fetchProducts = (limit, page) => async (dispatch) => {
  dispatch(setLoaded(false));

  await axios
    .get(`https://kids-shop-mern.herokuapp.com/api/product?limit=${limit}&page=${page}`, {
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => {
      dispatch({ type: FETCH_PRODUCTS, payload: response.data });
      dispatch(setLoaded(true));
    });
};

export const addProduct = (product, token) => (dispatch) => {
  axios
    .post(
      `https://kids-shop-mern.herokuapp.com/api/product/add`,
      {
        title: product.title,
        imageUrl: product.imageUrl,
        price: product.price,
        color: product.color,
        description: product.description,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((response) => {
      dispatch({ type: ADD_PRODUCT, payload: response.data });
    });
};

export const deleteProduct = (id) => async (dispatch) => {
  dispatch(setLoaded(false));
  await axios
    .delete(
      `https://kids-shop-mern.herokuapp.com/api/product/delete/${id}`,
      { id },
      {
        headers: { "Content-Type": "application/json" },
      }
    )
    .then((response) => {
      dispatch({ type: DELETE_PRODUCT, payload: response.data });
      dispatch(setLoaded(true));
    });
};

export const updateProduct = (updatedProduct, id) => async (dispatch) => {
  dispatch(setLoaded(false));
  await axios
    .patch(
      `https://kids-shop-mern.herokuapp.com/api/product/update/${id}`,
      { updatedProduct },
      {
        headers: { "Content-Type": "application/json" },
      }
    )
    .then((response) => {
      dispatch(fetchProducts(12, 1));
    });
};

export const searchProducts = (search) => (dispatch) => {
  axios
    .get(`https://kids-shop-mern.herokuapp.com/api/product/search?search=${search}`, {
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => {
      dispatch({ type: SEARCH_PRODUCTS, payload: response.data });
    });
};
// ?limit=${limit}&page=${page}
// http://localhost:5000
