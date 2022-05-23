import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FiLogOut, FiUser } from "react-icons/fi";
import { AuthContext } from "../context/AuthContext";
import { useDispatch } from "react-redux";
import { setIsLogin } from "../redux/actions/auth";

const Dropdown = () => {
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(setIsLogin(false));
    localStorage.removeItem("userData");
  };

  return (
    <div
      className={
        "absolute w-48 -right-20 top-10 text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      }
    >
      <Link
        to="/admin"
        type="button"
        className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
      >
        <FiUser size={16} />
        <span className="ml-2">Личный кабинет</span>
      </Link>

      <button
        type="button"
        onClick={logout}
        className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium rounded-b-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
      >
        <FiLogOut size={16} />
        <Link to="/auth" className="ml-2">
          Выйти
        </Link>
      </button>
    </div>
  );
};

export default Dropdown;
