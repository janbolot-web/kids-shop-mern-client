import React, { useCallback, useContext, useEffect, useState } from "react";
import { Link, Outlet, Route, Routes, useNavigate } from "react-router-dom";
import { AiOutlineAppstoreAdd } from "react-icons/ai";

import AddProduct from "./AddProduct";
import { useSelector } from "react-redux";

const AdminPanel = () => {
  const { role } = useSelector(({ user }) => user.user);

  const naviagte = useNavigate();

  useEffect(() => {
    if (role !== "ADMIN") {
      return naviagte("/");
    }
  }, []);

  return (
    <div className="mx-10 min-h-screen ">
      <div className="mt-20 flex ">
        <div className="md:col-span-1">
          <div className="w-96 mr-10 text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <Link
              to="add"
              type="button"
              className="relative inline-flex items-center w-full px-4 py-2 text-sm  font-light border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
            >
              <AiOutlineAppstoreAdd size={24} color="white" />
              <span className="ml-2 text-lg ">Добавить товар</span>
            </Link>
            <Link
              to="getUsers"
              type="button"
              className="relative inline-flex items-center w-full px-4 py-2 font-light font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
            >
              <AiOutlineAppstoreAdd size={24} color="white" />
              <span className="ml-2 text-lg ">Список пользователей</span>
            </Link>
            {/* <Link
              to="getProducts"
              type="button"
              className="relative inline-flex items-center w-full px-4 py-2 font-light font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
            >
              <AiOutlineAppstoreAdd size={24} color="white" />
              <span className="ml-2 text-lg">Список товаров</span>
            </Link> */}
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminPanel;
