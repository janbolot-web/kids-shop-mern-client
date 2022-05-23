import React, { useState } from "react";
import { BiSearch, BiCartAlt, BiMenu } from "react-icons/bi";
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "axios";

import Modal from "./Modal";
import { useOutside } from "../hooks/useOutsiide";
import Dropdown from "./Dropdown";
import Loader from "./Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { searchProducts } from "../redux/actions/products";
import Catalog from "./Catalog/Catalog";

const Header = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [isShowCategory, setIsShowCategory] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const { ref, isShow, setIsShow } = useOutside(false);
  const [searchTimeout, setSearchTimeout] = useState(false);
  const totalCount = useSelector(
    ({ cart }) => cart.cart && cart.cart.totalCount
  );
  const products = useSelector(({ products }) => products.searchProducts);
  const { isLogin } = useSelector(({ user }) => user);
  const dispatch = useDispatch();

  const searchChangeHandler = async (e) => {
    setSearchValue(e.target.value);
    if (searchTimeout != false) {
      clearTimeout(searchTimeout);
    }
    setIsLoading(true);
    if (e.target.value != "") {
      setSearchTimeout(
        setTimeout(
          (value) => {
            onSearchProducts(value);
          },
          500,
          e.target.value
        )
      );
    } else {
      await dispatch(searchProducts());
      setIsLoading(false);
    }
  };

  const onSearchProducts = async (search) => {
    try {
      await dispatch(searchProducts(search));
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="">
      <nav className=" bg-slate-50 fixed w-full top-0 z-20 drop-shadow-2xl">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute text-cyan-800  inset-y-0 left-0 flex items-center sm:hidden">
              <BiMenu size={26} />
            </div>
            <div className="flex-1 flex items-center ml-10 sm:ml-0 sm:items-stretch sm:justify-start">
              <Link
                to="/"
                className="flex-shrink-0 flex text-xl font-bold  items-center text-cyan-800 sm:text-2xl "
              >
                BabyStore
              </Link>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  <div
                    onClick={() => setIsShowCategory(!isShowCategory)}
                    className="relative border-cyan-800 w-24 justify-between px-3 items-center border-2 text-cyan-800  rounded-md text-sm font-medium cursor-pointer flex "
                  >
                    <span>Каталог</span>
                    <MdArrowForwardIos className="text-sm " />
                    {isShowCategory && <Catalog />}
                  </div>

                  <div className="text-cyan-800 hover:bg-sky-600  transition-all hover:text-white px-3 py-2 rounded-md text-sm font-medium ">
                    +996 000 00 00 00
                  </div>

                  <div className="flex w-80 " onClick={() => setModal(true)}>
                    <div className="text-cyan-800 text-md border-b-2 border-cyan-800 px-5 pt-1 ">
                      Поиск по названию товара
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Link
              to="/cart"
              className=" inset-y-0  right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
            >
              <button
                type="button"
                className="relative w-8 h-8  text-cyan-800  flex items-center justify-center rounded-full focus:outline-none "
              >
                <span className="absolute text-xs sm:text-sm top-0 right-0 sm:-top-1 sm:-right-1 text-white bg-red-600 w-4 h-4 sm:w-5 sm:h-5 rounded-full">
                  {totalCount && isLogin ? totalCount : 0}
                </span>
                <BiCartAlt className="text-3xl sm:text-5xl" />
              </button>
            </Link>

            <div className="ml-5 relative">
              {isLogin ? (
                <button
                  type="button"
                  className="w-8 h-8 duration-1000 transition-all transform bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-cyan-800 "
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                  ref={ref}
                  onClick={() => setIsShow(!isShow)}
                >
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </button>
              ) : (
                <Link
                  to={"/auth"}
                  className="text-white w-32 h-10  bg-sky-600 rounded-md flex items-center justify-center"
                >
                  Войти
                </Link>
              )}
              {isShow && isLogin && <Dropdown />}
            </div>
          </div>
        </div>
      </nav>
      {modal && (
        <div className="">
          <Modal active={modal} setActive={setModal}>
            <div className=" flex bg-white justify-between items-center p-5 rounded-t border-b-2 ">
              <input
                className="border w-11/12 text-md  border-gray-300 bg-white h-10 px-5  rounded-md  focus:outline-none"
                type="search"
                name="search"
                value={searchValue}
                onChange={(e) => searchChangeHandler(e)}
                placeholder="Поиск по названию товара"
              />
            </div>
            {isLoading ? (
              <div className="w-full h-96 flex justify-center items-center ">
                <Loader />
              </div>
            ) : products.length ? (
              <div className=" grid p-5 grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {products.map((product) => (
                  <Link
                    to={`/product/${product._id}`}
                    key={product._id}
                    className="group relative"
                    onClick={() => setModal(false)}
                  >
                    <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                      <img
                        src={product.imageUrl}
                        className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                      />
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-sm text-gray-700">
                          <div>
                            <span
                              aria-hidden="true"
                              className="absolute inset-0"
                            />
                            {product.title}
                          </div>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          Цвет: {product.color}
                        </p>
                      </div>
                      <p className="text-sm font-medium text-gray-900">
                        {product.price} сом
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="flex items-center mt-10 text-3xl justify-center h-96 w-full ">
                Что вы ищите?
              </div>
            )}
          </Modal>
        </div>
      )}
    </div>
  );
};

export default Header;
