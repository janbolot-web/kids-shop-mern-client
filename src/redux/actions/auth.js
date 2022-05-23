import axios from "axios";
import { GET_USERS, IS_LOGIN, LOGIN } from "../../utils/constants";

export const login = (form) => (dispatch) => {
  try {
    axios
      .post(
        "https://kids-shop-mern.herokuapp.com/api/auth/login",
        { ...form },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        dispatch(
          setUser({
            token: response.data.token,
            userId: response.data.userId,
            role: response.data.role,
          })
        );
      });
  } catch (e) {
    console.log(e);
  }
};

export function setUser(user) {
  localStorage.setItem(
    "userData",
    JSON.stringify({
      userId: user.userId,
      token: user.token,
      role: user.role,
    })
  );
  return {
    type: "LOGIN",
    payload: user,
  };
}

export function setIsLogin(isLogin) {
  return {
    type: IS_LOGIN,
    payload: isLogin,
  };
}

export const fetchUsers = (token) => async (dispatch) => {
  try {
    await axios
      .get(`https://kids-shop-mern.herokuapp.com/api/auth/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => dispatch(getUsers(response.data)));
  } catch (e) {
    console.log(e);
  }
};

export function getUsers(users) {
  return {
    type: GET_USERS,
    payload: users,
  };
}
