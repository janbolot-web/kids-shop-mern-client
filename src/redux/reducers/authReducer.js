import { GET_USERS, IS_LOGIN, LOGIN } from "../../utils/constants";

const intitalState = { user: [], users: [], isLogin: false };

const authReducer = (state = intitalState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, user: action.payload };
    case IS_LOGIN:
      return { ...state, isLogin: action.payload };
    case GET_USERS:
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

export default authReducer;
