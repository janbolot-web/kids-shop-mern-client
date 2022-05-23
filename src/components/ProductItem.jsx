import React from "react";
import { Link } from "react-router-dom";
import {
  BiCartAlt,
  BiEditAlt,
  BiHeart,
  BiTrashAlt,
  BiLoaderCircle,
} from "react-icons/bi";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import EditProduct from "./EditProduct";
import { useOutside } from "../hooks/useOutsiide";
import { deleteProduct } from "../redux/actions/products";
import { addProductToCart } from "../redux/actions/cart";
import Alert from "./Alert";
import { useState } from "react";

const ProductItem = ({ product, setAlert, setMessage }) => {
  const { role, userId } = useSelector(({ user }) => user.user);
  const { ref, isShow, setIsShow } = useOutside(false);
  const [disabled, setDisabled] = useState(false);
  const dispatch = useDispatch();
  const handleDeleteProduct = (id) => {
    const conf = window.confirm(`Вы хотите удалить этот товар?`);
    if (!conf) {
      return;
    }
    dispatch(deleteProduct(id));
  };

  const addToCart = async () => {
    setDisabled(true);
    await dispatch(addProductToCart(userId, product._id));
    setDisabled(false);
    setMessage("Товар добавлен в корзину");
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  };

  return (
    <>
      <div className=" relative flex flex-col items-center justify-center ">
        <div className="container">
          <div className="max-w-md w-full bg-slate-50 shadow-lg rounded-xl dark:bg-gray-900 ">
            <div className="flex flex-col ">
              <div className="">
                <div className="relative h-72 w-full mb-3 min-h-80">
                  <div className="absolute flex flex-col top-0 right-0 p-3">
                    <button className="transition ease-in duration-300  bg-white/80  hover:text-purple-500 shadow hover:shadow-md text-gray-800 rounded-full w-8 h-8 text-center p-1">
                      <BiHeart size={24} />
                    </button>
                    {role === "ADMIN" && (
                      <>
                        <button
                          ref={ref}
                          onClick={() => setIsShow(true)}
                          className="mt-2 transition ease-in duration-300  bg-white/80  hover:text-purple-500 shadow hover:shadow-md text-gray-800 rounded-full w-8 h-8 text-center p-1"
                        >
                          <BiEditAlt size={24} />
                        </button>
                        <button
                          onClick={() => handleDeleteProduct(product._id)}
                          className="mt-2 transition ease-in duration-300  bg-white/80  hover:text-purple-500 shadow hover:shadow-md text-gray-800 rounded-full w-8 h-8 text-center p-1"
                        >
                          <BiTrashAlt size={24} />
                        </button>
                        {isShow && (
                          <EditProduct
                            setIsShow={setIsShow}
                            product={product}
                            dispatch={dispatch}
                          />
                        )}
                      </>
                    )}
                  </div>
                  <Link to={`/product/${product._id}`}>
                    <img
                      src={product.imageUrl}
                      alt="Just a flower"
                      className=" w-full h-full object-center object-cover rounded-t-xl"
                    />
                  </Link>
                </div>
                <div className="flex-auto justify-evenly p-4">
                  <div className="flex flex-wrap ">
                    <div className="w-full flex-none text-sm flex items-center text-gray-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-red-500 mr-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-gray-400 whitespace-nowrap mr-3">
                        4.60
                      </span>
                      <span className="mr-2 text-gray-400">India</span>
                    </div>
                    <div className="flex items-center w-full justify-between min-w-0 ">
                      <Link
                        to={`/product/${product._id}`}
                        className="text-lg mr-auto cursor-pointer text-gray-900 hover:text-purple-500 truncate dark:text-white "
                      >
                        {product.title}
                      </Link>
                    </div>
                  </div>
                  <div className="text-xl flex items-center w-full justify-between  text-gray-900 font-semibold mt-1 dark:text-white">
                    <div> {product.price} сом</div>
                    <div className="flex items-center bg-green-400 text-white text-xs px-2 py-1 ml-3 rounded-lg">
                      INSTOCK
                    </div>
                  </div>
                  <div className="lg:flex  py-4  text-sm text-gray-600">
                    <div className="flex-1 inline-flex items-center  mb-3">
                      <div className="w-full flex-none text-sm flex items-center text-gray-600">
                        <ul className="flex flex-row justify-center items-center space-x-2">
                          <li className="">
                            <span className="block p-1 border-2 border-slate-50 dark:border-gray-900 hover:border-blue-600 rounded-full transition ease-in duration-300">
                              <a
                                href="#blue"
                                className="block w-3 h-3 bg-blue-600 dark: rounded-full"
                              ></a>
                            </span>
                          </li>
                          <li className="">
                            <span className="block p-1 border-2 border-slate-50 dark:border-gray-900 hover:border-yellow-400 rounded-full transition ease-in duration-300">
                              <a
                                href="#yellow"
                                className="block w-3 h-3  bg-yellow-400 dark: rounded-full"
                              ></a>
                            </span>
                          </li>
                          <li className="">
                            <span className="block p-1 border-2 border-slate-50 dark:border-gray-900 hover:border-red-500 rounded-full transition ease-in duration-300">
                              <a
                                href="#red"
                                className="block w-3 h-3  bg-red-500 dark: rounded-full"
                              ></a>
                            </span>
                          </li>
                          <li className="">
                            <span className="block p-1 border-2 border-slate-50 dark:border-gray-900 hover:border-green-500 rounded-full transition ease-in duration-300">
                              <a
                                href="#green"
                                className="block w-3 h-3  bg-green-500 dark: rounded-full"
                              ></a>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex-1 inline-flex items-center mb-3">
                      <span className="text-secondary whitespace-nowrap mr-3">
                        Size
                      </span>
                      <div className="cursor-pointer text-gray-400 ">
                        <span className="hover:text-purple-500 p-1 py-0">
                          S
                        </span>
                        <span className="hover:text-purple-500 p-1 py-0">
                          M
                        </span>
                        <span className="hover:text-purple-500 p-1 py-0">
                          L
                        </span>
                        <span className="hover:text-purple-500 p-1 py-0">
                          XL
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2 text-sm font-medium justify-start">
                    <button
                      onClick={addToCart}
                      disabled={disabled}
                      className="transition ease-in w-48 justify-center duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 bg-purple-500 px-5 py-2 disabled:opacity-40 hover:shadow-lg tracking-wider text-white rounded-full hover:bg-purple-600 "
                    >
                      <span className="mr-2">Add to cart</span>
                      <BiCartAlt size={20} />
                    </button>
                    <button className="transition ease-in duration-300 bg-gray-700 hover:bg-gray-800 border hover:border-gray-500 border-gray-700 hover:text-white  hover:shadow-lg text-gray-400 rounded-full w-9 h-9 text-center p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className=""
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
