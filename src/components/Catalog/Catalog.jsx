import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import styles from "./Catalog.module.css";

const Catalog = () => {
  return (
    <div className="absolute  top-10 -left-10">
      <div
        id="dropdown"
        className="z-10 relative  bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700"
      >
        <ul
          className="py-1 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefault"
        >
          <li className={styles.item}>
            <Link
              to="/"
              className="flex items-center justify-between  px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Для мальчиков <IoIosArrowForward size={16} />
            </Link>
            <div id="dropdown" className={styles.menu}>
              <ul
                className="py-1  z-10 absolute -right-44 top-0  bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700"
                aria-labelledby="dropdownDefault"
              >
                <li className="relative">
                  <Link
                    to="/"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Комплект
                  </Link>
                </li>
                <li className="relative">
                  <Link
                    to="/"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Шорты
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Брюки
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <li className={styles.item}>
            <Link
              to="/"
              className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Для девочек <IoIosArrowForward size={16} />
            </Link>
            <div id="dropdown" className={styles.menu}>
              <ul
                className="py-1  z-10 absolute -right-44 top-10  bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700"
                aria-labelledby="dropdownDefault"
              >
                <li className="relative">
                  <Link
                    to="/"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Комплект
                  </Link>
                </li>
                <li className="relative">
                  <Link
                    to="/"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Шорты
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Брюки
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Catalog;
